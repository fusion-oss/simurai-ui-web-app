import './button.scss';
import { ButtonProps, ButtonVariant } from '../Interfaces';

export const Button = (props: ButtonProps) => {
    const { id, variant = ButtonVariant.Primary, onClick, customClass, children } = props;
    return <button id={id} className={`btn ${variant} ${customClass}`} onClick={onClick}>{children}</button>
};
