import { useEffect, useState } from "react";
import { Panel } from "../../../components/Panel/Panel"
import { DynamicFields } from "./DynamicFields";
import './editor.scss';

export const PayloadEditor: React.FC<any> = (props: any) => {
    const { payload, format } = props;
    // const [editedPayload, setEditedPayload] = useState<any>(payload);
    const [dynamicFieldsData, setDynamicFieldsData] = useState<any>(new Map());
    const [editedPayload, setEditedPayload] = useState<any>(payload);
    console.log(payload);

    const findIndexes = (payload: any) => {
        let flag = 0, startIndex = 0;
        const placeholderMap = new Map();
        for (let i = 0, j = i + 1; i < payload?.length - 2; i++, j++) {
            if (flag === 0) {
                if (payload[i] === '$' && payload[j] === '{' && flag === 0) {
                    startIndex = i + 2;
                    flag = 1;
                }
            } else {
                if (payload[i] === "}") {
                    flag = 0;
                    placeholderMap.set(startIndex, payload.substring(startIndex, i));
                    startIndex = 0;
                }
            }
        }
        return placeholderMap;
    }

    useEffect(() => {
        setDynamicFieldsData(findIndexes(payload));
        setEditedPayload(payload);
    }, [payload]);

    const onFieldEdited = (event: any) => {
        // console.log(event.target.id, event.target.value);
        // dynamicFieldsData.set(event.target.id, event.target.value);
        // setDynamicFieldsData();

        // console.log(editedPayload,getKeyName(event.target.id));

        let a = editedPayload.replace(getKeyName(event.target.id), event.target.value)
        setEditedPayload(editedPayload);

    }

    const getKeyName = (key: string) => {
        return "${" + key + "}";
    }

    return <>
        <div className="heading">Payload</div>
        <Panel>
            <div className="sub-panel">
                <div className="sub-heading">Template</div>
                <div>{payload}</div>
            </div>
        </Panel>
        <Panel>
            <div className="sub-panel">
                <div className="sub-heading">Template Parameters</div>
                <div className="input-container">
                    <DynamicFields placeholderMap={dynamicFieldsData} onFieldChange={onFieldEdited} />
                </div>
            </div>
        </Panel>
    </>
}