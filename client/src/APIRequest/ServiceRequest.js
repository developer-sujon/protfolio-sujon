//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import ToastMessage from "../helper/ToastMessage";
import {
  SetService,
  SetServiceList,
  SetTotalPage,
} from "../redux/slices/ServiceSlice";

class ServiceRequest {
  static async ServiceList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Service/ServiceList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(SetServiceList(data[0]?.Data));
      store.dispatch(SetTotalPage(data[0]?.Total[0]?.count));
      return true;
    }
  }

  static async ServiceSingle(id) {
    const { data } = await RestClient.getRequest(
      `/Service/ServiceSingle/${id}`,
    );
    if (data) {
      store.dispatch(SetService(data?.[0]));
      return true;
    }
  }

  static async ServiceCreate(postBody) {
    const { data } = await RestClient.postRequest(
      `/Service/ServiceCreate`,
      postBody,
    );

    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async ServiceUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Service/ServiceUpdate/${id}`,
      postBody,
    );

    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async ServiceDelete(id) {
    await RestClient.deleteRequest(`/Service/ServiceDelete/${id}`);
    return true;
  }
}

export default ServiceRequest;
