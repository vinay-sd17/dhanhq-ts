# DhanHQ API NodeJs client (Typescript)

## Requirements

- NodeJS v12.20.0+
- Typescript v4.9.0+

## Installation

Install via [npm](https://www.npmjs.com/package/kiteconnect)

    npm install dhanhq-ts

Or via Yarn

    yarn add dhanhq-ts

## Getting started with API

```javascript
import DhanHqClient from "dhanhq-ts";

const client: DhanHqClient = new DhanHqClient({
  accessToken: ACCESS_TOKEN,
  env: DhanEnv.PROD
});

const orderDetail = await client.getOrderById(orderId);

```

# Available API Interface in client are:

![Alt text](./docs/api_interface.png?raw=true "Api Interface")
