//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import ToastMessage from "../helper/ToastMessage";
import {
  SetTestimonial,
  SetTestimonialList,
  SetTotalPage,
} from "../redux/slices/TestimonialSlice";

class TestimonialRequest {
  static async TestimonialList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Testimonial/TestimonialList/${pageNumber}/${perPage}/${searchKey}`,
    );
    if (data) {
      store.dispatch(SetTestimonialList(data[0]?.Data));
      store.dispatch(SetTotalPage(data[0]?.Total[0]?.count));
      return true;
    }
  }

  static async TestimonialSingle(id) {
    const { data } = await RestClient.getRequest(
      `/Testimonial/TestimonialSingle/${id}`,
    );
    if (data) {
      store.dispatch(SetTestimonial(data?.[0]));
      return true;
    }
  }

  static async TestimonialCreate(postBody) {
    const { data } = await RestClient.postRequest(
      `/Testimonial/TestimonialCreate`,
      postBody,
    );
    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async TestimonialUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Testimonial/TestimonialUpdate/${id}`,
      postBody,
    );
    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async TestimonialDelete(id) {
    await RestClient.deleteRequest(`/Testimonial/TestimonialDelete/${id}`);
  }
}

export default TestimonialRequest;
