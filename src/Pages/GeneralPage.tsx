import "../Assets/Styles/CSS/Projects.css";
import PortfolioContext from "../Context/PortfolioContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { motion } from "framer-motion";
import { fading, transition } from "../Assets/Animations/AnimationIndex";

const GeneralPage: React.FC<{}> = () => {
  const context = useContext(PortfolioContext);
  if (context.loading) {
    return <></>;
  } else {
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
          {context.projectGeneral.map((projectName: string, index: number) => {
            let span = context.projects.general[index].span;
            return (
              <Link to={"/general/" + projectName} key={projectName} className={"span" + span}>
                <img
                  src={context.projects.general[index].coverImage.asset.url}
                  alt={context.projects.general[index].name}
                  loading="lazy"
                />
              </Link>
            );
          })}
        </div>
      </motion.div>
    );
  }
};

export default GeneralPage;
