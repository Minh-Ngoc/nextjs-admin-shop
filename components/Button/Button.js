import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import Image from "next/image";

const cx = classNames.bind(styles);

const Button = ({ type, className, name, content, src, alt, width, height, svg, ...props }) => {
    
    return (
        <Wrapper className={cx(className, 'button')}>
            <button 
                type={type}
                name={name}
                {...props}
            >
                { svg && svg }
                { src && ( <Image width={width} height={height} src={src} alt={alt} /> ) }
                { content && ( <span> { content } </span> ) }
            </button>
        </Wrapper>
    )
}

export default Button;