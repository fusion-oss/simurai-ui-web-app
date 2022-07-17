import { useEffect, useState } from "react";
import { Panel } from "../../../components/Panel/Panel"
import { DynamicFields } from "./DynamicFields";
import './editor.scss';

export const PayloadEditor: React.FC<any> = (props: any) => {
    const { payload, format } = props;
    const [dynamicFieldsData, setDynamicFieldsData] = useState<any>(new Map());
    const [editedPayload, setEditedPayload] = useState<any>(payload);

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
                    placeholderMap.set(payload.substring(startIndex, i), null);
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

    useEffect(() => {
        setDynamicFieldsData(findIndexes(editedPayload));
    }, [editedPayload])

    const onFieldEdited = (event: any) => {
        dynamicFieldsData.set(event.target.id, event.target.value);
        setEditedPayload(getEditedPayload(payload, dynamicFieldsData));
    }

    const getEditedPayload = (defaultPayload: string, fields: any): string => {
        for (const [key, value] of fields?.entries()) {
            defaultPayload = defaultPayload.replace(getKeyName(key), value);
        }
        return defaultPayload;
    }

    const getKeyName = (key: string) => {
        return "${" + key + "}";
    }

    return <>
        <div className="heading">Payload</div>
        <Panel>
            <div className="sub-panel">
                <div className="sub-heading">Template</div>
                <div>{editedPayload}</div>
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