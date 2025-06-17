import type { INodeProperties } from 'n8n-workflow';

export const sharedFields: INodeProperties[] = [
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
];
