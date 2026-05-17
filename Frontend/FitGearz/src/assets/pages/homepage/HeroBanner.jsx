import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../images/Banner 1.png";
import banner2 from "../../images/Banner 2.png";
import banner3 from "../../images/Banner 3.png";
import banner4 from "../../images/Banner 4.png";



function HeroBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="hero-banner-wrapper">
      <Slider {...settings}>
        <div className="banner-slide">
          <img src={banner1} alt="Banner 1" className="banner-img" />
        </div>

        <div className="banner-slide">
          <img src={banner2} alt="Banner 2" className="banner-img" />
        </div>

        <div className="banner-slide">
          <img src={banner3} alt="Banner 3" className="banner-img" />
        </div>

        <div className="banner-slide">
          <img src={banner4} alt="Banner 4" className="banner-img" />
        </div>
      </Slider>
    </div>
  );
}

export default HeroBanner;
