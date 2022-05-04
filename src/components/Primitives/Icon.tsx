import Image from 'next/image';

interface IImage {
  name: string;
  description?: string;
  className?: string;
  width?: string;
  height?: string;
  onClick?: any;
  isClickable?: boolean;
}

const Icon = ({
  name,
  description,
  className,
  width,
  height,
  onClick,
  isClickable = false,
}: IImage) => {
  const cursorPointer = isClickable ? 'focus:cursor-auto' : undefined;

  return (
    <Image
      className={`${className} ${cursorPointer}`}
      src={name}
      alt={description}
      width={'240'}
      height={'240'}
      onClick={onClick}
    ></Image>
  );
};

export default Icon;
