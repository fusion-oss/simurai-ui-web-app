import { Input } from "../../../components/Input/Input";
import { inputType } from "../../../components/Interfaces";
import './editor.scss';

export const DynamicFields: React.FC<any> = (props: any) => {
    const { placeholderMap, onFieldChange } = props;
    const getPlaceHolder = (trimText: string, key: string) => {
        return key?.replaceAll(trimText, '')
    }
    return <div className="input-container">
        {placeholderMap?.size && Array.from(placeholderMap?.entries())?.map((item: any) => {
            const [key, value] = item;
            return <Input customClass="input"
                value={value}
                id={key}
                name={key}
                placeholder={getPlaceHolder("BODY.",key)}
                onChange={onFieldChange}
                type={inputType.text}
                autoComplete="off" />

        })}
    </div >
}