import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMedia } from "react-use";

const SliderComponent = ({ slides }) => {
  const isSmallDevice = useMedia("(max-width: 768px)");

  const settings = {
    dots: !isSmallDevice,
    arrows: !isSmallDevice,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative mx-10 lg:mx-32 bg-my-bg">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} 

          className={`${isSmallDevice ? "mb-5 px-3" : ""}`}

          // className="mb-10"
          >
            
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full max-h-[750px] bg-my-bg md:max-h-[800px] md:object-contain"
            />
            <div className="p-4 bg-opacity-50 text-white">
              <p className="text-sm text-center">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

SliderComponent.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  
};

export default SliderComponent;
