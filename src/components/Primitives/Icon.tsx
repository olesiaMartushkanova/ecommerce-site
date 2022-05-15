import Image from 'next/image';

type IImage = {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  isClickable?: boolean;
};

const Icon = ({
  src,
  alt,
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
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
    ></Image>
  );
};

export default Icon;
