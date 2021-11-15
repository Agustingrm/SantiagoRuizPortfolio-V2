import "../Assets/Styles/CSS/Projects.css";
import PortfolioContext from "../Context/PortfolioContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const OverviewPage: React.FC<{}> = () => {
  const context = useContext(PortfolioContext);
  return (
    <div className="projectContainer">
      <div className="imgGrid">
        {context.projectOverview.map((projectName: string) => {
          return (
            <Link
              to={"/project/" + projectName}
              key={projectName}
            >
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

export default OverviewPage;
