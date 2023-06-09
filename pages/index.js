import Head from 'next/head';
import Wrapper from '@/components/Wrapper';
import ColumnCharts from '@/components/ColumnCharts';
import RadialCharts from '@/components/RadialCharts';

const Home = () => {
  
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
    <Wrapper className='row'>
      <ColumnCharts />
      <RadialCharts />
    </Wrapper>
    </>
  )   
}

export default Home;