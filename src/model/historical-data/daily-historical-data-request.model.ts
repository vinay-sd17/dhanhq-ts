import {ExchangeSegment} from "../common/exchange-segment.enum";
import {Instrument} from "../common/instrument.enum";

export class DailyHistoricalDataRequest {
  symbol: string;
  exchangeSegment: ExchangeSegment;
  instrument: Instrument;
  expiryCode: string;
  fromDate: string;
  toDate: string;
}
