//External Import
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PortfolioRequest from "../../APIRequest/PortfolioRequest";

//Internal Import
import Sidebar from "../Sidebar/Sidebar";
import ProtfolioTab from "./Tab";

const Portfolio = () => {
  useEffect(() => {
    PortfolioRequest.PortfolioDropDown();
  }, []);

  const { PortfolioList } = useSelector((state) => state.Portfolio);

  return (
    <div className="wrapper sticky-parent">
      <Sidebar />
      <div className="content">
        <div className="section mt-0">
          <h1 className="title title--h1 title__separate">Portfolio</h1>
        </div>

        <ProtfolioTab characters={PortfolioList} />
      </div>
    </div>
  );
};

export default Portfolio;
