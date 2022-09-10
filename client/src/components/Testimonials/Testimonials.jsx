//External Import
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Internal Import
import TestimonialRequest from "../../APIRequest/TestimonialRequest";
import HtmlParse from "../../helper/HtmlParse";

const SliderItem = ({ imgUrl, title, description }) => {
  return (
    <div className="swiper-slide review-item swiper-slide-active">
      <svg className="avatar avatar--80" viewBox="0 0 84 84">
        <g className="avatar__hexagon">
          <image xlinkHref={imgUrl} height="100%" width="100%" />
        </g>
      </svg>
      <h4 className="title title--h3"> {HtmlParse(title)}</h4>
      <p className="review-item__caption">{HtmlParse(description)}</p>
    </div>
  );
};

const Testimonials = () => {
  useEffect(() => {
    TestimonialRequest.TestimonialDropDown();
  }, []);

  const { TestimonialList } = useSelector((state) => state.Testimonial);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: true,
    autoplay: true,
  };

  return (
    <div className="section">
      <h2 className="title title--h2">Testimonials</h2>
      <Slider {...settings}>
        {TestimonialList &&
          TestimonialList.map((testimonial) => {
            return (
              <SliderItem
                key={testimonial?._id}
                imgUrl={testimonial?.Image}
                title={testimonial?.Name}
                description={testimonial?.Description}
              />
            );
          })}
      </Slider>
    </div>
  );
};

export default Testimonials;
