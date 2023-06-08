import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import Header from "../Header";
import Sidebar from "../Sidebar";

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
    return (
        <Wrapper className={cx('layout')}>
            <div className={cx('layout__container')}>
                <Sidebar />
                <div>
                    <Header />
                    {children}
                </div>
            </div>
        </Wrapper>
    )
}

export default Layout;