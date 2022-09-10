//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import { SetSkillList } from "../redux/slices/SkillSlice";

class SkillRequest {
  static async SkillDropDown(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(`/Skill/SkillDropDown`);

    if (data) {
      store.dispatch(SetSkillList(data));
      return true;
    }
  }
}

export default SkillRequest;
