const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`cursor-pointer px-6 py-3 rounded-[100px] ${className}`}>
      {children}
    </button>
  );
};

export default Button;
