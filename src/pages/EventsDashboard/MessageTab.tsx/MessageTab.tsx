import React from "react";
import { Panel } from "../../../components/Panel/Panel";
import './messageTab.scss';

export const MessageTab: React.FC<any> = () => {
    return <div className="panel-container">
        <div className="heading">Header</div>
        <div className="panel-components">
            <Panel>
                <div className="sub-heading">Template</div>
            </Panel>
            <Panel>
                <div className="sub-heading">Header Template</div>
            </Panel>
        </div>

    </div>
}