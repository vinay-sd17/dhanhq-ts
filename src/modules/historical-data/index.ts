import {Base} from "../../base";
import {Routes} from "../../routes/routes";
import {HistoricalDataResponse} from "../../model/historical-data/historical-data-response.model";
import {
  DailyHistoricalDataRequest
} from "../../model/historical-data/daily-historical-data-request.model";
import {
  IntradayHistoricalDataRequest
} from "../../model/historical-data/intraday-historical-data-request.model";

export class HistoricalData extends Base {

  getDailyHistoricalData(dailyHistoricalDataRequest: DailyHistoricalDataRequest): Promise<HistoricalDataResponse> {
    let endpoint = `/${Routes.HISTORICAL}`;
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(dailyHistoricalDataRequest),
    });
  }

  getIntradayHistoricalData(intradayHistoricalDataRequest: IntradayHistoricalDataRequest): Promise<HistoricalDataResponse> {
    let endpoint = `/${Routes.HISTORICAL_INTRADAY}`;
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(intradayHistoricalDataRequest),
    });
  }
}
