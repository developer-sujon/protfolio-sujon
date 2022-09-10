//External import
import { configureStore } from "@reduxjs/toolkit";

//Internal Import
import AuthSlice from "../slices/AuthSlice";
import LoaderSlice from "../slices/LoaderSlice";
import ProfileSlice from "../slices/ProfileSlice";
import EducationSlice from "../slices/EducationSlice";
import ExperienceSlice from "../slices/ExperienceSlice";
import ServiceSlice from "../slices/ServiceSlice";
import BlogSlice from "../slices/BlogSlice";
import TestimonialSlice from "../slices/TestimonialSlice";
import ClientSlice from "../slices/ClientSlice";
import SkillSlice from "../slices/SkillSlice";
import PortfolioSlice from "../slices/PortfolioSlice";
import SummerySlice from "../slices/SummerySlice";
import EmailSlice from "../slices/EmailSlice";
import CommentSlice from "../slices/CommentSlice";

const store = configureStore({
  reducer: {
    Auth: AuthSlice,
    Loader: LoaderSlice,
    Profile: ProfileSlice,
    Education: EducationSlice,
    Experience: ExperienceSlice,
    Service: ServiceSlice,
    Blog: BlogSlice,
    Testimonial: TestimonialSlice,
    Client: ClientSlice,
    Skill: SkillSlice,
    Portfolio: PortfolioSlice,
    Summery: SummerySlice,
    Email: EmailSlice,
    Comment: CommentSlice,
  },
});

export default store;
