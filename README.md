# n8n-nodes-pdforge

This is an n8n node. It lets you use [Pdforge](https://pdforge.com) in your n8n workflows.

**Pdforge Automate PDF Generation in minutes using AI**.

Create custom PDF templates in seconds using our AI Agents, fine tune the design with our no-code builder and automate the PDF delivery with our native pdforge node inside n8n. No code or design experience needed.

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

With pdforge you can create pdfs from html or reusable templates (or convert them to images), both synchronously or asynchronously. Here are the operations you can use:

| Name                      | Operation           | Description                                                                                                                  | Documentation Link                                                          |
| ------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Generate Pdf Sync         | `pdf:sync`          | Creates a PDF file with JSON data and your template.                                                                         | [Link](https://docs.pdforge.com/pdfs/synchronous-request)                   |
| Generate Pdf Async        | `pdf:async`         | Creates a PDF file asynchronously with JSON data and your template. The API returns immediately, and will retry for 3 times. | [Link](https://docs.pdforge.com/pdfs/asynchronous-request)                  |
| Generate Image Sync       | `image:sync`        | Creates a PNG file with JSON data and your template.                                                                         | [Link](https://docs.pdforge.com/images/how-render-png-instead-of-pdf)       |
| Generate Image Async      | `image:async`       | Creates a PNG file asynchronously with JSON data and your template. The API returns immediately, and will retry for 3 times. | [Link](https://docs.pdforge.com/images/how-render-png-instead-of-pdf)       |
| Convert HTML to PDF Sync  | `html-to-pdf:sync`  | Creates a PDF file using the HTML data and PDF params sent.                                                                  | [Link](https://docs.pdforge.com/html-to-pdf-conversion/synchronous-request) |
| Convert HTML to PDF Async | `html-to-pdf:async` | Creates a PDF file asynchronously using the HTML data and PDF params sent.                                                   | [Link](https://docs.pdforge.com/html-to-pdf-conversion/synchronous-request) |

## Credentials

You only need a pdforge API Key to integrate to start generating pdfs. You can get it using our [web portal](https://app.pdforge.com/auth/sign-up) and choosing any plan to subscribe to.

- [pdforge Auth Documentation](https://docs.pdforge.com/getting-started/authentication)

## Compatibility

This package was developed & tested with n8n > 1.97.1

## Usage

Please check out the [Pdforge API Reference](https://docs.pdforge.com/) for more information on how to use the integration.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Pdforge API Reference](https://docs.pdforge.com/)
- [Pdforge Knowledge Base](https://docs.pdforge.com/knowledge-base)
