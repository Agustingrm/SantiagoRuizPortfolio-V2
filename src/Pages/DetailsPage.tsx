import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { useContext } from "react";
import PortfolioContext from "../Context/PortfolioContext";
import "../Assets/Styles/CSS/Details.css";
import leftArrow from "../Assets/Icons/leftArrow.svg";
import rightArrow from "../Assets/Icons/rightArrow.svg";

const DetailsPage: React.FC<{}> = () => {
  const context = useContext(PortfolioContext);
  let { section, project } = useParams();
  let currentSection = "project" + section;
  let currentProject = project != null ? project : "";
  let currentProjectIndex = context[currentSection].findIndex((element: string) => element === currentProject);
  const [activeSlide, SetActiveSlide] = useState(currentProjectIndex);
  const [activeSlide2, SetActiveSlide2] = useState(currentProjectIndex);
  const navigate = useNavigate();
  const sliderRef = useRef({slickNext():void{},slickPrev():void{}});

  const SamplePrevArrow = () => {
    <div></div>;
  };

  const SampleNextArrow = () => {
    <div></div>;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: currentProjectIndex,
    onSwipe: () => console.log(context[currentSection][activeSlide]),
    beforeChange: (current: number, next: number) => SetActiveSlide(next),
    afterChange: (current: number) => SetActiveSlide2(current),
    prevArrow: SamplePrevArrow(),
    nextArrow: SampleNextArrow(),
  };

  //Changes URL on Slide and makes it go to the top
  useEffect(() => {
    setTimeout(() => navigate("/" + section + "/" + context[currentSection][activeSlide]), 400);
    //On desktop the scroll is on the whole screen
    window.scrollTo(0, 0);
    //On mobile is in particular div
    let scroll = document.getElementById("scrollToTop");
    scroll?.scrollTo(0, 0);
  }, [activeSlide]);

  return (
    <div className="detailsContainer" id="scrollToTop">
      <div className="projectInfo">
        <p className="detailName">{context.projectDatabase[currentProject].name}</p>
        <p className="detailYear">{context.projectDatabase[currentProject].year}</p>
        <div className="detailText">
          {context.projectDatabase[currentProject].textBox.map((line: string) => (
            <p key={line} className="detailLines">
              {line}
            </p>
          ))}
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {context[currentSection].map((projectName: string) => {
          return (
            <div>
              <div className={context.display + " detailsPhotoContainer"} key={projectName}>
                <div className="projectInfoMobile">
                  <p className="detailNameMobile">{context.projectDatabase[projectName].name}</p>
                  <p className="detailYearMobile">{context.projectDatabase[projectName].year}</p>
                  <div className="detailTextMobile">
                    {context.projectDatabase[projectName].textBox.map((line: string) => (
                      <p key={line} className="detailLinesMobile">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                {context.projectDatabase[projectName].detailPhotos.map((project: string) => {
                  return <img src={project} alt={context.projectDatabase[projectName].name} loading="lazy" key={project} />;
                })}
              </div>
              <div className={context.display + " mobileBottomBox"}>
                <img src={leftArrow} alt="Left arrow" onClick={sliderRef.current.slickPrev} />
                <p className="detailNameMobile">{context.projectDatabase[projectName].name}</p>
                <img src={rightArrow} alt="Right arrow" onClick={sliderRef.current.slickNext} />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default DetailsPage;
