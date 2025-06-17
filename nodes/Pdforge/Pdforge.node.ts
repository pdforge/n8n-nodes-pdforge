import {
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	IExecuteFunctions,
	IDataObject,
} from 'n8n-workflow';

import { htmlToPdfFields, htmlToPdfOperations } from './descriptions/HtmlToPdfDescription';
import { imageOperations } from './descriptions/ImageDescription';
import { templateFields } from './descriptions/TemplateFields';
import { pdfOperations } from './descriptions/PdfDescription';
import { sharedFields } from './descriptions/SharedFields';

import { pdforgeApiRequest } from './GenericFunctions';
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
					{
						name: 'Convert HTML to PDF',
						value: 'html-to-pdf',
					},
				],
				default: 'pdf',
			},
			...pdfOperations,
			...imageOperations,
			...htmlToPdfOperations,

			...templateFields,
			...htmlToPdfFields,
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
			//template fields
			const templateId =
				resource !== 'html-to-pdf' && (this.getNodeParameter('templateId', i, undefined) as string);

			const variables =
				resource !== 'html-to-pdf' && this.getNodeParameter('variables', i, undefined);
			const data =
				resource !== 'html-to-pdf' && typeof variables === 'string'
					? JSON.parse(variables)
					: variables;

			// html to pdf fields
			const html =
				resource === 'html-to-pdf' && (this.getNodeParameter('html', i, undefined) as string);
			const pdfParams =
				resource === 'html-to-pdf' && this.getNodeParameter('pdfParams', i, undefined);

			// shared fields
			const webhook =
				operation === 'async' ? this.getNodeParameter('webhook', i, undefined) : undefined;

			const s3_bucket = this.getNodeParameter('s3_bucket', i, undefined);
			const s3_key = this.getNodeParameter('s3_key', i, undefined);
			const convertToImage = resource === 'image' ? true : false;

			const body: IDataObject = {
				templateId,
				convertToImage,
				html,
				pdfParams,
				webhook,
				s3_bucket,
				s3_key,
				data,
			};

			const endpoint = resource === 'html-to-pdf' ? '/html-to-pdf' : '/pdf';

			responseData = await pdforgeApiRequest.call(this, 'POST', endpoint, operation, body);

			returnData.push(responseData as INodeExecutionData);
		}

		return [this.helpers.returnJsonArray(returnData)];
	}
}
