import aboutPhoto from "../Assets/aboutPhoto.png";
import "../Assets/Styles/CSS/About.css";
import { motion } from "framer-motion";
import { fading, transition } from "../Assets/Animations/AnimationIndex";

const AboutPage: React.FC<{}> = () => {
  return (
    <motion.div
      className="aboutContainer"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fading}
      transition={transition}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit nibh dignissim mauris tempus, arcu aenean vel tempor ad vitae
        feugiat suspendisse ullamcorper magnis. Porta non iaculis parturient metus netus molestie nascetur velit nisi aliquam
        volutpat venenatis egestas id, maecenas fermentum sem gravida praesent mattis condimentum diam torquent faucibus pretium
        blandit. Senectus egestas libero duis feugiat eu vestibulum sagittis etiam in dis mus magnis, ornare
      </p>
      <p>What I do:</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit nibh dignissim mauris tempus, arcu aenean vel tempor ad vitae
        feugiat suspendisse ullamcorper magnis.
      </p>
      <p>a film director: Gaspar Noé</p>
      <p>a musician: Gustavo Santaolalla</p>
      <p>a painter: Guillermo Lorca García H.</p>
      <p>a person: Elena Romero (my grandmother)</p>
      <img src={aboutPhoto} alt="Myself" loading="lazy" />
    </motion.div>
  );
};

export default AboutPage;
