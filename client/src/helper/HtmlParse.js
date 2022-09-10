//Internal Import
import parse from "html-react-parser";

const HtmlParse = (content) => {
  return parse(`${content}`);
};

export default HtmlParse;
