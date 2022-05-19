import Footer from './Footer/Footer';
import Header from './Header/Header';

type PageLayout = {
  children?: React.ReactNode;
};

const PageLayout = ({ children }: PageLayout) => (
  <main className='h-screen flex flex-col'>
    <Header />
    <div className='flex flex-1 flex-col overflow-auto'>{children}</div>
    <Footer />
  </main>
);

export default PageLayout;
