import { motion, useInView } from "motion/react";
import { useRef } from "react";
// data
import { description, heading, label, offerData } from "../../data/offer";
// hooks
import { useIsMobile } from "../../hooks/useIsMobile";
// ui
import Card from "../ui/Card";
import Heading from "../ui/Heading";
// animations
import { sectionStagger } from "../../motionVariants";

const Offer = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const isMobile = useIsMobile(768);
  return (
    <section id="offer" className="bg-grey">
      <motion.div className=" m-auto pt-30 max-w-5xl p-5 text-left">
        <Heading label={label}>{heading}</Heading>
        <p className="max-w-3xl mb-10 sm:mb-24">{description}</p>
      </motion.div>
      <motion.ul
        className="grid justify-items-center gap-2 mx-auto max-w-6xl pb-20 sm:pb-40 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        ref={containerRef}
        variants={sectionStagger(0.3)}
        animate={!isMobile && isInView ? "visible" : "hidden"}
      >
        {offerData?.map((offer) => (
          <Card key={offer.id} {...offer} />
        ))}
      </motion.ul>
    </section>
  );
};

export default Offer;
