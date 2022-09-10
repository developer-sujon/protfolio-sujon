//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import { SetClientList } from "../redux/slices/ClientSlice";

class ClientRequest {
  static async ClientDropDown(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(`/Client/ClientDropDown`);

    if (data) {
      store.dispatch(SetClientList(data));
      return true;
    }
  }
}

export default ClientRequest;
