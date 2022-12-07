import {Base} from "../../base";
import {Routes} from "../../routes/routes";
import {OrderDetail} from "../../model/orders/order-detail.model";
import {OrderResponse} from "../../model/orders/order-response.model";

export class Orders extends Base {

  createOrder(orderDetail: OrderDetail): Promise<OrderResponse> {
    let endpoint = `/${Routes.ORDERS}`;
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(orderDetail),
    });
  }

  updateOrder(id: string, orderDetail: OrderDetail): Promise<OrderResponse> {
    let endpoint = `/${Routes.ORDERS}/${id}`;
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(orderDetail),
    });
  }

  getAllOrders(): Promise<OrderDetail[]> {
    let endpoint = `/${Routes.ORDERS}`;
    return this.request(endpoint);
  }

  getOrderById(id: string): Promise<OrderDetail> {
    let endpoint = `/${Routes.ORDERS}/${id}`;
    return this.request(endpoint);
  }

  deleteOrderById(id: string): Promise<OrderResponse> {
    let endpoint = `/${Routes.ORDERS}/${id}`;
    return this.request(endpoint, {
      method: "DELETE"
    });
  }

}
