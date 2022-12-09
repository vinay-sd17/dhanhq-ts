import {OrderStatus} from "./order-status.enum";
import {TransactionType} from "./transaction-type.enum";
import {Validity} from "./validity.enum";
import {OrderType} from "./order-type.enum";
import {LegName} from "./leg-name.enum";
import {AmoTime} from "./amo-time.enum";
import {ExchangeSegment} from "../common/exchange-segment.enum";
import {ProductType} from "../common/product-type.enum";
import {DrvOptionType} from "../common/drv-option-type.enum";

export class OrderDetail {
  dhanClientId: string;
  orderId: number;
  exchangeOrderId: number;
  correlationId: string;
  orderStatus: OrderStatus;
  transactionType: TransactionType;
  exchangeSegment: ExchangeSegment;
  productType: ProductType;
  orderType: OrderType;
  validity: Validity;
  tradingSymbol: string;
  securityId: string;
  quantity: number;
  disclosedQuantity: number;
  price: number;
  triggerPrice: number;
  afterMarketOrder: boolean;
  boProfitValue: number;
  boStopLossValue: number;
  legName: LegName;
  createTime: string;
  updateTime: string;
  exchangeTime: string;
  drvExpiryDate: string;
  drvOptionType: DrvOptionType;
  drvStrikePrice: number;
  omsErrorCode: string;
  omsErrorDescription: string;
  filled_qty: number;
  algoId: number;
  amoTime: AmoTime;
  exchangeTradeId: string;
  tradedQuantity: number;
  tradedPrice: number;
}
