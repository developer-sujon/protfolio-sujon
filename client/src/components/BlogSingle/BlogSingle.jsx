//External Import
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//Internal Import
import BlogRequest from "../../APIRequest/BlogRequest";
import BlogComments from "../BlogComments/BlogComments";
import BlogShare from "../BlogShare/BlogShare";
import Sidebar from "../Sidebar/Sidebar";
import HtmlParse from "../../helper/HtmlParse";
import CommentForm from "../BlogComments/CommentForm";

const BlogSingle = () => {
  const { id } = useParams();

  useEffect(() => {
    BlogRequest.BlogSingle(id);
  }, []);

  const { Blog } = useSelector((state) => state.Blog);

  return (
    <div className="wrapper sticky-parent">
      <Sidebar />
      <div className="content">
        <div className="pb-3">
          <header className="header-post">
            <h1 className="title title--h1">
              {Blog?.Title ? HtmlParse(Blog?.Title) : "Loading...."}
            </h1>

            <div className="header-post__image-wrap">
              <img
                className="cover ls-is-cached lazyloaded"
                src={Blog?.Image}
                alt=""
              />
            </div>
          </header>
          <div className="caption-post">
            {Blog?.Description ? HtmlParse(Blog?.Description) : "Loading...."}
          </div>

          <BlogShare />
        </div>
        <CommentForm id={id} />
        <br />
        <BlogComments id={id} />
      </div>
    </div>
  );
};

export default BlogSingle;
