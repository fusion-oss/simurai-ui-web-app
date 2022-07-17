import { useState } from "react";
import { Panel } from "../../../components/Panel/Panel"
import './editor.scss';

export const HeaderEditor: React.FC<any> = (props: any) => {
    const { header } = props;
    const [editedHeader, setEditedHeader] = useState<any>(header);
    return <>
        {/* <div className="heading">Payload</div>
        <Panel>
            <div className="sub-panel">
                <div className="sub-heading">Template</div>
                <div>{header}</div>
            </div>
        </Panel>
        <Panel>
            <div className="sub-panel">
                <div className="sub-heading">Template Parameters</div>
                <div>{header}</div>
            </div>
        </Panel> */}
    </>
}