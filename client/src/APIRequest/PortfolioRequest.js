//Internal Import
import store from "../redux/store/store";
import { RemoveLoading, SetLoading } from "../redux/slices/LoaderSlice";
import RestClient from "./RestClient";
import ToastMessage from "../helper/ToastMessage";
import {
  SetPortfolio,
  SetPortfolioList,
  SetTotalPage,
} from "../redux/slices/PortfolioSlice";

class PortfolioRequest {
  static async PortfolioList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Portfolio/PortfolioList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(SetPortfolioList(data[0]?.Data));
      store.dispatch(SetTotalPage(data[0]?.Total[0]?.count));
      return true;
    }
  }

  static async PortfolioSingle(id) {
    const { data } = await RestClient.getRequest(
      `/Portfolio/PortfolioSingle/${id}`,
    );
    if (data) {
      store.dispatch(SetPortfolio(data?.[0]));
      return true;
    }
  }

  static async PortfolioCreate(postBody) {
    const { data } = await RestClient.postRequest(
      `/Portfolio/PortfolioCreate`,
      postBody,
    );
    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async PortfolioUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Portfolio/PortfolioUpdate/${id}`,
      postBody,
    );
    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async PortfolioDelete(id) {
    await RestClient.deleteRequest(`/Portfolio/PortfolioDelete/${id}`);
    return true;
  }
}

export default PortfolioRequest;
