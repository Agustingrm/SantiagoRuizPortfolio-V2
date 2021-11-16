import "../Assets/Styles/CSS/Projects.css";
import PortfolioContext from "../Context/PortfolioContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const IndustrialDesignPage: React.FC<{}> = () => {
  const context = useContext(PortfolioContext);
  return (
    <div className="projectContainer">
      <div className="imgGrid">
        {context.projectIndustrialDesign.map((projectName: string) => {
          let span = context.projectDatabase[projectName].coverSpan;
          console.log(projectName + span)
          return (
            <Link to={"/project/" + projectName} key={projectName} className={"span" + span}>
              <img
                src={context.projectDatabase[projectName].cover}
                alt={context.projectDatabase[projectName].name}
                loading="lazy"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default IndustrialDesignPage;
