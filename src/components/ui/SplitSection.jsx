const SplitSection = ({ children, image, bgColor, opacity, reverse }) => {
  return (
    <div
      className={`relative h-[85svh] lg:flex ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center blur-[2px] h-[85svh] lg:hidden"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* <div className="absolute inset-0 bg-beige/50 h-[85svh] lg:hidden"></div> */}
      <div className={`absolute inset-0 ${bgColor}/${opacity} h-[85svh] lg:hidden`}></div>

      <div
        className={`relative z-10 text-left p-10 text-lack drop-shadow-lg lg:flex-1 lg:flex lg:justify-center lg:${bgColor} items-center`}
      >
        <div className="max-w-150 ">{children}</div>
      </div>
      <img src={image} alt={image} className="hidden sm:block lg:flex-1" />
    </div>
  );
};

export default SplitSection;
