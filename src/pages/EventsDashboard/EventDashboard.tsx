import { AxiosError } from "axios";
import React, { useState } from "react"
import Button from "../../components/Button/Button";
import { Dropdown } from "../../components/Dropdown"
import { fetchEvents, triggerEvent } from "../../services/EventDashboard";
import { _events } from "./data";
import './eventdashboard.scss';

export const EventDashboard: React.FC<any> = (): JSX.Element => {
    const [events, setEvents] = useState<any>();
    const [selectedEvent, setSelectedEvent] = useState<string>();
    const [editableHeaderFields, setEditableHeaderFields] = useState<any>();
    const [editablePayloadFields, setEditablePayloadFields] = useState<any>();
    const [headerTemplateJson, setHeaderTemplateJson] = useState<any>();
    const [payloadTemplateJson, setPayloadTemplateJson] = useState<any>();
    const dropdownOptions = events?.map((i: any) => i.alias);

    React.useEffect(() => {
        fetchEvents().then((response: any) => {
            setEvents(response);
        }).catch((error: AxiosError) => console.error(error));
    }, [])

    React.useEffect(() => {
        setEditableHeaderFields(new Map());
        setEditablePayloadFields(new Map());
        // console.log('----', typeof editableHeaderFields, typeof editablePayloadFields);

        // editableHeaderFields.clear();
        // editablePayloadFields.clear();
        setHeaderTemplateJson({});
        setPayloadTemplateJson({});

        if (selectedEvent) {
            console.log(editableHeaderFields, editablePayloadFields, headerTemplateJson, payloadTemplateJson);

            let headerJson: any = events.filter((item: any) => item.alias === selectedEvent)[0]?.headerTemplate;
            headerJson = headerJson?.replaceAll("\r\n", "");
            headerJson = headerJson?.replaceAll("HEADER.", "");

            // const headerJson: any = events.filter((item) => item.name === selectedEvent)[0]?.headerTemplate
            if (headerJson) {
                setEditableHeaderFields(createEditableFieldFromPlaceholders(headerJson));
                setHeaderTemplateJson(JSON.parse(headerJson));
            }

            let payloadJson: any = events.filter((item: any) => item.alias === selectedEvent)[0]?.bodyTemplate;
            payloadJson = payloadJson?.replaceAll("\r\n", "");
            payloadJson = payloadJson?.replaceAll("BODY.", "");

            // const payloadJson: any = events.filter((item) => item.name === selectedEvent)[0]?.bodyTemplate
            if (payloadJson) {
                setEditablePayloadFields(createEditableFieldFromPlaceholders(payloadJson));
                setPayloadTemplateJson(JSON.parse(payloadJson));
            }
        }
    }, [selectedEvent]);


    const onEventChange = (eventName: string) => {
        setSelectedEvent(eventName);
    }

    const createEditableFieldFromPlaceholders = (template: string) => {
        const fields = template?.split(',');
        const editableFields = new Map();
        if (fields?.length) {
            for (let i = 0; i < fields.length; i++) {
                if (fields[i].includes('${')) {
                    let placeholder = fields[i].substring(
                        fields[i].indexOf("${") + 2,
                        fields[i].indexOf("}")
                    );
                    editableFields.set(placeholder, undefined);
                }
            }
        }
        return editableFields;
    }

    const onPayloadFieldEdited = (field: any) => {
        editablePayloadFields?.set(field.id, field.value);
    }

    const onHeaderFieldEdited = (field: any) => {
        editableHeaderFields?.set(field.id, field.value);
    }

    const RenderEditablePayloadPlaceHolderFields = (_editableTemplateFields: any) => {
        if (_editableTemplateFields?.size) {
            return Array.from(_editableTemplateFields.entries())?.map((item: any) => {
                const [key, value] = item;
                return <div className="input-container">
                    <input className="input" value={value}
                        id={key}
                        name={key}
                        placeholder={key}
                        onChange={e => onPayloadFieldEdited(e.target)}
                        required />
                    <button className="btn-cross" id={key} onClick={(e: any) => {
                        _editableTemplateFields?.set(e.target?.id, undefined);
                    }}>x</button>
                </div>
            })
        }
        return null;
    }

    const RenderEditableHeaderPlaceHolderFields = (_editableTemplateFields: any) => {
        if (_editableTemplateFields?.size) {
            return Array.from(_editableTemplateFields.entries())?.map((item: any) => {
                const [key, value] = item;
                return <div className="input-container">
                    <input className="input" value={value}
                        id={key}
                        name={key}
                        placeholder={key}
                        onChange={e => onHeaderFieldEdited(e.target)}
                        required />
                    <button className="btn-cross" id={key} onClick={(e: any) => {
                        _editableTemplateFields?.set(e.target?.id, undefined);
                    }}>x</button>
                </div>
            })
        }
        return null;
    }

    const onSendClick = () => {
        const payload: any = { alias: selectedEvent, HEADER: Object.fromEntries(editableHeaderFields), BODY: Object.fromEntries(editablePayloadFields) }
        triggerEvent(payload);
    }

    // const disableSendButton =
    //     // console.log(!(editableHeaderFields && editablePayloadFields && Object.values(Object.fromEntries(editableHeaderFields))?.some(element => element === undefined) && Object.values(Object.fromEntries(editablePayloadFields))?.some(element => element === undefined)));
    //     //  setHeaderTemplateJson(headerTemplateJson)            
    //     editableHeaderFields && editablePayloadFields && Object.values(Object.fromEntries(editableHeaderFields))?.some(element => element === undefined) &&
    //     Object.values(Object.fromEntries(editablePayloadFields))?.some(element => element === undefined);


    return <div className="event-dashboard-container">
        <div className="event-dropdown">
            <Dropdown value={selectedEvent} options={dropdownOptions} onChange={onEventChange} />
        </div>
        <div className="json-editor">
            <textarea className="json-viewer" id="w3review" name="w3review" value={JSON.stringify(headerTemplateJson)} readOnly></textarea>
            <div className="fields-container">
                {RenderEditableHeaderPlaceHolderFields(editableHeaderFields)}
            </div>
        </div>
        <div className="json-editor">
            <textarea className="json-viewer" id="w3review" name="w3review" value={JSON.stringify(payloadTemplateJson)} readOnly></textarea>
            <div className="fields-container">
                {RenderEditablePayloadPlaceHolderFields(editablePayloadFields)}
            </div>
        </div>
        <button className="btn-primary" onClick={onSendClick}>Send</button>
        <Button id ="ggg" label="bbbb" variant="primary" onClick={() => console.log('click')}/>
    </div>


}