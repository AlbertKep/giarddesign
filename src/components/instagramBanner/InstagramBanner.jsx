import Heading from "../../components/ui/Heading";
import { description, heading } from "../../data/instagramBanner";
import Button from "../ui/Button";

const InstagramBanner = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col gap-2 max-w-5xl text-white bg-green py-10 px-12 md:flex-row md:gap-6 md:py-27 md:my-14 md:px-22">
        <Heading className="text-xl md:basis-5/6 md:text-4xl/1.2">{heading}</Heading>
        <div className="flex text-xs w-full items-center justify-center md:flex-col md:items-start md:basis-1/6 md:text-base">
          <p className="text-center mr-5 md:text-left md:w-40">{description}</p>
          <Button className="bg-white text-green border md:mt-4.5 hover:bg-green hover:border-white hover:text-white">
            Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramBanner;
