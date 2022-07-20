import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { DynamicFields } from "./DynamicFields";
import './editor.scss';
import { PayloadType, TemplateType } from "./MessageTab";
import { TemplateViewer } from "./TemplateViewer";

export const TemplateEditor: React.FC<any> = forwardRef((props: any, ref: any) => {
    const { payload, format, title, payloadType } = props;
    const [dynamicFieldsData, setDynamicFieldsData] = useState<any>(new Map());
    let tempMap = new Map(dynamicFieldsData);
    const [editedPayload, setEditedPayload] = useState<any>(payload);

    useImperativeHandle(ref, () => ({
        onReset() {
            tempMap = createPlaceholderMap(payload)
            setDynamicFieldsData(tempMap);
            setEditedPayload(payload);
        },
        getData() {
            return dynamicFieldsData;
        }
    }));

    const createPlaceholderMap = (payload: any) => {
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
                    placeholderMap.set(payload.substring(startIndex, i), "");
                    startIndex = 0;
                }
            }
        }
        return placeholderMap;
    }

    useEffect(() => {
        setDynamicFieldsData(createPlaceholderMap(payload));
        setEditedPayload(payload);
    }, [payload]);

    const onFieldEdited = (event: any) => {
        tempMap.set(event.target.id, event.target.value?.replaceAll("\"",""));
        setDynamicFieldsData(tempMap);
        setEditedPayload(getEditedPayload(payload, tempMap));
    }

    const getEditedPayload = (defaultPayload: string, fields: any): string => {
        for (const [key, value] of fields?.entries()) {
            if (value && value !== "")
                defaultPayload = defaultPayload.replaceAll(getKeyName(key), value);
        }
        return defaultPayload;
    }

    const getKeyName = (key: string) => {
        return "${" + key + "}";
    }

    const onClear = (e: any, key: string) => {
        tempMap.set(key, "");
        setDynamicFieldsData(tempMap);
        setEditedPayload(getEditedPayload(payload, tempMap));
    }

    const getFormat = (type: string) => {
        if (type === PayloadType.Header) {
            return TemplateType.JSON
        } else if (type === PayloadType.Body) {
            return format;
        } else {
            return TemplateType.TEXT;
        }
    }

    return <div className="template">
        <div className="heading">{title}</div>
        <div className="flex">
            <div className="panel panel-primary">
                <div className="sub-panel">
                    <div className="sub-heading">Template</div>
                    <div className="template-viewer scroller">
                        <TemplateViewer format={getFormat(payloadType)} template={editedPayload} />
                    </div>
                </div>
            </div>

            <div className="panel panel-secondary">
                <div className="sub-panel">
                    <div className="sub-heading">Template Parameters</div>
                    <DynamicFields payloadType={payloadType} placeholderMap={dynamicFieldsData} onFieldChange={onFieldEdited} onClear={onClear} />
                </div>
            </div>
        </div>
    </div>
});