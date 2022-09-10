//External Lib  imports
import React from "react";
import { Accordion } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { BsCircle, BsEmojiExpressionless } from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import {
  MdOutlineCastForEducation,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GiSkills } from "react-icons/gi";
import { BiEnvelope } from "react-icons/bi";
import { VscPreview } from "react-icons/vsc";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineComment,
} from "react-icons/ai";
import { GrServices, GrArticle } from "react-icons/gr";

//Internal Lib  imports
import sidebarLogo from "../../assets/images/logo.svg";

function SideBar({ openMenu }) {
  const sidebarItems = [
    {
      title: "Dashboard",
      icon: <RiDashboardLine className="side-bar-item-icon" />,
      url: "/",
      subMenu: [],
    },
    {
      title: "Email",
      icon: <BiEnvelope className="side-bar-item-icon" />,
      url: "/email-list",
      subMenu: [
        {
          title: "Email List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/email-list",
        },
      ],
    },
    {
      title: "Comment",
      icon: <AiOutlineComment className="side-bar-item-icon" />,
      url: "/comment-list",
      subMenu: [
        {
          title: "Comment List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/comment-list",
        },
      ],
    },
    {
      title: "Portfoilo",
      icon: <AiOutlineFundProjectionScreen className="side-bar-item-icon" />,
      url: "/Portfoilo",
      subMenu: [
        {
          title: "Create Portfoilo",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/portfolio-create",
        },
        {
          title: "Portfoilo List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/portfolio-list",
        },
      ],
    },
    {
      title: "Skill",
      icon: <GiSkills className="side-bar-item-icon" />,
      url: "/Skill",
      subMenu: [
        {
          title: "Create Skill",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/skill-create",
        },
        {
          title: "Skill List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/skill-list",
        },
      ],
    },
    {
      title: "Client",
      icon: <MdOutlineManageAccounts className="side-bar-item-icon" />,
      url: "/Client",
      subMenu: [
        {
          title: "Create Client",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/client-create",
        },
        {
          title: "Client List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/client-list",
        },
      ],
    },
    {
      title: "Testimonial",
      icon: <VscPreview className="side-bar-item-icon" />,
      url: "/Testimonial",
      subMenu: [
        {
          title: "Create Testimonial",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/testimonial-create",
        },
        {
          title: "Testimonial List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/testimonial-list",
        },
      ],
    },
    {
      title: "Blog",
      icon: <GrArticle className="side-bar-item-icon" />,
      url: "/Blog",
      subMenu: [
        {
          title: "Create Blog",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/blog-create",
        },
        {
          title: "Blog List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/blog-list",
        },
      ],
    },
    {
      title: "Service",
      icon: <GrServices className="side-bar-item-icon" />,
      url: "/Service",
      subMenu: [
        {
          title: "Create Service",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/service-create",
        },
        {
          title: "Service List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/service-list",
        },
      ],
    },
    {
      title: "Education",
      icon: <MdOutlineCastForEducation className="side-bar-item-icon" />,
      url: "/Education",
      subMenu: [
        {
          title: "Create Education",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/education-create",
        },
        {
          title: "Education List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/education-list",
        },
      ],
    },
    {
      title: "Experience",
      icon: <BsEmojiExpressionless className="side-bar-item-icon" />,
      url: "/Experience",
      subMenu: [
        {
          title: "Create Experience",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/experience-create",
        },
        {
          title: "Experience List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/experience-list",
        },
      ],
    },
    {
      title: "Profile",
      icon: <CgProfile className="side-bar-item-icon" />,
      url: "/Profile",
      subMenu: [
        {
          title: "Profile",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/profile",
        },
        {
          title: "Change Password",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/change-password",
        },
      ],
    },
  ];

  const isSidebarAccordionActive = () => {
    let urlList = [];
    sidebarItems.map((item) => {
      urlList.push(
        item.subMenu.map((subItem) => {
          return subItem?.url;
        }),
      );
    });

    return urlList.findIndex((items) =>
      items.includes(window.location.pathname),
    );
  };

  return (
    <div className={openMenu ? "side-nav-open" : "side-nav-close"}>
      <div className="side-nav-top text-center">
        <Link to="/" className="text-center">
          <img alt="" className="side-nav-logo" src={sidebarLogo} />
        </Link>
      </div>
      <Accordion defaultActiveKey={`${isSidebarAccordionActive()}`}>
        {sidebarItems.map((item, index) => {
          return item.subMenu.length !== 0 ? (
            <Accordion.Item key={index} eventKey={`${index}`} className="mt-2">
              <Accordion.Header>
                <div className="side-bar-item">
                  {item.icon}
                  <span className="side-bar-item-caption">{item.title}</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {item.subMenu.map((subItem, index) => (
                  <NavLink
                    key={index}
                    className={(navData) =>
                      navData.isActive
                        ? "side-bar-subitem-active side-bar-subitem "
                        : "side-bar-subitem"
                    }
                    to={subItem?.url}
                  >
                    {subItem?.icon}
                    <span className="side-bar-subitem-caption">
                      {subItem?.title}
                    </span>
                  </NavLink>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ) : (
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "side-bar-item-active side-bar-item mt-2"
                  : "side-bar-item mt-2"
              }
              to={"/"}
              end
            >
              {item.icon}
              <span className="side-bar-item-caption">{item.title}</span>
            </NavLink>
          );
        })}
      </Accordion>
    </div>
  );
}

export default SideBar;
