//Internal Import
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SkillRequest from "../../APIRequest/SkillRequest";

//Internal Import
import SkillsIcon from "../../assets/images/icon/icon-dev.svg";

const Skills = () => {
  useEffect(() => {
    SkillRequest.SkillDropDown();
  }, []);

  const { SkillList } = useSelector((state) => state.Skill);

  return (
    <section className="section">
      <h2 className="title title--h2">
        <img className="title-icon" src={SkillsIcon} alt="SkillsIcon" />
        Skills
      </h2>

      {SkillList &&
        SkillList.map((skill) => {
          return (
            <div className="box-gray" style={{padding: '1rem 1.875rem'}}>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: skill?.Percentage + "%", zIndex: 2 }}
                >
                  <div className="progress-text">
                    <span>{skill?.Name}</span>
                    <span>{skill?.Percentage}%</span>
                  </div>
                </div>
                <div className="progress-text">
                  <span>{skill?.Name}</span>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Skills;
