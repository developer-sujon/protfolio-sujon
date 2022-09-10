//external lib imports
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

//internal lib imports
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import ProfilePage from "./pages/UserPage/ProfilePage/ProfilePage";
import ChangePassword from "./pages/UserPage/ChangePasswordPage/ChangePasswordPage";

import FullScreenLoader from "./components/Common/FullScreenLoader";
import LoginPage from "./pages/AuthPage/LoginPage/LoginPage";
import SendOptPage from "./pages/AccountRecoveryPage/SendOptPage/SendOptPage";
import VerifyOptPage from "./pages/AccountRecoveryPage/VerifyOptPage/VerifyOptPage";
import ResetPasswordPage from "./pages/AccountRecoveryPage/ResetPasswordPage/ResetPasswordPage";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import EducationListPage from "./pages/EducationPage/EducationListPage";
import EducationCreatePage from "./pages/EducationPage/EducationCreatePage";
import EducationUpdatePage from "./pages/EducationPage/EducationUpdatePage";
import ExperienceListPage from "./pages/ExperiencePage/ExperienceListPage";
import ExperienceCreatePage from "./pages/ExperiencePage/ExperienceCreatePage";
import ExperienceUpdatePage from "./pages/ExperiencePage/ExperienceUpdatePage";

import ServiceListPage from "./pages/ServicePage/ServiceListPage";
import ServiceCreatePage from "./pages/ServicePage/ServiceCreatePage";
import ServiceUpdatePage from "./pages/ServicePage/ServiceUpdatePage";

import BlogListPage from "./pages/BlogPage/BlogListPage";
import BlogCreatePage from "./pages/BlogPage/BlogCreatePage";
import BlogUpdatePage from "./pages/BlogPage/BlogUpdatePage";

import TestimonialListPage from "./pages/TestimonialPage/TestimonialListPage";
import TestimonialCreatePage from "./pages/TestimonialPage/TestimonialCreatePage";
import TestimonialUpdatePage from "./pages/TestimonialPage/TestimonialUpdatePage";

import ClientListPage from "./pages/ClientPage/ClientListPage";
import ClientCreatePage from "./pages/ClientPage/ClientCreatePage";
import ClientUpdatePage from "./pages/ClientPage/ClientUpdatePage";

import SkillListPage from "./pages/SkillPage/SkillListPage";
import SkillCreatePage from "./pages/SkillPage/SkillCreatePage";
import SkillUpdatePage from "./pages/SkillPage/SkillUpdatePage";

import PortfolioListPage from "./pages/PortfolioPage/PortfolioListPage";
import PortfolioCreatePage from "./pages/PortfolioPage/PortfolioCreatePage";
import PortfolioUpdatePage from "./pages/PortfolioPage/PortfolioUpdatePage";

import EmailListPage from "./pages/EmailPage/EmailListPage";
import CommentsListPage from "./pages/CommentsPage/CommentsPage";

const App = () => {
  const { accessToken } = useSelector((state) => state.Auth);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={accessToken ? <DashboardPage /> : <LoginPage />}
          />
          <Route
            path="/send-otp"
            element={accessToken ? <DashboardPage /> : <SendOptPage />}
          />
          <Route
            element={accessToken ? <DashboardPage /> : <VerifyOptPage />}
          />
          <Route
            path="/reset-password"
            element={accessToken ? <DashboardPage /> : <ResetPasswordPage />}
          />

          <Route
            path="/"
            element={!accessToken ? <LoginPage /> : <DashboardPage />}
          />
          <Route
            path="/education-list"
            element={!accessToken ? <LoginPage /> : <EducationListPage />}
          />
          <Route
            path="/education-create"
            element={!accessToken ? <LoginPage /> : <EducationCreatePage />}
          />
          <Route
            path="/education-update/:id"
            element={!accessToken ? <LoginPage /> : <EducationUpdatePage />}
          />
          <Route
            path="/experience-list"
            element={!accessToken ? <LoginPage /> : <ExperienceListPage />}
          />
          <Route path="/experience-create" element={<ExperienceCreatePage />} />
          <Route
            path="/experience-update/:id"
            element={!accessToken ? <LoginPage /> : <ExperienceUpdatePage />}
          />

          <Route
            path="/service-list"
            element={!accessToken ? <LoginPage /> : <ServiceListPage />}
          />
          <Route
            path="/service-create"
            element={!accessToken ? <LoginPage /> : <ServiceCreatePage />}
          />
          <Route
            path="/service-update/:id"
            element={!accessToken ? <LoginPage /> : <ServiceUpdatePage />}
          />
          <Route
            path="/blog-list"
            element={!accessToken ? <LoginPage /> : <BlogListPage />}
          />
          <Route
            path="/blog-create"
            element={!accessToken ? <LoginPage /> : <BlogCreatePage />}
          />
          <Route
            path="/blog-update/:id"
            element={!accessToken ? <LoginPage /> : <BlogUpdatePage />}
          />

          <Route
            path="/testimonial-list"
            element={!accessToken ? <LoginPage /> : <TestimonialListPage />}
          />
          <Route
            path="/testimonial-create"
            element={!accessToken ? <LoginPage /> : <TestimonialCreatePage />}
          />
          <Route
            path="/testimonial-update/:id"
            element={!accessToken ? <LoginPage /> : <TestimonialUpdatePage />}
          />

          <Route
            path="/client-list"
            element={!accessToken ? <LoginPage /> : <ClientListPage />}
          />
          <Route
            path="/client-create"
            element={!accessToken ? <LoginPage /> : <ClientCreatePage />}
          />
          <Route
            path="/client-update/:id"
            element={!accessToken ? <LoginPage /> : <ClientUpdatePage />}
          />

          <Route
            path="/skill-list"
            element={!accessToken ? <LoginPage /> : <SkillListPage />}
          />
          <Route
            path="/skill-create"
            element={!accessToken ? <LoginPage /> : <SkillCreatePage />}
          />
          <Route
            path="/skill-update/:id"
            element={!accessToken ? <LoginPage /> : <SkillUpdatePage />}
          />

          <Route
            path="/portfolio-list"
            element={!accessToken ? <LoginPage /> : <PortfolioListPage />}
          />
          <Route
            path="/portfolio-create"
            element={!accessToken ? <LoginPage /> : <PortfolioCreatePage />}
          />
          <Route
            path="/portfolio-update/:id"
            element={!accessToken ? <LoginPage /> : <PortfolioUpdatePage />}
          />

          <Route
            path="/email-list"
            element={!accessToken ? <LoginPage /> : <EmailListPage />}
          />

          <Route
            path="/comment-list"
            element={!accessToken ? <LoginPage /> : <CommentsListPage />}
          />

          <Route
            path="/profile"
            element={!accessToken ? <LoginPage /> : <ProfilePage />}
          />
          <Route
            path="/change-password"
            element={!accessToken ? <LoginPage /> : <ChangePassword />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <FullScreenLoader />
    </>
  );
};

export default App;
