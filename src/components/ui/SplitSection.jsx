const SplitSection = ({ id, children, image, bgColor, overlay, reverse }) => {
  return (
    <section
      id={id}
      className={`relative z-0 h-[85svh] flex justify-center items-center sm:items-stretch ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center blur-[2px] h-[85svh] lg:hidden"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className={`absolute inset-0 ${overlay} h-[85svh] lg:hidden`}></div>

      <div
        className={`relative z-10 flex text-left p-10 text-lack drop-shadow-lg md:flex-1 lg:flex lg:justify-center lg:${bgColor} items-center`}
      >
        <div className="max-w-150 ">{children}</div>
      </div>
      <img src={image} alt={image} className="hidden lg:block lg:flex-1" />
    </section>
  );
};

export default SplitSection;
