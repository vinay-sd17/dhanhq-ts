import {ExchangeSegment} from "../common/exchange-segment.enum";

export class IntradayHistoricalDataRequest {
  securityId: string;
  exchangeSegment: ExchangeSegment;
  instrument: string;
}
