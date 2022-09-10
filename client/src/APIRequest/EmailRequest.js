//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import { SetEmailList, SetTotalPage } from "../redux/slices/EmailSlice";
import ToastMessage from "../helper/ToastMessage";

class EmailRequest {
  static async EmailList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Email/EmailList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(SetEmailList(data[0]?.Data));
      store.dispatch(SetTotalPage(data[0]?.Total[0]?.count));
      return true;
    }
  }

  static async EmailCreate(postBody) {
    const { data } = await RestClient.postRequest(
      `/Email/EmailCreate`,
      postBody,
    );

    if (data) {
      ToastMessage.successMessage(data?.message);
      return true;
    }
  }

  static async EmailDelete(id) {
    await RestClient.deleteRequest(`/Email/EmailDelete/${id}`);
    return true;
  }
}

export default EmailRequest;
