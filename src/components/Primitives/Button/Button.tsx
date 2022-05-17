type ButtonProps = {
  label: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const Button = ({ label, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`${className} border-solid border-black border-2 h-12 w-48 text-2xl rounded-2xl`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
