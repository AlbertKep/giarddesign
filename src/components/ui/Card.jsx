import { motion } from "framer-motion";
// hooks
import { useIsMobile } from "../../hooks/useIsMobile";
// icons
import project from "../../assets/icons/project.svg";
import realisation from "../../assets/icons/realisation.svg";
import visualization from "../../assets/icons/visualization.svg";
// ui
import Arrow from "../ui/Arrow";
// animations
import { scaleIn } from "../../motionVariants";

const icons = { project, visualization, realisation };
const Card = ({ title, icon, description }) => {
  const isMobile = useIsMobile(768);
  return (
    <motion.li
      className="bg-white max-w-80 py-8 px-4 m-2 rounded-[28px] hover:rotate-2 hover:scale-105 transition-all duration-300 ease-in-out lg:max-w-96 lg:py-12 lg:px-8 lg:m-3"
      variants={scaleIn}
      initial={isMobile ? "hidden" : undefined}
      whileInView={isMobile ? "visible" : undefined}
      viewport={{ once: true, amount: 0.3 }}
    >
      <img src={icons[icon]} alt={icon} />
      <h4 className="font-montserrat text-2xl font-medium mt-8 mb-3 lg:text-3xl">{title}</h4>
      <p className="text-base text-left mb-8">{description}</p>
      <a href="#" className="text-green border-b border-green pb-2">
        <span>Dowiedz się więcej</span> <Arrow className="inline-block -rotate-90 ml-2" />
      </a>
    </motion.li>
  );
};

export default Card;
