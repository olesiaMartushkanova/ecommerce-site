import Menu, { IListItem } from './components/Menu';

const Footer = () => {
  const listItems: IListItem[] = [{ name: 'Suitcases' }];

  return (
    <div className='bg-red-400'>
      <div>Sign up for our emails</div>
      <Menu listItems={listItems} />
    </div>
  );
};

export default Footer;
