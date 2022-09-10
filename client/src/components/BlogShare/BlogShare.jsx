import React from "react";

const BlogShare = () => {
  console.log();

  return (
    <footer className="footer-post">
      <a
        className="footer-post__share"
        href={
          "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href
        }
      >
        <i className="font-icon icon-facebook" />
        <span>Facebook</span>
      </a>
      <a
        className="footer-post__share"
        href={
          "https://twitter.com/intent/tweet?url=" + window.location.href
        }
      >
        <i className="font-icon icon-twitter" />
        <span>Twitter</span>
      </a>
      <a
        className="footer-post__share"
        href={
          "https://www.linkedin.com/sharing/share-offsite/?url=" + window.location.href
        }
      >
        <i className="font-icon icon-linkedin2" />
        <span>Linkedin</span>
      </a>
    </footer>
  );
};

export default BlogShare;
