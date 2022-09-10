//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import ToastMessage from "../helper/ToastMessage";
import {
  SetClient,
  SetClientList,
  SetTotalPage,
} from "../redux/slices/ClientSlice";

class ClientRequest {
  static async ClientList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Client/ClientList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(SetClientList(data[0]?.Data));
      store.dispatch(SetTotalPage(data[0]?.Total[0]?.count));
      return true;
    }
  }

  static async ClientSingle(id) {
    const { data } = await RestClient.getRequest(`/Client/ClientSingle/${id}`);
    if (data) {
      store.dispatch(SetClient(data?.[0]));
      return true;
    }
  }

  static async ClientCreate(postBody) {
    const { data } = await RestClient.postRequest(
      `/Client/ClientCreate`,
      postBody,
    );

    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async ClientUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Client/ClientUpdate/${id}`,
      postBody,
    );

    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async ClientDelete(id) {
    await RestClient.deleteRequest(`/Client/ClientDelete/${id}`);
    return true;
  }
}

export default ClientRequest;
