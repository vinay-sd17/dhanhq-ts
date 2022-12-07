import {OrderStatus} from "./order-status.enum";

export class OrderResponse {
  orderId: string;
  orderStatus: OrderStatus;
  errorCode: string;
  httpStatus: string;
  internalErrorCode: string;
  internalErrorMessage: string;
}
