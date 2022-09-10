//External Import
import React from "react";

//Internal Import
import AboutMe from "../AboutMe/AboutMe";
import Clients from "../Clients/Clients";
import Sidebar from "../Sidebar/Sidebar";
import Testimonials from "../Testimonials/Testimonials";
import WhatDoing from "../WhatDoing/WhatDoing";

const About = () => {
  return (
    <div className="wrapper sticky-parent">
      <Sidebar />
      <div className="content">
        <h1 className="title title--h1 title__separate">About Me</h1>
        <AboutMe />
        <WhatDoing />
        <Testimonials />
        <Clients />
      </div>
    </div>
  );
};

export default About;
