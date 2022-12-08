import {PositionType} from "./position-type.enum";
import {ExchangeSegment} from "../common/exchange-segment.enum";
import {ProductType} from "../common/product-type.enum";
import {DrvOptionType} from "../common/drv-option-type.enum";

export class PositionDetail {
  dhanClientId: string;
  tradingSymbol: string;
  securityId: string;
  positionType: PositionType;
  exchangeSegment: ExchangeSegment;
  productType: ProductType;
  buyAvg: number;
  buyQty: number;
  sellAvg: number;
  sellQty: number;
  netQty: number;
  realizedProfit: number;
  unrealizedProfit: number;
  rbiReferenceRate: number;
  multiplier: number;
  carryForwardBuyQty: number;
  carryForwardSellQty: number;
  carryForwardBuyValue: number;
  carryForwardSellValue: number;
  dayBuyQty: number;
  daySellQty: number;
  dayBuyValue: number;
  daySellValue: number;
  drvExpiryDate: string;
  drvOptionType: DrvOptionType;
  drvStrikePrice: number;
  crossCurrency: boolean;
}
