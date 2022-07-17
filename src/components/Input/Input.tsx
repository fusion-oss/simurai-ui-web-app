import './input.scss';
import { InputProps } from '../Interfaces';

export const Input = (props: InputProps) => {
    const { id, type = "text", onCrossClick, spellCheck = true, value, placeholder, onChange, autoComplete = "off" } = props;
    return (
        <input
            type={type}
            className="input"
            spellCheck={spellCheck}
            value={value}
            id={id}
            name={id}
            placeholder={placeholder}
            onChange={onChange}
            required
            autoComplete={autoComplete} />
    );
};
