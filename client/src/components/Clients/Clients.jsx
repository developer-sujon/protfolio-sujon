//External Import
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Internal Import
import ClientRequest from "../../APIRequest/ClientRequest";

const SliderItem = ({ Image }) => {
  return (
    <div
      className="swiper-slide swiper-slide-active"
      style={{ width: 150, marginRight: 30 }}
    >
      <img src={Image} alt="Logo" style={{maxWidth: '50px'}}/>
    </div>
  );
};

const Clients = () => {
  useEffect(() => {
    ClientRequest.ClientDropDown();
  }, []);

  const { ClientList } = useSelector((state) => state.Client);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: true,
    autoplay: true,
  };

  return (
    <div className="section">
      <h2 className="title title--h2">Clients</h2>
      <Slider {...settings}>
        {ClientList &&
          ClientList.map((Client) => {
            return <SliderItem key={Client?._id} Image={Client?.Image} />;
          })}
      </Slider>
    </div>
  );
};

export default Clients;
