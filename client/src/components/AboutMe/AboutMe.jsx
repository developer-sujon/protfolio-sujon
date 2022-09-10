//External Import
import { useSelector } from "react-redux";

//Internal Import
import HtmlParse from "../../helper/HtmlParse";

const AboutMe = () => {
  const { user } = useSelector((state) => state.Profile);

  return (
    <div className="section mt-0">
      <div className="pt-2 pt-sm-3">
        {user?.AboutMe ? HtmlParse(user?.AboutMe) : "Loading...."}
      </div>
    </div>
  );
};

export default AboutMe;
