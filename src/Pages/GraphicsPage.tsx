import "../Assets/Styles/CSS/Projects.css";
import PortfolioContext from "../Context/PortfolioContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { motion } from "framer-motion";
import { fading, transition } from "../Assets/Animations/AnimationIndex";

const GraphicsPage: React.FC<{}> = () => {
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
          {context.projectGraphics.map((projectName: string, index: number) => {
            let span = context.projects.graphics[index].span;
            return (
              <Link to={"/graphics/" + projectName} key={projectName} className={"span" + span}>
                <img
                  src={context.projects.graphics[index].coverImage.asset.url}
                  alt={context.projects.graphics[index].name}
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

export default GraphicsPage;
