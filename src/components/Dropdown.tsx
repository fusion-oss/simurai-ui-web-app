import React from 'react';
import './dropdown.scss';
export const Dropdown = (props: any) => {
    const { options, onChange, value } = props;

    const onOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    const DropdownOptions = () => {
        return options.map((option: string, index: number) => {
            return <option className='dropdown-options' key={index} value={option}>{option}</option>
        })
    }

    return (
        <select name="dropdown" className='dropdown' value={value} onChange={onOptionChange}>
            <DropdownOptions />
        </select>
    );
}