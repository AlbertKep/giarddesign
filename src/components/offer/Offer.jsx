import { description, heading, label, offerData } from "../../data/offer";
import Card from "../ui/Card";
import Heading from "../ui/Heading";
const Offer = () => {
  return (
    <section className="bg-grey">
      <div className=" m-auto pt-30 max-w-5xl p-5 text-left">
        <Heading label={label}>{heading}</Heading>
        <p className="max-w-3xl mb-10 sm:mb-24">{description}</p>
      </div>
      <ul className="grid justify-items-center gap-2 mx-auto max-w-6xl pb-20 sm:pb-40 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {offerData?.map((offer) => (
          <Card key={offer.id} {...offer} />
        ))}
      </ul>
    </section>
  );
};

export default Offer;
