//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import { SetTestimonialList } from "../redux/slices/TestimonialSlice";

class TestimonialRequest {
  static async TestimonialDropDown(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Testimonial/TestimonialDropDown`,
    );
    if (data) {
      store.dispatch(SetTestimonialList(data));
      return true;
    }
  }
}

export default TestimonialRequest;
