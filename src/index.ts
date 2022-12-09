import {Base} from "./base";
import {applyMixins} from "./utils";
import {Orders} from "./modules/orders";
import {Portfolio} from "./modules/portfolio";
import {Edis} from "./modules/edis";
import {Funds} from "./modules/funds";
import {HistoricalData} from "./modules/historical-data";

class DhanHqClient extends Base {}
// Attach All client Lib
interface DhanHqClient extends Orders, Portfolio, Edis, Funds, HistoricalData {}
//Apply Mixins
applyMixins(DhanHqClient, [Orders, Portfolio, Edis, Funds, HistoricalData]);
//Export client
export default DhanHqClient;

//model export
export {ExchangeSegment} from "./model/common/exchange-segment.enum"
export {ProductType} from "./model/common/product-type.enum"
export {DrvOptionType} from "./model/common/drv-option-type.enum"

export {OrderDetail} from "./model/orders/order-detail.model"
export {OrderStatus} from "./model/orders/order-status.enum"
export {TransactionType} from "./model/orders/transaction-type.enum"
export {OrderType} from "./model/orders/order-type.enum"
export {Validity} from "./model/orders/validity.enum"
export {LegName} from "./model/orders/leg-name.enum"
export {AmoTime} from "./model/orders/amo-time.enum"

export {ConvertPositionRequest} from "./model/portfolio/convert-position-request.model"
export {HoldingsDetail} from "./model/portfolio/holdings-detail.model"
export {PositionDetail} from "./model/portfolio/position-detail.model"
export {PositionType} from "./model/portfolio/position-type.enum"

export {DhanEnv} from "./model/dhan-env.enum"
export {DhanHqConfig} from "./model/dhanhq-config.model"

export {Exchange} from "./model/common/exchange.enum"
export {EdisTpinRequest} from "./model/edis/edis-tpin-request.model"
export {EdisStatusInquiryDetails} from "./model/edis/edis-status-inquiry-details.model"
export {EdisTpinResponse} from "./model/edis/edis-tpin-response.model"

export {FundLimitDetails} from "./model/funds/fund-limit-details.model"
export {Instrument} from "./model/common/instrument.enum"
export {HistoricalDataResponse} from "./model/historical-data/historical-data-response.model"
export {DailyHistoricalDataRequest} from "./model/historical-data/daily-historical-data-request.model"
export {IntradayHistoricalDataRequest} from "./model/historical-data/intraday-historical-data-request.model"
