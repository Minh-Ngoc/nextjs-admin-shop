import Wrapper from "../Wrapper";
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const Input = ({ className, classIp, text = 'text', name, value, placeholder, label, classLabel, svg, ...props}) => {
    return (
        <Wrapper className={cx(className, 'input__group')}>
            <input 
                required="" 
                className={classIp}
                type={text} 
                name={name} 
                value={value} 
                placeholder={placeholder} 
                {...props} 
            />
            { svg }
            { label && ( <label htmlFor={name} className={cx(classLabel)}> {label} </label> ) }
        </Wrapper>
    )
}

export default Input;