import Menu, { IListItem } from './components/Menu';

type IFooter = {
  className?: string;
};

const Footer = ({ className }: IFooter) => {
  const listItemsShop: IListItem[] = [
    { id: 'suitcases', name: 'Suitcases', routeLink: 'suitcases' },
    { id: 'bags', name: 'Bags', routeLink: 'bags' },
  ];
  const listItemsAbout: IListItem[] = [
    { id: 'ourStory', name: 'Our Story', routeLink: 'story' },
    {
      id: 'deliveryAndReturns',
      name: 'Delivery & Returns',
      routeLink: 'deliveryAndReturns',
    },
    { id: 'contactUs', name: 'Contact Us', routeLink: 'contact' },
  ];

  return (
    <div className={`${className} flex justify-evenly bg-lime-50`}>
      <Menu className='mr-5' title='Shop' listItems={listItemsShop} />
      <Menu title='About' listItems={listItemsAbout} />
    </div>
  );
};

export default Footer;
