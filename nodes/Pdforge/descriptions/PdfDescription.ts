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
