import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../images/gym.jpeg";
import banner2 from "../../images/sport.jpeg";




function HeroBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="hero-banner-wrapper">
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="Banner 1" className="banner-img" />
        </div>
        <div>
          <img src={banner2} alt="Banner 2" className="banner-img" />
        </div>
      </Slider>
    </div>
  );
}

export default HeroBanner;
