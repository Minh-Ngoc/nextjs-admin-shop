import classNames from 'classnames/bind';
import styles from './InlineCharts.module.scss';

const cx = classNames.bind(styles);

const InlineCharts = ({ title, percent, color }) => {
    const styles = {
        width: percent * 2.9,
        backgroundColor: color,
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