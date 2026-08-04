const Heading = ({ children, className, label, labelClassName }) => {
  const words = children.split(" ");
  const lastWord = words.pop();
  const rest = words.join(" ");
  return (
    <h2 className={`relative text-5xl mb-8 ${className}`}>
      {rest} <span className="italic">{lastWord}</span>
      <span className={`text-green text-xs absolute -top-5 left-0 ${labelClassName}`}>{label}</span>
    </h2>
  );
};

export default Heading;
