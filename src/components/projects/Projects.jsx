import { motion, useInView } from "motion/react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-css";

// data
import { heading, label } from "../../data/projects";
// hooks
import { useIsMobile } from "../../hooks/useIsMobile";
// ui
import Arrow from "../ui/Arrow";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
// animations
import { scaleIn, sectionStagger } from "../../motionVariants";
// images
import { images } from "../../data/gallery";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const isMobile = useIsMobile(768);

  const currentImages = images.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#projects-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [visibleCount]);
  return (
    <section id="projects" className="relative bg-beige pt-10 lg:pt-30 px-10 mx-auto">
      <Heading label={label} className="md:my-10 xl:ml-40 xl:mb-24">
        {heading}
      </Heading>

      <motion.div
        ref={containerRef}
        variants={sectionStagger(0.2)}
        animate={!isMobile && isInView ? "visible" : "hidden"}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid max-w-7xl mx-auto"
          columnClassName="masonry-grid_column"
          id="projects-gallery"
        >
          {currentImages.map(({ id, image }) => (
            <motion.div
              key={id}
              variants={scaleIn}
              initial={isMobile ? "hidden" : undefined}
              whileInView={isMobile ? "visible" : undefined}
              viewport={{ once: true, amount: 0.3 }}
              className="cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <a href={image} data-pswp-width="1000" data-pswp-height="800">
                <img src={image} alt="gallery" className="object-contain" />
              </a>
            </motion.div>
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
    </section>
  );
};

export default Projects;
