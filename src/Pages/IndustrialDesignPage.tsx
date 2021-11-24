import "../Assets/Styles/CSS/Projects.css";
import PortfolioContext from "../Context/PortfolioContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { motion } from "framer-motion";
import { fading, transition } from "../Assets/Animations/AnimationIndex";

const IndustrialDesignPage: React.FC<{}> = () => {
  const context = useContext(PortfolioContext);
  return (
    <motion.div
      className="projectContainer"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fading}
      transition={transition}
    >
      <div className="imgGrid">
        {context.projectIndustrialDesign.map((projectName: string) => {
          let span = context.projectDatabase[projectName].coverSpan;
          console.log(projectName + span);
          return (
            <Link to={"/IndustrialDesign/" + projectName} key={projectName} className={"span" + span}>
              <img
                src={context.projectDatabase[projectName].cover}
                alt={context.projectDatabase[projectName].name}
                loading="lazy"
              />
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default IndustrialDesignPage;
