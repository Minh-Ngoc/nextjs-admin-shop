import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { SearchIcon, NotificationIcon, MenuIcon, UserImage, Menu, Close } from '../ImagesList';
import Input from "../Input";
import Images from "../Images";
import { useState } from "react";

const cx = classNames.bind(styles);

const Header = ({ props }) => {
    const [modal, setModal] = useState(false);
    return (
        <Wrapper className={cx('header')}>
            <div className={cx('header__container')}>
                <h1>Overview</h1>

                <Input 
                    svg={<SearchIcon />} 
                    type='text'
                    name='text'
                    label='Search...' 
                    className={cx('header__search')}
                />

                <div className={cx('header__icons')}>
                    <Images alt='ErrorImage' className={cx('header__icon-item')} svg={<MenuIcon />} />
                    <Images alt='ErrorImage' className={cx('header__icon-item', 'notificationIcon')} svg={<NotificationIcon />} />
                    <Images alt='ErrorImage' className={cx('header__icon-item')} src={UserImage} />
                </div>
                <div className={cx('header__menu')} onClick={() => setModal(true)}>
                    <Images alt='ErrorImage' className={cx('header__icon-item')} svg={<Menu />} />
                </div>
                {
                    modal && (
                        <div className={cx('header__overlay')} onClick={e => e.target.className === cx('header__overlay')  && setModal(false)}>
                            <div className={cx('header__menu__container')}>
                                <li>
                                    <Images alt='ErrorImage' className={cx('header__menu-item')}  svg={<Close />} onClick={() => setModal(false)}/>
                                </li>
                                <li>
                                    <Images alt='ErrorImage' className={cx('header__menu-item')} svg={<MenuIcon />} />
                                </li>
                                <li>
                                    <Images alt='ErrorImage' className={cx('header__menu-item', 'notificationIcon')} svg={<NotificationIcon />} />
                                </li>
                                <li>
                                    <Images alt='ErrorImage' className={cx('header__menu-item')} src={UserImage} />
                                </li>
                            </div>
                        </div>
                    )
                }
            </div>
        </Wrapper>
    )
}

export default Header;