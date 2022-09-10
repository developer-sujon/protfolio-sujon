//External lib imports
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Internal lib imports
import FullScreenLoader from "./components/Common/FullScreenLoader";
import AboutPage from "./pages/AboutPage/AboutPage";
import ResumePage from "./pages/ResumePage/ResumePage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import BlogSinglePage from "./pages/BlogSinglePage/BlogSinglePage";

const App = () => {
  return (
    <>
      <main className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogSinglePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </main>
      <FullScreenLoader />
    </>
  );
};

export default App;
