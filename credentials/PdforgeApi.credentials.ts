import { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class PdforgeApi implements ICredentialType {
	name = 'pdforgeApi';
	displayName = 'Pdforge API';
	documentationUrl = 'https://docs.pdforge.com/getting-started/authentication';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: `Bearer {{$credentials.apiKey}}`,
			},
		},
	};
}
