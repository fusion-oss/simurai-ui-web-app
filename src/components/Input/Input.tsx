import './input.scss';
import { InputProps } from '../Interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const Input = (props: InputProps) => {
    const { id, type = "text", spellCheck = true, value, placeholder, onClear, onChange, autoComplete = "off", customClass } = props;
    const showCrossIcon = (_value: string) => {
        return _value && _value !== "";
    }

    const isValidInput = (e: any) => {
        if (e?.keyCode === 222)
            e.preventDefault()
    }

    return (
        <div className={`input-container ${customClass}`}>
            <input
                type={type}
                className={`input`}
                spellCheck={spellCheck}
                value={value}
                id={id}
                name={id}
                placeholder={placeholder}
                onChange={onChange}
                required
                autoComplete={autoComplete}
                title={placeholder}
                onKeyDown={isValidInput}
            />
            {showCrossIcon(value) && <FontAwesomeIcon icon={faXmark} className="cross-icon" onClick={onClear} />}
        </div>
    );
};
