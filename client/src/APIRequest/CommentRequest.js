//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import { SetCommentList } from "../redux/slices/CommentSlice";
import ToastMessage from "../helper/ToastMessage";

class CommentRequest {
  static async CommentDropDown(id) {
    const { data } = await RestClient.getRequest(
      `/Comment/CommentDropDown/${id}`,
    );

    if (data) {
      store.dispatch(SetCommentList(data));
      return true;
    }
  }

  static async CommentCreate(postBody) {
    const { data } = await RestClient.postRequest(
      `/Comment/CommentCreate`,
      postBody,
    );
    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }
}

export default CommentRequest;
