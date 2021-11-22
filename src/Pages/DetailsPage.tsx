import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { useContext } from "react";
import PortfolioContext from "../Context/PortfolioContext";
import "../Assets/Styles/CSS/Details.css";

const DetailsPage: React.FC<{}> = () => {
  const context = useContext(PortfolioContext);
  let { section, project } = useParams();
  let currentSection = "project" + section;
  let currentProject = project != null ? project : "";
  let currentProjectIndex = context[currentSection].findIndex((element: string) => element === currentProject);
  const [activeSlide, SetActiveSlide] = useState(currentProjectIndex);
  const [activeSlide2, SetActiveSlide2] = useState(currentProjectIndex);
  const navigate = useNavigate();

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
    beforeChange: (current: number, next: number) => SetActiveSlide(next),
    afterChange: (current: number) => SetActiveSlide2(current),
    prevArrow: SamplePrevArrow(),
    nextArrow: SampleNextArrow(),
  };

  useEffect(() => {
    navigate("/" + section + "/" + context[currentSection][activeSlide]);
  }, [activeSlide2]);

  return (
    <div className="detailsContainer">
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
      <Slider {...settings}>
        {context[currentSection].map((projectName: string) => {
          return (
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
          );
        })}
      </Slider>
    </div>
  );
};

export default DetailsPage;
