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
				action: 'Generate image syncronously',
			},
			{
				name: 'Generate Asynchronously',
				value: 'async',
				description: 'Generate Image asynchronously',
				action: 'Generate image asynchronously',
			},
		],
		default: 'sync',
	},
];
