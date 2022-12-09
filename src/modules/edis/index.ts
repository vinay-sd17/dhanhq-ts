import {Base} from "../../base";
import {Routes} from "../../routes/routes";
import {EdisTpinRequest} from "../../model/edis/edis-tpin-request.model";
import {EdisTpinResponse} from "../../model/edis/edis-tpin-response.model";
import {EdisStatusInquiryDetails} from "../../model/edis/edis-status-inquiry-details.model";

export class Edis extends Base {

  generateTpin() {
    let endpoint = `/${Routes.EDIS}`;
    return this.request(endpoint);
  }

  postEdisTpinForm(tpinForm: EdisTpinRequest): Promise<EdisTpinResponse> {
    let endpoint = `/${Routes.EDIS_FORM}`;
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(tpinForm),
    });
  }

  getEdisStatusAndInquiry(): Promise<EdisStatusInquiryDetails> {
    let endpoint = `/${Routes.EDIS_INQUIRE_ISIN}`;
    return this.request(endpoint);
  }
}
