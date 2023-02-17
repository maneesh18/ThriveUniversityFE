import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderItem from "./SliderItem";

function Slider(props) {
  const { sliderList } = props;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      slidesToSlide:2,
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide:2
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide:2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="slider-div">
    <h2 className="heading-font text-light" style={{marginBottom:"10px"}}>Lastest Notifications</h2>
      <Carousel
        swipeable={true}
        responsive={responsive}
        focusOnSelect={true}
      >
        {sliderList.map((item) => {
          return <SliderItem />;
        })}
      </Carousel>
    </div>
  );
}

export default Slider;
