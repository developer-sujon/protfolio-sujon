//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import ToastMessage from "../helper/ToastMessage";
import {
  SetEdudation,
  SetEdudationList,
  SetTotalPage,
} from "../redux/slices/EducationSlice";

class EducationRequest {
  static async EducationList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Education/EducationList/${pageNumber}/${perPage}/${searchKey}`,
    );
    if (data) {
      store.dispatch(SetEdudationList(data[0]?.Data));
      store.dispatch(SetTotalPage(data[0]?.Total[0]?.count));
      return true;
    }
  }

  static async EducationSingle(id) {
    const { data } = await RestClient.getRequest(
      `/Education/EducationSingle/${id}`,
    );
    if (data) {
      store.dispatch(SetEdudation(data?.[0]));
      return true;
    }
  }

  static async EducationCreate(postBody) {
    const { data } = await RestClient.postRequest(
      `/Education/EducationCreate`,
      postBody,
    );
    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async EducationUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Education/EducationUpdate/${id}`,
      postBody,
    );
    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async EducationDelete(id) {
    await RestClient.deleteRequest(`/Education/EducationDelete/${id}`);
    return true;
  }
}

export default EducationRequest;
