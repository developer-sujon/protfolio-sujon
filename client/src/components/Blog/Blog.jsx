//External Import
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import { AiOutlineEye } from "react-icons/ai";

//Internal Import
import HtmlParse from "../../helper/HtmlParse";
import BlogRequest from "../../APIRequest/BlogRequest";
import Sidebar from "../Sidebar/Sidebar";

const Blog = () => {
  useEffect(() => {
    BlogRequest.BlogDropDown();
  }, []);

  const { BlogList } = useSelector((state) => state.Blog);

  return (
    <div className="wrapper sticky-parent">
      <Sidebar />
      <div className="content">
        <div className="section mt-0">
          <h1 className="title title--h1 title__separate">Blog</h1>
        </div>
        <div className="news-grid section">
          {BlogList &&
            BlogList.map((blog) => {
              return (
                <article className="news-item box">
                  <div className="news-item__image-wrap overlay overlay--45">
                    <div className="news-item__date">
                      {dateFormat(blog.createdAt, "dS mmm")}
                    </div>
                    <div className="view-blog">
                      <AiOutlineEye /> {blog.View}
                    </div>
                    <Link
                      className="news-item__link"
                      to={`/blog/${blog._id}`}
                    ></Link>
                    <img
                      className="cover ls-is-cached lazyloaded"
                      src={blog.Image}
                      alt="blogImage"
                    />
                  </div>
                  <div className="news-item__caption">
                    <h3 className="title title--h3">{HtmlParse(blog.Title)}</h3>
                    <p>{HtmlParse(blog.Description.slice(0, 90))}...</p>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
