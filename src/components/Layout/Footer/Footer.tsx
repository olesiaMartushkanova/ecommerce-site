import Menu, { IListItem } from './components/Menu';

const Footer = () => {
  const listItems: IListItem[] = [
    { id: 'suitcases', name: 'Suitcases', routeLink: '/suitcases' },
    { id: 'bags', name: 'Bags', routeLink: '/bags' },
  ];

  return (
    <div className='bg-red-400'>
      <div>Sign up for our emails</div>
      <Menu listItems={listItems} />
    </div>
  );
};

export default Footer;
