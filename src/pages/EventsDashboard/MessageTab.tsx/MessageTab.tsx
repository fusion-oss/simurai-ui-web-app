import React from "react";
import { HeaderEditor } from "./HeaderEditor";
import './messageTab.scss';
import { PayloadEditor } from "./PayloadEditor";

export const MessageTab: React.FC<any> = (props: any) => {
    const { data } = props;

    return <div className="panel-container">
        <HeaderEditor header={data?.header} format={data?.ormat} />
        <PayloadEditor payload={data?.payload} format={data?.format}/>
    </div>
}