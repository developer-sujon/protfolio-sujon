//Internal Import
import { useEffect } from "react";
import { useSelector } from "react-redux";

//External Import
import EducationIcon from "../../assets/images/icon/icon-education.svg";
import EducationRequest from "../../APIRequest/EducationRequest";
import HtmlParse from "../../helper/HtmlParse";

const Education = () => {
  useEffect(() => {
    EducationRequest.EducationDropDown();
  }, []);

  const { EducationList } = useSelector((state) => state.Education);

  return (
    <section className="section">
      <h2 className="title title--h2">
        <img className="title-icon" src={EducationIcon} alt="EducationIcon" />
        Education
      </h2>
      <div className="timeline">
        {EducationList &&
          EducationList.map((education) => {
            return (
              <article className="timeline__item">
                <h5 className="title title--h3 timeline__title">
                  {HtmlParse(education?.Name)}
                </h5>
                <span className="timeline__period">{education?.Date}</span>
                <p className="timeline__description">
                  {HtmlParse(education?.Description)}
                </p>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Education;
