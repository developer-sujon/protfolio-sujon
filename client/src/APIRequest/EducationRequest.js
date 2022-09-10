//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import { SetEdudationList } from "../redux/slices/EducationSlice";

class EducationRequest {
  static async EducationDropDown(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Education/EducationDropDown`,
    );
    if (data) {
      store.dispatch(SetEdudationList(data));
      return true;
    }
  }
}

export default EducationRequest;
