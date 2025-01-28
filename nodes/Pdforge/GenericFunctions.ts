import type {
	IExecuteFunctions,
	ILoadOptionsFunctions,
	IDataObject,
	IHookFunctions,
	IWebhookFunctions,
	JsonObject,
	IHttpRequestMethods,
	IRequestOptions,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

export async function pdforgeApiRequest(
	this: IExecuteFunctions | IWebhookFunctions | IHookFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	operation: string,
	body: any = {},
	query: IDataObject = {},
	uri?: string,
	headers: IDataObject = {},
): Promise<any> {
	const credentials = await this.getCredentials('pdforgeApi');

	const options: IRequestOptions = {
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${credentials.apiKey}`,
		},
		method,
		body,
		qs: query,
		uri: uri || `https://api.pdforge.com/v1/${endpoint}/${operation}`,
		json: true,
	};

	if (!Object.keys(body as IDataObject).length) {
		delete options.form;
	}
	if (!Object.keys(query).length) {
		delete options.qs;
	}
	options.headers = Object.assign({}, options.headers, headers);
	try {
		return await this.helpers.request(options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}
