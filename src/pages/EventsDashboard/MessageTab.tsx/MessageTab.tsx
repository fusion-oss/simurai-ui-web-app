import React, { useRef } from "react";
import { triggerEvent } from "../../../services/EventDashboard";
import './messageTab.scss';
import { TemplateEditor } from "./TemplateEditor";
export enum PayloadType {
    Header = "Header",
    Body = "Body"
}
export enum TemplateType {
    Header = "Header",
    Body = "Body"
}

export const MessageTab: React.FC<any> = (props: any) => {
    const { data } = props;
    const headerRef = useRef<any>();
    const bodyRef = useRef<any>();

    const onResetClick = () => {
        headerRef?.current?.onReset();
        bodyRef?.current?.onReset();
    }

    const onSendClick = () => {
        const HEADER = validateResponse(headerRef?.current?.getData()) ? headerRef?.current?.getData() : console.log('Header Field is empty');
        const BODY = validateResponse(bodyRef?.current?.getData()) ? bodyRef?.current?.getData() : console.log('Body Field is empty');
        if (HEADER && BODY)
            trigger({ HEADER: generateValidResponse(HEADER, "HEADER"), BODY: generateValidResponse(BODY, "BODY"), alias: data?.alias })
    }

    const isFieldEmpty = (list: string[]): boolean => {
        for (const value of list) {
            if (value === null || value === '') {
                return true;
            }
        }
        return false;
    }

    const validateResponse = (payloadMap: any): boolean => {
        return !isFieldEmpty(Array.from(payloadMap?.values()))
    }

    const generateValidResponse = (data: any, type: string) => {
        const obj = getObjectfromMap(data);
        return JSON.parse(JSON.stringify(obj)?.replaceAll(`${type}.`, ''));
    }

    const getObjectfromMap = (map: any) => {
        return Object.fromEntries(map);
    }

    const trigger = (payload: any) => {
        triggerEvent(payload).then((response: any) => {
            console.log(response);
        }).catch(e => {
            console.log(e);
        })
    }

    return <div className="template-container">
        <TemplateEditor title={"Header"} payload={data?.header} format={data?.format} payloadType={PayloadType.Header} ref={headerRef} />
        <TemplateEditor title={"Payload"} payload={data?.payload} format={data?.format} payloadType={PayloadType.Body} ref={bodyRef} />
        <div className="btn-container">
            <button id="reset" className="btn btn-secondary" onClick={onResetClick}>Reset</button>
            <button id="send" className="btn btn-primary" onClick={onSendClick}>Send</button>
        </div>
    </div>
}