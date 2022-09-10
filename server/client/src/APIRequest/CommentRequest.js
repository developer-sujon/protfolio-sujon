//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import { SetCommentList, SetTotalPage } from "../redux/slices/CommentSlice";

class CommentRequest {
  static async CommentList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Comment/CommentList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(SetCommentList(data[0]?.Data));
      store.dispatch(SetTotalPage(data[0]?.Total[0]?.count));
      return true;
    }
  }

  static async CommentUpdate(id, status) {
    await RestClient.updateRequest(`/Comment/CommentUpdate/${id}`, {
      Status: status,
    });
    return true;
  }

  static async CommentDelete(id) {
    await RestClient.deleteRequest(`/Comment/CommentDelete/${id}`);
    return true;
  }
}

export default CommentRequest;
