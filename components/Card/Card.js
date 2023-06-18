import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import Images from "../Images";

const cx = classNames.bind(styles);

const Card = ({ className, title, icon, src, quantity, ...props }) => {

    return ( 
        <Wrapper className={cx('card', className)} {...props}>
            { icon }
            { src && <Images className={cx('card__image')} src={src} alt='ErrorImage' /> }
            <div className={cx('card__group')}>
                <p className={cx('card__title')}> {title} </p>
                <p className={cx('card__quantity')}> {quantity} </p>
            </div>
        </Wrapper>
     );
}

export default Card;
