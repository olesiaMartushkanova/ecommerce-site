import Image from 'next/image';

interface IImage {
  src: string;
  description?: string;
  className?: string;
  width?: string;
  height?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  isClickable?: boolean;
}

const Icon = ({
  src,
  description,
  className,
  width = '25',
  height = '35',
  onClick,
  isClickable = false,
}: IImage) => {
  const cursorPointer = isClickable ? 'focus:cursor-auto' : undefined;

  return (
    <Image
      className={`${className} ${cursorPointer}`}
      src={src}
      alt={description}
      width={width}
      height={height}
      onClick={onClick}
    ></Image>
  );
};

export default Icon;
