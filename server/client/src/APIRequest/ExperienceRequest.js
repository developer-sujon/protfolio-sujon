//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import ToastMessage from "../helper/ToastMessage";
import {
  SetEdudation,
  SetEdudationList,
  SetTotalPage,
} from "../redux/slices/ExperienceSlice";

class ExperienceRequest {
  static async ExperienceList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Experience/ExperienceList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(SetEdudationList(data[0]?.Data));
      store.dispatch(SetTotalPage(data[0]?.Total[0]?.count));
      return true;
    }
  }

  static async ExperienceSingle(id) {
    const { data } = await RestClient.getRequest(
      `/Experience/ExperienceSingle/${id}`,
    );
    if (data) {
      store.dispatch(SetEdudation(data?.[0]));
      return true;
    }
  }

  static async ExperienceCreate(postBody) {
    const { data } = await RestClient.postRequest(
      `/Experience/ExperienceCreate`,
      postBody,
    );

    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async ExperienceUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Experience/ExperienceUpdate/${id}`,
      postBody,
    );

    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async ExperienceDelete(id) {
    await RestClient.deleteRequest(`/Experience/ExperienceDelete/${id}`);
    return true;
  }
}

export default ExperienceRequest;
