import React from "react";
import './messageTab.scss';
import { PayloadEditor } from "./PayloadEditor";
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

    return <div className="template-container">
        <PayloadEditor title={"Header"} payload={data?.header} format={data?.format} payloadType={PayloadType.Header} />
        <PayloadEditor title={"Payload"} payload={data?.payload} format={data?.format} payloadType={PayloadType.Body} />
    </div>
}