import { description, heading, label } from "../../data/about";

import image1 from "../../assets/images/image1.png";
import Arrow from "../ui/Arrow";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import SplitSection from "../ui/SplitSection";

const About = () => {
  return (
    <SplitSection image={image1} bgColor="bg-green" opacity="50" reverse>
      <Heading className="text-white mt-10" label={label} labelClassName="text-white">
        {heading}
      </Heading>

      <p className="mt-14 font text-base text-white">{description}</p>

      <div className="flex flex-col gap-6 mt-10 sm:flex-row ">
        <Button className="flex bg-transparent text-white border border-white lg:bg-green hover:bg-green hover:text-beige">
          <span className="mr-2 flex-1">Poznaj nas bliżej</span>
          <Arrow className="w-4 fill-green hover:fill-grey -rotate-90" />
        </Button>
      </div>
    </SplitSection>
  );
};

export default About;
