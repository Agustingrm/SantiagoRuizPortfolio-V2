import "../Assets/Styles/CSS/Contact.css";
import { motion } from "framer-motion";
import { fading, transition } from "../Assets/Animations/AnimationIndex";

const ContactPage: React.FC<{}> = () => {
  return (
    <motion.div
      className="contactContainer"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fading}
      transition={transition}
    >
      <p>For job inquiries, questions or just say hi.</p>
      <p>email</p>
      <a href="mailto: abc@gmail.com">hi@santigo-ruiz.com</a>
      <p>phone</p>
      <p>+54 381 6155819</p>
      <p>Tucumán - Argentina</p>
    </motion.div>
  );
};

export default ContactPage;
