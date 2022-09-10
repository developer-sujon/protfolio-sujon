//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import { SetServiceList } from "../redux/slices/ServiceSlice";

class ServiceRequest {
  static async ServiceDropDown(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(`/Service/ServiceDropDown`);

    if (data) {
      store.dispatch(SetServiceList(data));
      return true;
    }
  }
}

export default ServiceRequest;
