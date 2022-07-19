import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { DropdownProps } from "../Interfaces";
import './dropdown.scss';
export const Dropdown = (props: DropdownProps) => {
    const { id, value, onChange, customClass, options, placeholder, disabled } = props;
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const ref: any = useRef(null);

    const onOptionChange = (option: string) => {
        if (value !== option)
            onChange(option);
        setShowOptions(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);


    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current?.contains(event.target)) {
            setShowOptions(false);
        }
    };

    const DropdownOptions = (): JSX.Element => {
        return <div className="dropdown-options">{options?.map((option: string, index: number) => {
            return <div className="dropdown-options-element" id={option} key={index} onClick={() => onOptionChange(option)}>{option}</div>
        })}</div>
    }

    const openOptions = (e: any) => {
        disabled ? e.preventDefault() : setShowOptions(!showOptions);
    }

    const getClassName = (): string => {
        return disabled ? 'dropdown disabled' : "dropdown";
    }

    return <div ref={ref} id={`dropdown-${id}`} className={getClassName()} onClick={openOptions}>
        <div className="dropdown-text">{value ? value : placeholder}</div><FontAwesomeIcon className="dropdown-icon" icon={showOptions ? faCaretUp : faCaretDown} />
        {showOptions ? <DropdownOptions /> : null}
    </div >
}