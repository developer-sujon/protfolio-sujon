//External Import
import React from "react";

//Internal Import
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Sidebar from "../Sidebar/Sidebar";
import Skills from "../Skills/Skills";

const Resume = () => {
  return (
    <div className="wrapper sticky-parent">
      <Sidebar />
      <div className="content">
        <div className="section mt-0">
          <h1 className="title title--h1 title__separate">Resume</h1>
        </div>
        <Education />
        <Experience />
        <Skills />
      </div>
    </div>
  );
};

export default Resume;
