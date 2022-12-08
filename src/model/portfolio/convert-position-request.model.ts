import {ProductType} from "../common/product-type.enum";
import {ExchangeSegment} from "../common/exchange-segment.enum";
import {PositionType} from "./position-type.enum";

export class ConvertPositionRequest {
  dhanClientId: string;
  fromProductType: ProductType;
  exchangeSegment: ExchangeSegment;
  positionType: PositionType;
  securityId: string;
  tradingSymbol: string;
  convertQty: number;
  toProductType: ProductType;
}
