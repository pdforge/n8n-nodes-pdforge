import type { INodeProperties } from 'n8n-workflow';

export const pdfOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['pdf'],
			},
		},
		options: [
			{
				name: 'Generate Syncronously',
				value: 'sync',
				description: 'Generate PDF syncronously',
				action: 'Generate PDF syncronously',
			},
			{
				name: 'Generate Asynchronously',
				value: 'async',
				description: 'Generate PDF asynchronously',
				action: 'Generate PDF asynchronously',
			},
		],
		default: 'sync',
	},
];

export const pdfFields: INodeProperties[] = [
	{
		displayName: 'Template Name or ID',
		name: 'templateId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getTemplates',
		},
		displayOptions: {
			show: {
				resource: ['pdf'],
			},
		},
		required: true,
		default: '',
		description:
			'The template ID you want to use. Choose from the list, or specify an ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.',
	},
	{
		displayName: 'Webhook URL',
		name: 'webhook',
		displayOptions: {
			show: {
				resource: ['pdf'],
				operation: ['async'],
			},
		},
		type: 'string',
		default: '',
		description: 'A URL to POST the PDF to upon rendering completed',
	},
	{
		displayName: 'Variables',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['pdf'],
			},
		},
		default: {},
		placeholder: 'Replace your variables here Variable',
		description:
			'To see the variables in your template, access pdforge interface and click on the template you want to use',
	},
];
