import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <Link to="/template1" className="slider-template1 link-temp" />
        <Link to="/template2" className="slider-template2 link-temp" />
        <Link to="/template3" className="slider-template3 link-temp" />
        <Link to="/template4" className="slider-template4 link-temp" />
        <Link to="/template5" className="slider-template5 link-temp" />
      </Slider>
    </div>
  );
}

export default PauseOnHover;
