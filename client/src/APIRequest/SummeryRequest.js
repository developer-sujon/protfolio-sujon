//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import {
  SetBlog,
  SetEducation,
  SetEmail,
  SetExperience,
  SetSkill,
  SetPortfolio,
  SetTestimonial,
  SetClient,
} from "../redux/slices/SummerySlice";

class SummeryRequest {
  static async BlogSummery(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest("/Summery/BlogSummery");

    if (data) {
      store.dispatch(SetBlog(data[0]?.Total));
      return true;
    }
  }
  static async PortfolioSummery(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest("/Summery/PortfolioSummery");

    if (data) {
      store.dispatch(SetPortfolio(data[0]?.Total));
      return true;
    }
  }
  static async TestimonialSummery(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest("/Summery/TestimonialSummery");
    if (data) {
      store.dispatch(SetTestimonial(data[0]?.Total));
      return true;
    }
  }
  static async ClientSummery(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest("/Summery/ClientSummery");

    if (data) {
      store.dispatch(SetClient(data[0]?.Total));
      return true;
    }
  }
  static async EducationSummery(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest("/Summery/EducationSummery");

    if (data) {
      store.dispatch(SetEducation(data[0]?.Total));
      return true;
    }
  }
  static async ExperienceSummery(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest("/Summery/ExperienceSummery");
    if (data) {
      store.dispatch(SetExperience(data[0]?.Total));
      return true;
    }
  }
  static async SkillSummery(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest("/Summery/SkillSummery");

    if (data) {
      store.dispatch(SetSkill(data[0]?.Total));
      return true;
    }
  }
  static async EmailSummery(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest("/Summery/EmailSummery");
    store.dispatch(SetEmail(data[0]?.Total));
    return true;
  }
}

export default SummeryRequest;
