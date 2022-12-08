import {Base} from "../../base";
import {Routes} from "../../routes/routes";
import {HoldingsDetail} from "../../model/portfolio/holdings-detail.model";
import {PositionDetail} from "../../model/portfolio/position-detail.model";
import {OrderResponse} from "../../model/orders/order-response.model";
import {ConvertPositionRequest} from "../../model/portfolio/convert-position-request.model";

export class Portfolio extends Base {

  getHoldings(): Promise<HoldingsDetail[]> {
    let endpoint = `/${Routes.HOLDINGS}`;
    return this.request(endpoint);
  }

  getPositions(): Promise<PositionDetail[]> {
    let endpoint = `/${Routes.POSITIONS}`;
    return this.request(endpoint);
  }

  convertPosition(convertPositionRequest: ConvertPositionRequest): Promise<OrderResponse> {
    let endpoint = `/${Routes.POSITIONS_CONVERT}`;
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(convertPositionRequest),
    });
  }

}
