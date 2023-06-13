import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import Header from "../Header";
import Sidebar from "../Sidebar";

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
    return (
        <Wrapper className={cx('layout')}>
            <div className={'grid wide ' + cx('layout__container')}>
                <div className='row'>
                    <Sidebar />
                    <div className={'col l-9 l-o-3 ' + cx('layout__main')}>
                        <Header />
                        {children}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Layout;