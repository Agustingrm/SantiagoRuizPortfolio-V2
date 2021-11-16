import "../Assets/Styles/CSS/Projects.css";
import PortfolioContext from "../Context/PortfolioContext";
import { Link } from "react-router-dom";
import { useContext } from "react";


const OverviewPage: React.FC<{}> = (props:any) => {
  console.log(props)
  const context = useContext(PortfolioContext);
  return (
    <div className="projectContainer">
      <div className="imgGrid">
        {context.projectOverview.map((projectName: string) => {
          let span = context.projectDatabase[projectName].coverSpan;
          return (
            <Link to={"/Overview/" + projectName} key={projectName} className={"span" + span}>
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
