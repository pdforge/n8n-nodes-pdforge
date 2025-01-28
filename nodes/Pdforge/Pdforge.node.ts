import {
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	IExecuteFunctions,
	IDataObject,
} from 'n8n-workflow';

import { pdforgeApiRequest } from './GenericFunctions';
import { imageOperations } from './ImageDescription';
import { pdfOperations } from './PdfDescription';
import { sharedFields } from './SharedFields';

export class Pdforge implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Pdforge',
		name: 'pdforge',
		icon: 'file:pdforge.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Generate PDF or PNG with pdforge',
		defaults: {
			name: 'Pdforge',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'pdforgeApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.pdforge.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Generate PDF',
						value: 'pdf',
					},
					{
						name: 'Generate Image',
						value: 'image',
					},
				],
				default: 'pdf',
			},
			...pdfOperations,
			...imageOperations,
			...sharedFields,
		],
	};

	methods = {
		loadOptions: {
			// Get all the available templates to display them to user so that they can
			// select them easily
			async getTemplates(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const returnData: INodePropertyOptions[] = [];
				const { templates } = await pdforgeApiRequest.call(
					this,
					'GET',
					'/integration',
					'templates',
				);

				for (const template of templates) {
					returnData.push({
						name: template.displayName,
						value: template.id,
					});
				}
				return returnData;
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: IDataObject[] = [];
		const length = items.length;
		let responseData;
		const resource = this.getNodeParameter('resource', 0);
		const operation = this.getNodeParameter('operation', 0);

		for (let i = 0; i < length; i++) {
			const templateId = this.getNodeParameter('templateId', i) as string;
			const data = this.getNodeParameter('data', i);
			const webhook = operation === 'async' ? this.getNodeParameter('webhook', i) : undefined;
			const convertToImage = resource === 'image' ? true : false;
			const body: IDataObject = {
				templateId,
				convertToImage,
				webhook,
				data,
			};

			responseData = await pdforgeApiRequest.call(this, 'POST', '/pdf', operation, body);

			returnData.push(responseData as INodeExecutionData);
		}

		return [this.helpers.returnJsonArray(returnData)];
	}
}
