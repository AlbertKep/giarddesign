import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";

import Arrow from "../ui/Arrow";
import Button from "../ui/Button";

const Intro = () => {
  return (
    <section className="bg-beige relative">
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
        <SwiperSlide>
          <div className="relative h-[85svh] lg:flex">
            <div
              className="absolute inset-0 bg-cover bg-center blur-[2px] h-[85svh] lg:hidden"
              style={{ backgroundImage: `url(${image1})` }}
            ></div>

            <div className="absolute inset-0 bg-beige/50 h-[85svh] lg:hidden"></div>

            <div className="relative z-10 text-left p-10 text-lack drop-shadow-lg lg:flex-1 lg:flex lg:justify-center items-center">
              <div className="max-w-150 ">
                <h1 className="text-6xl/17.5 font-medium">Nowoczesna aranżacja Twojego ogrodu</h1>

                <p className="mt-14 font text-base">
                  Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji.
                  Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.
                </p>

                <div className="flex flex-col gap-6 mt-10 sm:flex-row">
                  <Button className="bg-green text-grey hover:bg-grey hover:text-green">
                    Skontaktuj się z nami
                  </Button>

                  <Button className="flex bg-beige text-green border boder-beige sm:border-green hover:bg-green hover:text-beige">
                    <span className="mr-2 flex-1">Zobacz nasze realizacje</span>
                    <Arrow className="w-4 fill-green hover:fill-grey" />
                  </Button>
                </div>
              </div>
            </div>
            <img src={image1} alt="" className="hidden sm:block lg:flex-1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[85svh] lg:flex">
            <div
              className="absolute inset-0 bg-cover bg-center blur-[2px] lg:hidden"
              style={{ backgroundImage: `url(${image2})` }}
            ></div>

            <div className="absolute inset-0 bg-black/20 lg:hidden"></div>

            <div className="relative z-10 text-left p-10 text-lack drop-shadow-lg lg:flex-1 lg:flex lg:justify-center items-center">
              <div className="max-w-150">
                <h1 className="text-6xl font-medium">Nowoczesna aranżacja Twojego ogrodu</h1>

                <p className="mt-14 text-base">
                  Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji.
                  Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.
                </p>
              </div>
            </div>
            <img src={image2} alt="" className="hidden sm:block lg:flex-1" />
          </div>
        </SwiperSlide>
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
