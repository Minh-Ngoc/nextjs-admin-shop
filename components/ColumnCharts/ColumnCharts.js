import { useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './ColumnCharts.module.scss';
import Button from '../Button';
import { MoreIcon } from '../ImagesList';

const cx = classNames.bind(styles);

const ColumnCharts = () => {
    const [state, setState] = useState({});

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    useEffect(() => {
        setState({
            month: [
                {
                    name: 'Jan',
                    total: 0,                   
                    quantity: 30,
                },
                {
                    name: 'Feb',
                    total: 40,
                    quantity: 50,
                },
                {
                    name: 'Mar',
                    total: 40,
                    quantity: 50,
                },
                {
                    name: 'Apr',
                    total: 60,
                    quantity: 70,
                },
                {
                    name: 'May',
                    total: 30,
                    quantity: 40,
                },
                {
                    name: 'Jun',
                    total: 80,
                    quantity: 90,
                },
                {
                    name: 'Jul',
                    total: 45,
                    quantity: 55,
                },
                {
                    name: 'Aug',
                    total: 35,
                    quantity: 45,
                },
                {
                    name: 'Sep',
                    total: 25,
                    quantity: 35,
                },
                {
                    name: 'Oct',
                    total: 35,
                    quantity: 50,
                },
                {
                    name: 'Nov',
                    total: 20,
                    quantity: 30,
                },
                {
                    name: 'Dec',
                    total: 10,
                    quantity: 20,
                },
            ],
            totalPrice: 980273,
        });
    }, [])

    return (
        <div className={cx('column__chart')}>
            <div className={cx('column__chart__header')}>
                <div className={cx('column__chart__title')}>
                    <h3>Total Revenue</h3>
                    <h2> {USDollar.format(state.totalPrice)} </h2>
                </div>
                <div className={cx('column__chart__selected')}>
                    <Button 
                        className={cx('column__chart__selected-btn')}
                        content='This Year'
                        svg={<MoreIcon />}
                    />
                </div>
            </div>
            <div className={cx('column__chart__container')}>
                {
                    state.month?.map((month, i) => (
                        <div key={i} className={cx('column__chart__item')}>
                            <div className={cx('column__chart__item__group')}>
                                { month.total !== 0 ? <div style={{ height: month.total * 4 }} className={cx('column__chart__item__col-1')}></div> : '' }
                                { month.quantity !== 0 ? <div style={{ height: month.quantity * 4 }} className={cx('column__chart__item__col-2')}></div> : '' }
                            </div>
                            <div className={cx('column__chart__item__label')}>
                                { month.name }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ColumnCharts;