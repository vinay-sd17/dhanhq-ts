import {Base} from "./base";
import {applyMixins} from "./utils";
import {Orders} from "./modules/orders";

class DhanHqClient extends Base {}
// Attach All client Lib
interface DhanHqClient extends Orders {}
//Apply Mixins
applyMixins(DhanHqClient, [Orders]);
//Export client
export default DhanHqClient;

//model export
export {OrderDetail} from "./model/orders/order-detail.model"
export {OrderStatus} from "./model/orders/order-status.enum"
export {TransactionType} from "./model/orders/transaction-type.enum"
export {ExchangeSegment} from "./model/orders/exchange-segment.enum"
export {ProductType} from "./model/orders/product-type.enum"
export {OrderType} from "./model/orders/order-type.enum"
export {Validity} from "./model/orders/validity.enum"
export {LegName} from "./model/orders/leg-name.enum"
export {DrvOptionType} from "./model/orders/drv-option-type.enum"
export {AmoTime} from "./model/orders/amo-time.enum"

export {DhanEnv} from "./model/dhan-env.enum"
export {DhanHqConfig} from "./model/dhanhq-config.model"
