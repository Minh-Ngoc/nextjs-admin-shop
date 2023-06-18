import Head from 'next/head';
import Wrapper from '@/components/Wrapper';
import ColumnCharts from '@/components/ColumnCharts';
import RadialCharts from '@/components/RadialCharts';
import Card from '@/components/Card';
import TopProducts from '@/components/TopProducts';
import InlineCharts from '@/components/InlineCharts';
import Button from '@/components/Button';
import {
  TotalVisits, TotalSales, TotalMade, OrdersCompleted, ListIcon
} from '@/components/ImagesList';
import classNames from 'classnames/bind';
import styles from '@/styles/Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {

  const cardsItem = [
    {
        title: 'Total Vistits',
        icon: <TotalVisits />,
        quantity: '10.8m',
    },
    {
        title: 'Total Sales',
        icon: <TotalSales />,
        quantity: '100,345',
    },
    {
        title: 'Total Made',
        icon: <TotalMade />,
        quantity: '$200k',
    },
    {
        title: 'Orders Completed',
        icon: <OrdersCompleted />,
        quantity: '98,771',
    },
  ];
  const inlChartsItem = [
    {
        title: 'Women',
        percent: 63,
        color: '#6C6C6C',
    },
    {
        title: 'Men',
        percent: 88,
        color: '#FF6B6B',
    },
    {
        title: 'Kids',
        percent: 38,
        color: '#5F27CD',
    },
];

  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
    <div className={cx('main')}>
      <div className={cx('container')}>
          <ColumnCharts />
          <RadialCharts />
      </div>
      <div className={cx('container')}>
        <div className={cx('products__overview')}>
          <div className={cx('cards')}>
            {
              cardsItem.map((card, i) => (
                <Card 
                  className={cx('card__item')}
                  key={i} 
                  icon={card.icon} 
                  title={card.title} 
                  quantity={card.quantity} 
                />
              ))
            }
          </div>
          <TopProducts />
        </div>
        <div className={cx('stats__overview')}>
          <div className={cx('stats__overview__header')}>
            <div className={cx('stats__overview__title')}>
                <h2>Stats Overview</h2>
                <p>Information about store visits</p>
            </div>
            <div className={cx('stats__overview__selected')}>
                <Button 
                  className={cx('stats__overview__selected-btn')}
                  svg={<ListIcon />}
                />
            </div>
          </div>
          <div className={cx('stats__overview__container')}>
            {
              inlChartsItem.map((item, i) => (
                <InlineCharts key={i} title={item.title} percent={item.percent} color={item.color} />
              ))
            }
          </div>

        </div>
      </div>
    </div>
    </>
  )   
}

export default Home;