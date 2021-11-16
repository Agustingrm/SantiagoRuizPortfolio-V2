import { useState } from "react";
import { useParams } from "react-router";
import Slider from "react-slick";
import { useContext } from "react";
import PortfolioContext from "../Context/PortfolioContext";
import "../Assets/Styles/CSS/Details.css";

const DetailsPage: React.FC<{}> = () => {
  const context = useContext(PortfolioContext);
  const [activeSlide, SetActiveSlide] = useState(0);
  const [activeSlide2, SetActiveSlide2] = useState(0);
  let { section } = useParams();

  let currentSection = "project" + section;
  // let currentProject = project;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => SetActiveSlide(next),
    afterChange: (current: number) => SetActiveSlide2(current),
  };

  console.log(activeSlide);
  console.log(activeSlide2);

  return (
    <div className="detailsContainer">
      <Slider {...settings}>
        {context[currentSection].map((projectName: string) => {
          return (
            <div className='detailsPhotoContainer'>
              {context.projectDatabase[projectName].detailPhotos.map((project: string) => {
                return (
                  <img
                    src={project}
                    alt={context.projectDatabase[projectName].name}
                    loading="lazy"
                  />
                );
              })}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default DetailsPage;
