import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Layout/Footer/Footer';
import Header from '../components/Layout/Header/Header';
import Icon from '../components/Primitives/Icon';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{'Ecommerce site by Olesia'}</title>
        <meta name={'Ecommerce site'} content={'Built by Olesia'} />
        <link rel={'icon'} href={'/images/shop.svg'} />
      </Head>
      <main className='h-screen flex flex-col'>
        <Header />
        <div className='flex flex-1 overflow-auto'>
          BODY
          <Icon name='/images/cart.svg' />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
