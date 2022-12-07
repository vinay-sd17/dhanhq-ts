# DhanHQ API NodeJs client

## Requirements

- NodeJS v12.20.0+

## Installation

Install via [npm](https://www.npmjs.com/package/kiteconnect)

    npm install dhan-hq-client

Or via Yarn

    yarn add dhan-hq-client

## Getting started with API

```javascript
import DhanHqClient from "dhan-hq-client";

const client: DhanHqClient = new DhanHqClient({
  accessToken: ACCESS_TOKEN,
  env: DhanEnv.PROD
});

const orderDetail = await client.getOrderById(orderId);

```
