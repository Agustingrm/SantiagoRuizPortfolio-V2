import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { useContext } from "react";
import PortfolioContext from "../Context/PortfolioContext";
import "../Assets/Styles/CSS/Details.css";
import leftArrow from "../Assets/Icons/leftArrow.svg";
import rightArrow from "../Assets/Icons/rightArrow.svg";
import { motion } from "framer-motion";
import { fading, transition } from "../Assets/Animations/AnimationIndex";

const DetailsPage: React.FC<{}> = () => {
  const context = useContext(PortfolioContext);
  let { section, project } = useParams();
  let sectionExists = section !== undefined ? section : "";
  let currentSection = "project" + sectionExists.charAt(0).toUpperCase() + sectionExists.slice(1);
  let currentProject = project != null ? project : "";
  let currentProjectIndex = context[currentSection].findIndex(
    (element: string) => element === currentProject
  );
  const [activeSlide, SetActiveSlide] = useState(currentProjectIndex);
  const [activeSlide2, SetActiveSlide2] = useState(currentProjectIndex);
  const navigate = useNavigate();
  const sliderRef = useRef({ slickNext(): void {}, slickPrev(): void {} });

  const SamplePrevArrow = () => {
    <></>;
  };

  const SampleNextArrow = () => {
    <></>;
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
    if (!context.loading) {
      setTimeout(() => navigate("/" + section + "/" + context[currentSection][activeSlide]), 400);
    }
    //On desktop the scroll is on the whole screen
    window.scrollTo({ top: 0, behavior: "smooth" });
    //On mobile is in particular div
    let scroll = document.getElementById("scrollToTop");
    scroll?.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSlide]);

  if (context.loading) {
    return <></>;
  } else {
    return (
      <motion.div
        className="detailsContainer"
        id="scrollToTop"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fading}
        transition={transition}
      >
        <div className="projectInfo">
          <p className="detailName">{context.projects[sectionExists][currentProjectIndex].name}</p>
          <p className="detailYear">{context.projects[sectionExists][currentProjectIndex].year}</p>
          <div className="detailText">
            {context.projects[sectionExists][currentProjectIndex].projectDescription.map(
              (line: string, index: number) => (
                <p key={line + index} className="detailLines">
                  {line}
                </p>
              )
            )}
          </div>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {context.projects[sectionExists].map(
            (project: {
              name: string;
              year: string;
              projectDescription: Array<string>;
              projectImages: Array<any>;
            }) => {
              return (
                <div key={project.name}>
                  <div
                    className={context.display + " detailsPhotoContainer"}
                    key={project.name + project.year}
                  >
                    <div className="projectInfoMobile">
                      <p className="detailNameMobile">{project.name}</p>
                      <p className="detailYearMobile">{project.year}</p>
                      <div className="detailTextMobile">
                        {project.projectDescription.map((line: string, index: number) => (
                          <p key={line + index} className="detailLinesMobile">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                    {project.projectImages.map((image: { asset: { url: string } }, index: number) => {
                      return (
                        <img
                          src={image.asset.url}
                          alt={context.projects[sectionExists][currentProjectIndex].name}
                          loading="lazy"
                          key={image.asset.url + index}
                        />
                      );
                    })}
                  </div>
                  <div className={context.display + " mobileBottomBox"}>
                    <img src={leftArrow} alt="Left arrow" onClick={sliderRef.current.slickPrev} />
                    <p className="detailNameMobile">{project.name}</p>
                    <img src={rightArrow} alt="Right arrow" onClick={sliderRef.current.slickNext} />
                  </div>
                </div>
              );
            }
          )}
        </Slider>
      </motion.div>
    );
  }
};

export default DetailsPage;
