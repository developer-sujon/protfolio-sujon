//External Import
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

//Internal Import
import CommentRequest from "../../APIRequest/CommentRequest";

const BlogComments = ({ id }) => {
  useEffect(() => {
    CommentRequest.CommentDropDown(id);
  }, [id]);

  const { CommentList } = useSelector((state) => state.Comment);

  return (
    <>
      <h2 className="title title--h2">
        Comments <span className="color--light">{CommentList?.length}</span>
      </h2>
      {CommentList &&
        CommentList.map((commnet) => {
          return (
            <div className="comment-box">
              <div className="comment-box">
                <div className="comment-box__inner">
                  <div className="comment-box__body">
                    <h4 className="comment-box__details">
                      <span>{commnet.UserName}</span>
                      <span className="comment-box__details-date">
                        {moment(commnet.createdAt, "YYYYMMDD").fromNow()}
                      </span>
                    </h4>
                    <p>{commnet.Description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default BlogComments;
