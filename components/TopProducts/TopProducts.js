import Wrapper from '../Wrapper';
import classNames from 'classnames/bind';
import styles from './TopProducts.module.scss';
import Card from '../Card';
import { TopProduct1, TopProduct2 } from '../ImagesList';

const cx = classNames.bind(styles);

function TopProducts() {
    const ProductsItem = [
        {
            id: 1,
            name: 'Nike Sportswear Futura Luxe',
            image: TopProduct1,
            color: 'Pink',
            orders: 50,
            inventory: 700,
            sale: 1000.6,
            price: 1300.92,
            today: 17000.92,
        },
        {
            id: 2,
            name: 'Basic Dress',
            image: TopProduct2,
            color: 'Green',
            orders: 25,
            inventory: 200,
            sale: 1200.6,
            price: 1500.92,
            today: 12000.82,
        },
    ];

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    return ( 
        <Wrapper className={cx('top__product')}>
            <h1>Top Products</h1>
            {
                ProductsItem.map(product => (
                    <div className={cx('top__product__item')} key={product.id}>
                        <Card 
                            className={cx('item__name')}
                            src={product.image} 
                            title={product.name} 
                            quantity={`${product.color} - ${product.orders} orders`}
                        />
                        <div className={cx('item__group')}>
                            <p>Inventory</p>
                            <p> {product.inventory} </p>
                        </div>
                        <div className={cx('item__group')}>
                            <p>Sale</p>
                            <p> {USDollar.format(product.sale)} </p>
                        </div>
                        <div className={cx('item__group')}>
                            <p>Price</p>
                            <p> {USDollar.format(product.price)} </p>
                        </div>
                        <div className={cx('item__group')}>
                            <p>Today</p>
                            <p> {USDollar.format(product.today)} </p>
                        </div>
                    </div>    
                ))
            }
        </Wrapper>
     );
}

export default TopProducts;