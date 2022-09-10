//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import ToastMessage from "../helper/ToastMessage";
import { SetBlog, SetBlogList, SetTotalPage } from "../redux/slices/BlogSlice";

class BlogRequest {
  static async BlogList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Blog/BlogList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(SetBlogList(data[0]?.Data));
      store.dispatch(SetTotalPage(data[0]?.Total[0]?.count));
      return true;
    }
  }

  static async BlogSingle(id) {
    const { data } = await RestClient.getRequest(`/Blog/BlogSingle/${id}`);
    if (data) {
      store.dispatch(SetBlog(data?.[0]));
      return true;
    }
  }

  static async BlogCreate(postBody) {
    const { data } = await RestClient.postRequest(`/Blog/BlogCreate`, postBody);
    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async BlogUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Blog/BlogUpdate/${id}`,
      postBody,
    );

    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async BlogDelete(id) {
    await RestClient.deleteRequest(`/Blog/BlogDelete/${id}`);
    return true;
  }
}

export default BlogRequest;
