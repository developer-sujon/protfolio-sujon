//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import { SetEdudationList } from "../redux/slices/ExperienceSlice";

class ExperienceRequest {
  static async ExperienceDropDown() {
    const { data } = await RestClient.getRequest(
      `/Experience/ExperienceDropDown`,
    );

    if (data) {
      store.dispatch(SetEdudationList(data));
      return true;
    }
  }
}

export default ExperienceRequest;
