//External Import
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ title }) => {
  const handlemenu = (event) => {
    const openMenu = document.querySelector(".hamburger");
    const body = document.querySelector("body");

    if (openMenu.classList.contains("is-active")) {
      openMenu.classList.remove("is-active");
      body.classList.remove("open-menu");
    } else {
      openMenu.classList.add("is-active");
      body.classList.add("open-menu");
    }
  };

  return (
    <>
      <title>Sujon - {title}</title>
      <div className="circle-menu">
        <div className="hamburger" onClick={handlemenu}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="hamburger__text">MENU</div>
        </div>
      </div>
      <div className="nav-wrap">
        <ul className="nav">
          <li className="nav__item">
            <NavLink
              className={(navData) =>
                navData.isActive ? "active" : "inactive"
              }
              to="/"
            >
              About
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={(navData) =>
                navData.isActive ? "active" : "inactive"
              }
              to="/resume"
            >
              Resume
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={(navData) =>
                navData.isActive ? "active" : "inactive"
              }
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={(navData) =>
                navData.isActive ? "active" : "inactive"
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={(navData) =>
                navData.isActive ? "active" : "inactive"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
