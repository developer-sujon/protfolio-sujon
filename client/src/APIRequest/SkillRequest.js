//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import ToastMessage from "../helper/ToastMessage";
import {
  SetEdudation,
  SetEdudationList,
  SetTotalPage,
} from "../redux/slices/SkillSlice";

class SkillRequest {
  static async SkillList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Skill/SkillList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(SetEdudationList(data[0]?.Data));
      store.dispatch(SetTotalPage(data[0]?.Total[0]?.count));
      return true;
    }
  }

  static async SkillSingle(id) {
    const { data } = await RestClient.getRequest(`/Skill/SkillSingle/${id}`);

    if (data) {
      store.dispatch(SetEdudation(data?.[0]));
      return true;
    }
  }

  static async SkillCreate(postBody) {
    const { data } = await RestClient.postRequest(
      `/Skill/SkillCreate`,
      postBody,
    );
    if (data) ToastMessage.successMessage(data.message);
    return true;
  }

  static async SkillUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Skill/SkillUpdate/${id}`,
      postBody,
    );
    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async SkillDelete(id) {
    await RestClient.deleteRequest(`/Skill/SkillDelete/${id}`);
    return true;
  }
}

export default SkillRequest;
