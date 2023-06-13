import { useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './RadialCharts.module.scss';
import Button from '../Button';
import { ListIcon } from '../ImagesList';
import Pie from '../Pie';

const cx = classNames.bind(styles);



const RadialCharts = () => {
    const [state, setState] = useState({});

    useEffect(() => {
        setState({
            customers: [
                {
                    name: 'Current Customers',
                    percent: 85,   
                    fill: '#5F27CD'                
                },
                {
                    name: 'New Customers',
                    percent: 66,
                    fill: '#6C6C6C',
                },
                {
                    name: 'Target Customers',
                    percent: 90,
                    fill: '#FF8918',
                },
                {
                    name: 'Retarget Customers',
                    percent: 30,
                    fill: '#FF6F61',
                },
            ],
        });
    }, [])

    return (
        <Wrapper className={cx('radial__chart')}>
            <div className={cx('radial__chart__header')}>
                <div className={cx('radial__chart__title')}>
                    <h2>Customers</h2>
                    <p>Information About your Customers</p>
                </div>
                <div className={cx('radial__chart__selected')}>
                    <Button 
                        className={cx('radial__chart__selected-btn')}
                        svg={<ListIcon />}
                    />
                </div>
            </div>
            <div className={cx('radial__chart__container')}>
                {
                    state.customers?.map((customer, i) => (
                        <div key={i} className={cx('radial__chart__item')}>
                            <div className={cx('radial__chart__item__group')}>
                            <Pie 
                                percentage={customer.percent} 
                                colour={customer.fill} 
                            />
                            </div>
                            <div className={cx('radial__chart__item__label')}>
                                { customer.name }
                            </div>
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default RadialCharts;