import type { NextPage } from 'next';
import Head from 'next/head';
import PageLayout from '../components/Layout/PageLayout';
import Button from '../components/Primitives/Button/Button';
import { ICONS } from '../utils/constants';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Ecommerce site by Olesia</title>
      <meta name='Ecommerce site' content='Built by Olesia' />
      <link rel='icon' href={ICONS.shop} />
    </Head>
    <PageLayout>
      <div className='flex flex-1 flex-col overflow-auto justify-center m-auto'>
        <Button label='Shop now' />
      </div>
    </PageLayout>
  </>
);

export default Home;
