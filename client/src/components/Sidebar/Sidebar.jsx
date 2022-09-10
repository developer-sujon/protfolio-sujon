//External Import
import { useEffect } from "react";
import { useSelector } from "react-redux";

//Internal Import
import ProfileRequest from "../../APIRequest/ProfileRequest";
import HtmlParse from "../../helper/HtmlParse";

const Sidebar = () => {
  useEffect(() => {
    ProfileRequest.UserDetails();
  }, []);

  const { user } = useSelector((state) => state.Profile);

  return (
    <aside className="sidebar">
      <div
        className="sticky-column is_stuck"
        style={{ position: "fixed", top: "-24.531px", width: "200px" }}
      >
        <div className="avatar-wrap">
          <svg className="avatar avatar--180" viewBox="0 0 188 188">
            <g className="avatar__box">
              <image xlinkHref={user?.Image} height="100%" width="100%" />
            </g>
          </svg>
        </div>
        <div className="text-center">
          <h3 className="title sidebar__user-name">
            <span className="weight--500"> {HtmlParse(user?.Name)} </span>
          </h3>
          <div className="badge badge--gray">{HtmlParse(user?.Post)}</div>

          <div className="social">
            <a className="social__link" href={user?.Github} target="_blank">
              <i className="font-icon icon-github" />
            </a>
            <a className="social__link" href={user?.Linkedin} target="_blank">
              <i className="font-icon icon-linkedin2" />
            </a>
            <a className="social__link" href={user?.Twitter} target="_blank">
              <i className="font-icon icon-twitter" />
            </a>
            <a className="social__link" href={user?.Facebook} target="_blank">
              <i className="font-icon icon-facebook" />
            </a>
          </div>
        </div>
        <ul className="contact-block">
          <li
            className="contact-block__item"
            data-toggle="tooltip"
            data-placement="top"
            title
            data-original-title="Birthday"
          >
            <i className="font-icon icon-calendar2" />
            {user?.Birthday}
          </li>
          <li
            className="contact-block__item"
            data-toggle="tooltip"
            data-placement="top"
            title
            data-original-title="Address"
          >
            <i className="font-icon icon-map-pin" />
            {HtmlParse(user?.Address)}
          </li>
          <li
            className="contact-block__item"
            data-toggle="tooltip"
            data-placement="top"
            title
            data-original-title="E-mail"
          >
            <a href="mailto:devoloper.sujon@gmail">
              <i className="font-icon icon-mail" />
              {user?.Email}
            </a>
          </li>
          <li
            className="contact-block__item"
            data-toggle="tooltip"
            data-placement="top"
            title
            data-original-title="Phone"
          >
            <i className="font-icon icon-smartphone" />
            <a href={`tel:${user?.Phone}`}>{user?.Phone}</a>
          </li>
        </ul>
        <a className="btn" href={user?.Cv} target="_blank">
          <i className="font-icon icon-download" /> Download CV
          <span style={{ top: "-5.625px", left: "109.5px" }} />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
