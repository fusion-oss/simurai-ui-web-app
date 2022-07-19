import { Input } from "../../../components/Input/Input";
import { inputType } from "../../../components/Interfaces";
import './editor.scss';

export const DynamicFields: React.FC<any> = (props: any) => {
    const { placeholderMap, onFieldChange, payloadType, onClear } = props;
    const getPlaceHolder = (trimText: string, key: string) => {
        return key?.replaceAll(trimText, '')
    }

    return <div className="field-container scroller">
        {placeholderMap?.size && Array.from(placeholderMap?.entries())?.map((item: any) => {
            const [key, value] = item;
            return <Input customClass="dynamic-input"
                value={value}
                id={key}
                name={key}
                placeholder={getPlaceHolder(`${payloadType?.toUpperCase()}.`, key)}
                onChange={onFieldChange}
                type={inputType.text}
                autoComplete="off"
                onClear={(e) => onClear(e, key)}
            />
        })}
    </div >
}