import './EventDashboard.scss';
import React from 'react';
export const TemplateEditor: any = (props: any): any => {
    // const { heading } = props;
    // const [editableTemplateFields, setEditableTemplateFields] = useState<any>();
    // const [templateJson, setTemplateJson] = useState<any>();
    // const dropdownOptions = events.map(i => i.name);

    // const RenderEditablePlaceHolderFields = (_editableTemplateFields: any) => {
    //     if (_editableTemplateFields?.size) {
    //         return Array.from(_editableTemplateFields.entries())?.map((item: any) => {
    //             const [key, value] = item;
    //             return <div className="input-container">
    //                 <input className="input" value={value}
    //                     id={key}
    //                     name={key}
    //                     placeholder={key}
    //                     onChange={e => onFieldEdited(e.target)} />
    //                 <button className="btn-cross" id={key} onClick={(e: any) => {
    //                     _editableTemplateFields?.set(e.target?.id, undefined);
    //                     setTemplateJson(JSON.stringify(Object.fromEntries(_editableTemplateFields)))
    //                     console.log(_editableTemplateFields, templateJson);

    //                 }}>x</button>
    //             </div>
    //         })
    //     }
    //     return null;
    // }
    return <>
        {/* <h4>{heading}</h4>
        <div>
            <div className="json-editor">

                <textarea className="json-viewer" id="w3review" name="w3review" value={JSON.stringify(templateJson)} readOnly></textarea>

            </div>
            <div className="fields-container">
                {RenderEditablePlaceHolderFields(editableTemplateFields)}
            </div>
        </div>
    </div> */}
    </>
}