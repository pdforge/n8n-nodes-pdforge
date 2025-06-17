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
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		default: {},
		placeholder: 'Add Option',
		options: [
			{
				displayName: 'S3 Bucket',
				name: 's3_bucket',
				type: 'string',
				default: '',
				description:
					'Set this to the ID of an active S3 connection created on pdforge to override the default storage location',
			},
			{
				displayName: 'S3 Key',
				name: 's3_key',
				type: 'string',
				default: '',
				description:
					'Define the path (folders and filename, without extension) where your file will be saved inside your S3 bucket',
			},
		],
	},
];
