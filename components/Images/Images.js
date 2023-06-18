import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Images.module.scss';
import Image from "next/image";

const cx = classNames.bind(styles);

const Images = ({ src, alt, width, height, className, svg, content, ...props }) => {
    return (
        <Wrapper className={cx(className, 'images')} {...props}>
            {
                src ? (
                    <Image 
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                    />
                ) : svg
            }
            { content && ( <span> {content} </span> ) }

        </Wrapper>
    )
}

export default Images;