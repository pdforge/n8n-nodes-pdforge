import type { INodeProperties } from 'n8n-workflow';

export const templateFields: INodeProperties[] = [
	{
		displayName: 'Template Name or ID',
		name: 'templateId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getTemplates',
		},
		displayOptions: {
			show: {
				resource: ['pdf', 'image'],
			},
		},
		required: true,
		default: '',
		// eslint-disable-next-line n8n-nodes-base/node-param-description-excess-final-period
		description:
			'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.',
	},
	{
		displayName: 'Variables',
		name: 'variables',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['pdf', 'image'],
			},
		},
		default: '{}',
		description:
			'To see the variables in your template, access pdforge interface and click on the template you want to use',
		placeholder: '{ "variable_name": "variable_value" }',
	},
];
