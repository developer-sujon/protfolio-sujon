//External Import
import { useEffect } from "react";
import { useSelector } from "react-redux";

//Internal Import
import ServiceRequest from "../../APIRequest/ServiceRequest";
import HtmlParse from "../../helper/HtmlParse";

const WhatDoing = () => {
  useEffect(() => {
    ServiceRequest.ServiceDropDown();
  }, []);

  const { ServiceList } = useSelector((state) => state.Service);

  return (
    <div className="section">
      <h2 className="title title--h2">What I'm Doing</h2>
      <div className="row">
        {ServiceList &&
          ServiceList.map((service) => {
            return (
              <div className="col-12 col-lg-6 case-item-wrap">
                <div className="case-item" style={{ height: "191.891px" }}>
                  <img
                    className="case-item__icon"
                    src={service?.Image}
                    alt={service?.Name}
                  />
                  <h3 className="title title--h3">
                    {HtmlParse(service?.Name)}
                  </h3>
                  <p className="case-item__caption">
                    {HtmlParse(service?.Description)}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WhatDoing;
