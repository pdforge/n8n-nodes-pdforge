import type { INodeProperties } from 'n8n-workflow';

export const htmlToPdfOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['html-to-pdf'],
			},
		},
		options: [
			{
				name: 'Convert HTML to PDF Syncronously',
				value: 'sync',
				description: 'Convert your HTML data into a PDF file syncronously',
				action: 'Convert syncronously',
			},
			{
				name: 'Convert HTML to PDF Asynchronously',
				value: 'async',
				description: 'Convert your HTML data into a PDF file asynchronously',
				action: 'Convert asynchronously',
			},
		],
		default: 'sync',
	},
];

export const htmlToPdfFields: INodeProperties[] = [
	{
		displayName: 'HTML String',
		name: 'html',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['html-to-pdf'],
			},
		},
		required: true,
		default: '',
		description:
			'The HTML string you want to convert to a PDF file. Send the whole &lt;html&gt; tag.',
	},
	{
		displayName: 'Print Parameters',
		name: 'pdfParams',
		displayOptions: {
			show: {
				resource: ['html-to-pdf'],
			},
		},
		type: 'json',
		default: '{}',
		description:
			'The parameters for printing the PDF file. You can find the available parameters on <a href="https://docs.pdforge.com/options/pdf-params"> this documentation</a>.',
		placeholder: '{ "format": "A4", "width": "210mm", "height": "297mm" }',
	},
];
