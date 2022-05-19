import Link from 'next/link';

const Label = () => (
  <div className='font-bold text-xl bg-black text-white p-2 hover:cursor-pointer pr-4 pl-4'>
    <Link href={'/'}>
      <a>Happy Shop</a>
    </Link>
  </div>
);

export default Label;
