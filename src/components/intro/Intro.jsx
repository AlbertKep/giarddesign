import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
// data
import { silder } from "../../data/intro";
// ui
import { slideUp } from "../../motionVariants";
import Arrow from "../ui/Arrow";
import Button from "../ui/Button";
import SplitSection from "../ui/SplitSection";
// animations

const images = { image1, image2 };
const Intro = () => {
  return (
    <section id="offer" className="bg-beige relative mt-20">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        className="mySwiper"
      >
        {silder?.map(({ id, image, heading, description }) => (
          <SwiperSlide key={id}>
            <SplitSection image={images[image]} overlay="bg-beige/60">
              <motion.div
                key={id}
                variants={slideUp()}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
              >
                <h1 className="font-montserrat font-medium text-4xl/12.5 lg:text-6xl/16.5">
                  {heading}
                </h1>

                <p className="mt-14 font text-base">{description}</p>

                <div className="flex flex-col gap-6 mt-10 sm:flex-row">
                  <Button className="bg-green text-grey border border-green hover:bg-beige hover:text-green">
                    <a href="#contact">Skontaktuj się z nami</a>
                  </Button>

                  <Button className="flex bg-beige text-green border boder-beige sm:border-green hover:bg-green hover:text-beige">
                    <a href="#projects" className="mr-2 flex-1">
                      Zobacz nasze realizacje
                    </a>
                    <Arrow className="w-4 fill-green hover:fill-grey" />
                  </Button>
                </div>
              </motion.div>
            </SplitSection>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden md:block absolute right-0 bottom-[0%] z-4">
        <button className="button-prev">
          <Arrow />
        </button>
        <button className="button-next">
          <Arrow />
        </button>
      </div>
    </section>
  );
};

export default Intro;
