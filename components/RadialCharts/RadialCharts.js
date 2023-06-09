import { useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './RadialCharts.module.scss';
import Button from '../Button';
import { MoreIcon } from '../ImagesList';

const cx = classNames.bind(styles);

const ColumnCharts = () => {
    const [state, setState] = useState({});



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
        <Wrapper className='row'>
            
        </Wrapper>
    )
}

export default ColumnCharts;