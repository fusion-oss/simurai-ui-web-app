import React, { useRef } from "react";
import { Button } from "../../../components/Button/Button";
import { ButtonVariant } from "../../../components/Interfaces";
import { triggerEvent } from "../../../services/EventDashboard";
import { MessageService } from "../../../utilities/Toast/MessageService";
import { EmptyBodyMessage, EmptyHeaderMessage, FailMessage, SuccessMessage } from "../../Constants";
import './messageTab.scss';
import { TemplateEditor } from "./TemplateEditor";
export enum PayloadType {
    Header = "Header",
    Body = "Body"
}
export enum TemplateType {
    JSON = "json",
    XML = "xml",
    TEXT = "text"
}

export const MessageTab: React.FC<any> = (props: any) => {
    const { eventDetails } = props;
    const headerRef = useRef<any>();
    const bodyRef = useRef<any>();

    const onResetClick = () => {
        headerRef?.current?.onReset();
        bodyRef?.current?.onReset();
    }

    const onSendClick = () => {
        const HEADER = validateResponse(headerRef?.current?.getData()) ? headerRef?.current?.getData() : MessageService.showToastMessage(EmptyHeaderMessage);
        const BODY = validateResponse(bodyRef?.current?.getData()) ? bodyRef?.current?.getData() : MessageService.showToastMessage(EmptyBodyMessage);
        if (HEADER && BODY)
            trigger({ HEADER: generateValidResponse(HEADER, "HEADER"), BODY: generateValidResponse(BODY, "BODY"), alias: eventDetails?.alias })
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
            if (response?.status === 200) {
                MessageService.showToastMessage(`${eventDetails?.name} ${SuccessMessage} ${eventDetails?.targetEndpoint?.name}`);
                headerRef?.current?.onReset();
                bodyRef?.current?.onReset();
            } else {
                MessageService.showToastMessage(`${eventDetails?.name} ${FailMessage} ${eventDetails?.targetEndpoint?.name}`);
            }
        }).catch(e => {
            console.error(e);
        })
    }

    const transformData = (data: string) => {
        if (data) {
            const arr = data?.split("");
            let flag = 0, startIndex = 0;

            for (let i = 0, j = i + 1; i < arr?.length - 2; i++, j++) {
                if (flag === 0) {
                    if (arr[i] === '$' && arr[j] === '{' && arr[i - 1] !== "\"" && flag === 0) {
                        startIndex = i;
                        arr?.splice(startIndex, 0, "\"");
                        flag = 1;
                    }
                } else {
                    if (arr[i] === "}") {
                        flag = 0;
                        arr?.splice(i + 1, 0, "\"");
                        startIndex = 0;
                    }
                }
            }
            return arr?.join("");
        }
    }

    const prepareValidJSONFromPayload = (data: string, format: TemplateType | any) => {
        if (data) {
            if (format?.toLowerCase() === TemplateType.JSON) {
                return transformData(data);
            }
            return data;
        }
        return null;
    }


    return <div> <div className="template-container">
        <TemplateEditor title={"Header"} payload={prepareValidJSONFromPayload(eventDetails?.headerTemplate, eventDetails?.format)} format={eventDetails?.format} payloadType={PayloadType.Header} ref={headerRef} />
        <TemplateEditor title={"Payload"} payload={prepareValidJSONFromPayload(eventDetails?.bodyTemplate, eventDetails?.format)} format={eventDetails?.format} payloadType={PayloadType.Body} ref={bodyRef} />
    </div>
        <div className="btn-container">
            <Button id="reset" variant={ButtonVariant.Secondary} onClick={onResetClick}>Reset</Button>
            <Button id="send" variant={ButtonVariant.Primary} onClick={onSendClick}>Send</Button>
        </div>
    </div>
}