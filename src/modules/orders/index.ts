import {Base} from "../../base";
import {Routes} from "../../routes/routes";
import {OrderDetail} from "../../model/orders/order-detail.model";
import {OrderResponse} from "../../model/orders/order-response.model";

export class Orders extends Base {

  placeOrder(orderDetail: OrderDetail): Promise<OrderResponse> {
    let endpoint = `/${Routes.ORDERS}`;
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(orderDetail),
    });
  }

  modifyOrder(orderId: string, orderDetail: OrderDetail): Promise<OrderResponse> {
    let endpoint = `/${Routes.ORDERS}/${orderId}`;
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(orderDetail),
    });
  }

  cancelOrderByOrderId(orderId: string): Promise<OrderResponse> {
    let endpoint = `/${Routes.ORDERS}/${orderId}`;
    return this.request(endpoint, {
      method: "DELETE"
    });
  }

  placeSliceOrder(orderDetail: OrderDetail): Promise<OrderResponse> {
    let endpoint = `/${Routes.ORDERS_SLICING}`;
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(orderDetail),
    });
  }

  getAllOrders(): Promise<OrderDetail[]> {
    let endpoint = `/${Routes.ORDERS}`;
    return this.request(endpoint);
  }

  getOrderByOrderId(orderId: string): Promise<OrderDetail> {
    let endpoint = `/${Routes.ORDERS}/${orderId}`;
    return this.request(endpoint);
  }

  getOrderByCorrelationId(correlationId: string): Promise<OrderDetail> {
    let endpoint = `/${Routes.ORDERS_BY_CORRELATION}/${correlationId}`;
    return this.request(endpoint);
  }

  getTradeBook(): Promise<OrderDetail[]> {
    let endpoint = `/${Routes.TRADE_BOOK}`;
    return this.request(endpoint);
  }

  getTradesOfAnOrderByOrderId(orderId: string): Promise<OrderDetail> {
    let endpoint = `/${Routes.TRADE_BOOK}/${orderId}`;
    return this.request(endpoint);
  }
}
