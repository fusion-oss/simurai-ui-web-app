import { useEffect } from "react";
import { Input } from "../../../components/Input/Input";
import { inputType } from "../../../components/Interfaces";
import './editor.scss';

export const DynamicFields: React.FC<any> = (props: any) => {
    const { placeholderMap, onFieldChange } = props;
    console.log(placeholderMap);

    useEffect(() => {
        console.log(placeholderMap);

    }, [placeholderMap])

    return <div className="input-container">
        {placeholderMap?.size && Array.from(placeholderMap?.entries())?.map((item: any) => {
            const [index, key] = item;
            return <Input customClass="input"
                value={key}
                id={key}
                name={key}
                placeholder={key}
                onChange={onFieldChange}
                type={inputType.text}
                autoComplete="off" />

        })}
    </div >
}