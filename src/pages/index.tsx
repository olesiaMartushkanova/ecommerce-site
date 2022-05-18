import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Layout/Footer/Footer';
import Header from '../components/Layout/Header/Header';
import Button from '../components/Primitives/Button/Button';
import { ICONS } from '../utils/constants';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Ecommerce site by Olesia</title>
      <meta name='Ecommerce site' content='Built by Olesia' />
      <link rel='icon' href={ICONS.shop} />
    </Head>
    <main className='h-screen flex flex-col'>
      <Header />
      <div className='flex flex-1 flex-col overflow-auto justify-center m-auto'>
        <Button label='Shop now' />
      </div>
      <Footer />
    </main>
  </div>
);

export default Home;
