import type { INodeProperties } from 'n8n-workflow';

export const sharedFields: INodeProperties[] = [
	{
		displayName: 'Template ID',
		name: 'templateId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getTemplates',
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
				operation: ['async'],
			},
		},
		type: 'string',
		default: '',
		description: 'A URL to POST the rendered file upon completion',
	},
	{
		displayName: 'Variables',
		name: 'data',
		type: 'json',
		default: '{}',
		description:
			'To see the variables in your template, access pdforge interface and click on the template you want to use.',
	},
];
