import { useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './RadialCharts.module.scss';
import Button from '../Button';
import { ListIcon } from '../ImagesList';

const cx = classNames.bind(styles);

const ColumnCharts = () => {
    const [state, setState] = useState({});

    useEffect(() => {
        setState({
            month: [
                {
                    name: 'Current Customers',
                    total: 85,                   
                },
                {
                    name: 'New Customers',
                    total: 66,
                },
                {
                    name: 'Target Customers',
                    total: 90,
                },
                {
                    name: 'Retarget Customers',
                    total: 30,
                },
            ],
        });
    }, [])

    return (
        <Wrapper className={'col l-3 ' + cx('radial__charts')}>
            <div className={cx('radial__charts__header')}>
                <div className={cx('radial__charts__title')}>
                    <h2>Customers</h2>
                    <p>Information About your Customers</p>
                </div>
                <div className={cx('radial__charts__selected')}>
                    <Button 
                        className={cx('radial__charts__selected-btn')}
                        svg={<ListIcon />}
                    />
                </div>
            </div>
            <div className={cx('radial__charts__container')}>
                {
                    state.month?.map(month => (
                        <div className={cx('radial__charts__item')}>
                            <div className={cx('radial__charts__item__group')}>
                                { month.total !== 0 ? <div style={{ height: month.total * 4 }} className={cx('radial__charts__item__col-1')}></div> : '' }
                                { month.quantity !== 0 ? <div style={{ height: month.quantity * 4 }} className={cx('radial__charts__item__col-2')}></div> : '' }
                            </div>
                            <div className={cx('radial__charts__item__label')}>
                                { month.name }
                            </div>
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default ColumnCharts;