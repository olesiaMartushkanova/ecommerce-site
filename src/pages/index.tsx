import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Layout/Footer/Footer';
import Header from '../components/Layout/Header/Header';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{'Ecommerce site by Olesia'}</title>
        <meta name={'Ecommerce site'} content={'Built by Olesia'} />
        <link rel={'icon'} href={'/shop.svg'} />
      </Head>
      <Header />
      <main>Main body here</main>
      <Footer />
    </div>
  );
};

export default Home;
