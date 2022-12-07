import * as fetchImport from 'isomorphic-unfetch'
import {DhanHqConfig} from "./model/dhanhq-config.model";
import {DhanEnv} from "./model/dhan-env.enum";

const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default

export abstract class Base {
  private readonly accessToken: string;
  private readonly baseUrl: string;

  constructor(config: DhanHqConfig) {
    this.accessToken = config.accessToken || "";
    // todo add sandbox
    this.baseUrl = config.env === DhanEnv.PROD ? "https://api.dhan.co" : "https://api.dhan.co";
  }

  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      "access-token": this.accessToken,
    };
    const config = {
      ...options,
      headers,
    };

    return fetch(url, config).then((response) => {
      return response.json();
      // if (response.ok) {
      //   return response.json();
      // }
      // throw new Error(response.statusText);
    });
  }
}
