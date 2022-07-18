import './input.scss';
import { InputProps } from '../Interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export const Input = (props: InputProps) => {
    const { id, type = "text", spellCheck = true, value, placeholder, onClear, onChange, autoComplete = "off", customClass } = props;
    const showCrossIcon = (_value: string) => {
        return _value && _value !== "";
    }
    const [showLabel, setShowLabel] = useState(false);

    return (
        <div className='input-container'>
            {showLabel && <label className='input-label'>{placeholder}</label>}
            <input
                type={type}
                className={`input ${customClass}`}
                spellCheck={spellCheck}
                value={value}
                id={id}
                name={id}
                placeholder={placeholder}
                onChange={onChange}
                required
                autoComplete={autoComplete}
                title={placeholder}
            />
            {showCrossIcon(value) && <FontAwesomeIcon icon={faXmark} className="cross-icon" onClick={onClear} />}
        </div>
    );
};
