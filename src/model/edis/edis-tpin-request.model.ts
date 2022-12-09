import {Exchange} from "../common/exchange.enum";

export class EdisTpinRequest {
  isin: string;
  qty: number;
  exchange: Exchange
  segment: string;
  bulk: boolean
}
