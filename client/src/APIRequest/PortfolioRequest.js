//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import { SetPortfolioList } from "../redux/slices/PortfolioSlice";

class PortfolioRequest {
  static async PortfolioDropDown(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Portfolio/PortfolioDropDown`,
    );

    if (data) {
      store.dispatch(SetPortfolioList(data));
      return true;
    }
  }
}

export default PortfolioRequest;
