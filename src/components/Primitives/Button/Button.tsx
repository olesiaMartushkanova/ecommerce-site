type ButtonProps = {
  label: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const Button = ({ label, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`${className} border-solid border-black border-2 h-9`}
      onClick={onClick}
    >
      <div>{label} </div>
    </button>
  );
};

export default Button;
