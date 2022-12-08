import {Base} from "./base";
import {applyMixins} from "./utils";
import {Orders} from "./modules/orders";
import {Portfolio} from "./modules/portfolio";

class DhanHqClient extends Base {}
// Attach All client Lib
interface DhanHqClient extends Orders, Portfolio {}
//Apply Mixins
applyMixins(DhanHqClient, [Orders, Portfolio]);
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
