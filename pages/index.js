import Head from 'next/head';
import ColumnCharts from '@/components/ColumnCharts';

const Home = () => {
  
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
    <main>
      <ColumnCharts />
    </main>
    </>
  )   
}

export default Home;