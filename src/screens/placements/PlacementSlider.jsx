import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SideHeading from "../../components/SideHeading";

function PlacementSlider() {
  const sliderList  = ["adobe","amazon","deshaw","flipkart","golmansachs","hsbc","indianOil","intel","jaguar","microsoft","nvidia","oppo","oracle","qualcomm","salesforce"];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      slidesToSlide:2,
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide:2
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide:2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
      slidesToSlide:2
    },
  };

  return (
    <div className="placement-slider">
    <SideHeading>Past Recruiters</SideHeading>
    <hr style={{borderTop:"3px solid black",color:"white",width:"50%",margin:"0px auto 30px"}}/>
      <Carousel
        swipeable={true}
        responsive={responsive}
        autoPlay={true}
        rewind={true}
        rewindWithAnimation={true}
      >
        {sliderList.map((item) => {
          let imageurl = "../images/placementImages/"+item+".jpeg";
          return (<img className="placement-slider-image" src={imageurl} alt={item} />);
        })}
      </Carousel>
    </div>
  );
}

export default PlacementSlider;
