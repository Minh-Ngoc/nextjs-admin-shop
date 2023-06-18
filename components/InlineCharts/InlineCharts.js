import classNames from 'classnames/bind';
import styles from './InlineCharts.module.scss';

const cx = classNames.bind(styles);

const InlineCharts = ({ title, percent, color }) => {
    const styles = {
        width: 100 - (100 - percent) + '%',
        backgroundColor: color,
        // animation: spin 1s linear,
        // @keyframes spin {
        //     0% {
        //         width: 0;
        //     }
        //     100% {
        //         width: percent * 2.9;
        //     }
        // }
    }
    return (
        <div className={cx('inline__chart')}>
            <p className={cx('title')}> {title} </p>
            <div style={styles} className={cx('inline__chart__percent')}></div>
            <p className={cx('number')}> {percent}% </p>
        </div>
    )
}

export default InlineCharts;