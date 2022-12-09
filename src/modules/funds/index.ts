import {Base} from "../../base";
import {Routes} from "../../routes/routes";
import {FundLimitDetails} from "../../model/funds/fund-limit-details.model";

export class Funds extends Base {

  getFundLimit(): Promise<FundLimitDetails> {
    let endpoint = `/${Routes.FUND_LIMIT}`;
    return this.request(endpoint);
  }
}
