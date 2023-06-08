import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { SearchIcon, NotificationIcon, MenuIcon } from '../Icons';
import Input from "../Input";
import { useState } from "react";

const cx = classNames.bind(styles);

const Header = ({ props }) => {
    return (
        <Wrapper className={cx('header')}>
            <div className={cx('header__container')}>
                <h1>Overview</h1>

                <Input 
                    svg={<SearchIcon />} 
                    label='Search...' 
                    classLabel={cx('label__search')}
                />

                <div className={cx('header__icons')}>

                </div>
            </div>
        </Wrapper>
    )
}

export default Header;