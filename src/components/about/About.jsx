import { motion } from "motion/react";
// data
import { description, heading, label } from "../../data/about";
// assets
import image1 from "../../assets/images/image1.png";
// ui
import Arrow from "../ui/Arrow";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import SplitSection from "../ui/SplitSection";
// animations
import { slideUp } from "../../motionVariants";

const About = () => {
  return (
    <SplitSection id="about" image={image1} bgColor="bg-green" overlay="bg-green/40" reverse>
      <motion.div
        variants={slideUp()}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
      >
        <Heading className="text-white mt-10" label={label} labelClassName="text-white">
          {heading}
        </Heading>

        <p className="mt-14 font text-base text-white">{description}</p>
        <div className="flex flex-col gap-6 mt-10 sm:flex-row ">
          <Button className="flex bg-transparent text-white border border-white lg:bg-green hover:bg-green hover:text-beige">
            <a href="#contact" className="mr-2 flex-1">
              Poznaj nas bliżej
            </a>
            <Arrow className="w-4 fill-green hover:fill-grey -rotate-90" />
          </Button>
        </div>
      </motion.div>
    </SplitSection>
  );
};

export default About;
