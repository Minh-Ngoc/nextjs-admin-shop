import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { SearchIcon, NotificationIcon, MenuIcon, UserImage } from '../ImagesList';
import Input from "../Input";
import Images from "../Images";

const cx = classNames.bind(styles);

const Header = ({ props }) => {

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
                    <Images className={cx('header__icon-item')} svg={<MenuIcon />} />
                    <Images className={cx('header__icon-item', 'notificationIcon')} svg={<NotificationIcon />} />
                    <Images className={cx('header__icon-item')} src={UserImage} />
                </div>
            </div>
        </Wrapper>
    )
}

export default Header;