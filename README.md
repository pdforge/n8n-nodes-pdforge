# n8n-nodes-pdforge

This is an n8n community node. It lets you use [Pdforge](https://pdforge.com) in your n8n workflows.

**Pdforge is the future of PDF generation API**.

You can build your PDF reusable templates using our no-code PDF builder and our AI Agents and generate modern PDF reports at scale without relying on your development team with all our integrations with no-code platoforms, like N8N, Zapier, Make, Bubble.io or using our Rest API.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)
[Compatibility](#compatibility)  
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

With pdforge you can create pdfs or images synchronously or asynchronously. Here are the operations you can use:

| Name               | Operation        | Description                                                                                                                  | Documentation Link                                                    |
| ------------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Generate Pdf Sync  | `sync`           | Creates a PDF file with JSON data and your template.                                                                         | [Link](https://docs.pdforge.com/pdfs/synchronous-request)             |
| Generate Pdf Async | `async`          | Creates a PDF file asynchronously with JSON data and your template. The API returns immediately, and will retry for 3 times. | [Link](https://docs.pdforge.com/pdfs/asynchronous-request)            |
| Convert to Image   | `convertToImage` | Generate a PNG image with JSON data and your template.                                                                       | [Link](https://docs.pdforge.com/images/how-render-png-instead-of-pdf) |

## Credentials

You only need a pdforge API Key to integrate to start generating pdfs. You can get it using our [web portal](https://app.pdforge.com/auth/sign-up).

- [pdforge Auth Documentation](https://docs.pdforge.com/getting-started/authentication)

## Compatibility

This package was developed & tested with n8n > 1.75.2

## Usage

Please check out the [Pdforge API Reference](https://docs.pdforge.com/) for more information on how to use the integration.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Pdforge API Reference](https://docs.pdforge.com/reference/api)
