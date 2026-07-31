const Button = ({ children, className }) => {
  return (
    <button className={`cursor-pointer px-6 py-3 rounded-[100px] ${className}`}>{children}</button>
  );
};

export default Button;
