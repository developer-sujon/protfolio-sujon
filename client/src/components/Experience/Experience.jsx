//Internal Import
import { useEffect } from "react";
import { useSelector } from "react-redux";

//Internal Import
import ExperienceIcon from "../../assets/images/icon/icon-experience.svg";
import ExperienceRequest from "../../APIRequest/ExperienceRequest";
import HtmlParse from "../../helper/HtmlParse";

const Experience = () => {
  useEffect(() => {
    ExperienceRequest.ExperienceDropDown();
  }, []);

  const { ExperienceList } = useSelector((state) => state.Experience);

  return (
    <section className="section">
      <h2 className="title title--h2">
        <img className="title-icon" src={ExperienceIcon} alt="ExperienceIcon" />
        Experience
      </h2>
      <div className="timeline">
        {ExperienceList &&
          ExperienceList.map((experience) => {
            return (
              <article className="timeline__item">
                <h5 className="title title--h3 timeline__title">
                  {HtmlParse(experience?.Name)}
                </h5>
                <span className="timeline__period">{experience?.Date}</span>
                <p className="timeline__description">
                  {HtmlParse(experience?.Description)}
                </p>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Experience;
