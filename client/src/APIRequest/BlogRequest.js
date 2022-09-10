//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import { SetBlogList, SetBlog } from "../redux/slices/BlogSlice";

class BlogRequest {
  static async BlogDropDown(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(`/Blog/BlogDropDown`);

    if (data) {
      store.dispatch(SetBlogList(data));
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
}

export default BlogRequest;
