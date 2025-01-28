import type { INodeProperties } from 'n8n-workflow';

export const imageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['image'],
			},
		},
		options: [
			{
				name: 'Generate Syncronously',
				value: 'sync',
				description: 'Generate Image syncronously',
				action: 'Generate Image syncronously',
			},
			{
				name: 'Generate Asynchronously',
				value: 'async',
				description: 'Generate Image asynchronously',
				action: 'Generate Image asynchronously',
			},
		],
		default: 'sync',
	},
];

export const imageFields: INodeProperties[] = [
	{
		displayName: 'Template Name or ID',
		name: 'templateId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getTemplates',
		},
		displayOptions: {
			show: {
				resource: ['image'],
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
				resource: ['image'],
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
				resource: ['image'],
			},
		},
		default: {},
		placeholder: 'Replace your variables here Variable',
		description:
			'To see the variables in your template, access pdforge interface and click on the template you want to use',
	},
];
