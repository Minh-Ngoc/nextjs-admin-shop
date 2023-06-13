import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Images from "../Images";
import Button from "../Button";
import {
    Dashboard, Products, Customers, Orders, Shipments, Transactions, Settings, Logout,
} from '../ImagesList';
import { useState } from "react";

const cx = classNames.bind(styles);

const Sidebar = ({ props }) => {
    const [isActive, setIsActive] = useState('Dashboard');
    const sidebarsItem = [
        {
            name: 'Dashboard',
            icon: Dashboard,
        },
        {
            name: 'Products',
            icon: Products,
        },
        {
            name: 'Customers',
            icon: Customers,
        },
        {
            name: 'Orders',
            icon: Orders,
        },
        {
            name: 'Shipments',
            icon: Shipments,
        },
        {
            name: 'Transactions',
            icon: Transactions,
        },
        {
            name: 'Settings',
            icon: Settings,
        },
        {
            name: 'Logout',
            icon: Logout,
        },
    ]

    return (
        <Wrapper className={'col l-3 ' + cx('sidebar')}>
            <Images className={cx('sidebar__logo')} content='Lisa Admin' />
            <div className={cx('sidebar__container')}>
                {
                    sidebarsItem.map(item => ( 
                        <Button 
                            key={item.name}
                            className={cx('btn', item.name === isActive && 'active')} 
                            svg={<item.icon />} 
                            content={item.name} 
                            onClick={() => {
                                setIsActive(item.name)
                                console.log(isActive)
                            }}
                        /> 
                    ))
                }
            </div>

        </Wrapper>
    )
}

export default Sidebar;