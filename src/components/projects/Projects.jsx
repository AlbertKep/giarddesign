import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Masonry from "react-masonry-css";
import { heading, label } from "../../data/projects";
import { useIsMobile } from "../../hooks/useIsMobile";
import Heading from "../ui/Heading";

// images
import image1 from "../../assets/gallery/image1.png";
import image10 from "../../assets/gallery/image10.png";
import image11 from "../../assets/gallery/image11.png";
import image12 from "../../assets/gallery/image12.png";
import image13 from "../../assets/gallery/image13.png";
import image14 from "../../assets/gallery/image14.png";
import image15 from "../../assets/gallery/image15.png";
import image2 from "../../assets/gallery/image2.png";
import image3 from "../../assets/gallery/image3.png";
import image4 from "../../assets/gallery/image4.png";
import image5 from "../../assets/gallery/image5.png";
import image6 from "../../assets/gallery/image6.png";
import image7 from "../../assets/gallery/image7.png";
import image8 from "../../assets/gallery/image8.png";
import image9 from "../../assets/gallery/image9.png";
import Arrow from "../ui/Arrow";
import Button from "../ui/Button";

const images = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
  { id: 6, image: image6 },
  { id: 7, image: image7 },
  { id: 8, image: image8 },
  { id: 9, image: image9 },
  { id: 10, image: image10 },
  { id: 11, image: image11 },
  { id: 12, image: image12 },
  { id: 13, image: image13 },
  { id: 14, image: image14 },
  { id: 15, image: image15 },
];
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const containerVariants = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const imageVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 },
  },
  hidden: { opacity: 0, scale: 0 },
};
const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const isMobile = useIsMobile(768);

  const currentImages = images.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <motion.section className="relative bg-beige pt-10 lg:pt-30 px-10 mx-auto">
      <Heading label={label}>{heading}</Heading>

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        animate={!isMobile && isInView ? "visible" : "hidden"}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid max-w-7xl mx-auto"
          columnClassName="masonry-grid_column"
        >
          {currentImages.map(({ id, image }) => (
            <motion.img
              key={id}
              variants={imageVariants}
              src={image}
              alt="photo gallery"
              className="cursor-pointer hover:scale-110 transition-scale duration-300 ease-in-out"
              initial={isMobile ? "hidden" : undefined}
              whileInView={isMobile ? "visible" : undefined}
              viewport={isMobile ? { once: true, amount: 0.3 } : undefined}
            />
          ))}
        </Masonry>
      </motion.div>

      {visibleCount < images.length && (
        <div
          className="pointer-events-auto w-full h-[50%] absolute flex justify-center left-0 right-0 bottom-0 bg-linear-to-t from-[#DCC1AB] to-[#D6B79E]/0
"
        >
          <Button
            className="flex absolute bottom-10 border border-black hover:bg-black hover:text-beige"
            onClick={handleLoadMore}
          >
            Rozwiń <Arrow className="ml-2" />
          </Button>
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
