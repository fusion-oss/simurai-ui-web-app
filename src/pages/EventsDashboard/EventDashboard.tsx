import { AxiosError } from "axios";
import React, { useState } from "react"
import { Dropdown } from "../../components/Dropdown"
import { fetchEvents, triggerEvent } from "../../services/EventDashboard";
import { _events } from "./data";
import './eventdashboard.scss';

export const EventDashboard: React.FC<any> = (): JSX.Element => {
    const [events, setEvents] = useState<any>();
    const [category, setCategory] = useState<any>();
    const [selectedCategory, setSelectedCategory] = useState<any>();
    const [dropdownEventsOptions, setDropdownEventsOptions] = useState<any>([]);
    const [dropdownCategoryOptions, setDropdownCategoryOptions] = useState<any>([]);
    const [selectedEvent, setSelectedEvent] = useState<any>();
    const [editableHeaderFields, setEditableHeaderFields] = useState<any>();
    const [editablePayloadFields, setEditablePayloadFields] = useState<any>();
    const [headerTemplateJson, setHeaderTemplateJson] = useState<any>();
    const [payloadTemplateJson, setPayloadTemplateJson] = useState<any>();
    const [obj, setObj] = useState<any>();


    // new 
    const [eventDataByCategory, setEventDataByCategory] = useState<any>();
    const [categoryOptions, setCategoryOptions] = useState<any>([]);


    React.useEffect(() => {
        fetchEvents().then((response: any) => {
            const _eventDataByCategory: any = {};
            for (let i = 0; i < response?.length; i++) {
                if (response[i].category in _eventDataByCategory)
                    _eventDataByCategory[response[i].category]?.events?.push(response[i].alias);
                else {
                    _eventDataByCategory[response[i].category] = { events: [] }
                    _eventDataByCategory[response[i].category]?.events?.push(response[i].alias);
                }
            }
            setEventDataByCategory(_eventDataByCategory);
            setEvents(response);
        }).catch((error: AxiosError) => console.error(error));
    }, [])

    React.useEffect(() => {
        setCategoryOptions(eventDataByCategory && (selectedCategory in eventDataByCategory) ? eventDataByCategory[selectedCategory]?.events : []);
    }, [selectedCategory])

    React.useEffect(() => {
        if (selectedEvent) {
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

            //new
            const { name, alias, format, category, headerTemplate, bodyTemplate } = events.filter((item: any) => item.alias === selectedEvent)[0];
            let h: any = JSON.parse(JSON.stringify(payloadJson))
            let x: any = [];
            for (let key in h) {
                let c: any = {};
                if (h.hasOwnProperty(key)) {
                    c.key = key;
                    c.placeholder = h[key].substring(h[key].indexOf("${") + 2, h[key].indexOf("}"));
                    c.value = undefined;
                    x.push(c);
                }
            }

            let a: any = JSON.parse(JSON.stringify(Object.assign({}, { name, alias, format, category, headerTemplate: JSON.parse(headerTemplate), bodyTemplate: JSON.parse(bodyTemplate), editedHeader: {}, editedPayload: x })))
            setObj(a);
        }
    }, [selectedEvent]);


    const onEventChange = (eventName: string) => {
        setSelectedEvent(eventName);
    }

    const onCategoryChange = (categoryName: string) => {
        setSelectedCategory(categoryName);
        setSelectedEvent(null);
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
        // setEditablePayloadFields({ ...editablePayloadFields })
        updateJsonValue(editablePayloadFields, payloadTemplateJson, field.id);

        //new 
        // const index = obj?.editedPayload?.findIndex((item: any) => item.placeholder === field.id);
        // if (index !== -1) {
        //     obj.editedPayload[index].value = field.value;
        //     setObj({ ...obj });
        // }
    }


    const getKeyByValue = (object: any, value: any) => {
        return Object.keys(object).find(key => object[key] === value);
    }

    const updateJsonValue = (editableFields: any, payloadJson: any, key: string) => {
        // console.log(key, getKeyByValue(payloadJson[key], key));
        payloadJson[key] = editableFields.get(key);
        setPayloadTemplateJson(payloadTemplateJson)

        //new
        const a: any = Object.assign({}, obj);
    }

    const onHeaderFieldEdited = (field: any) => {
        editableHeaderFields?.set(field.id, field.value);
    }

    const RenderEditablePayloadPlaceHolderFields: React.FC<any> = (): any => {
        return editablePayloadFields?.size && Array.from(editablePayloadFields?.entries())?.map((item: any) => {
            const [key, value] = item;
            return <div className="input-container">
                <input className="input" value={value}
                    id={key}
                    name={key}
                    placeholder={key}
                    onChange={e => onPayloadFieldEdited(e.target)}
                    required
                    autoComplete="off" />

            </div>;
        })
    }

    const RenderEditableHeaderPlaceHolderFields: React.FC<any> = (): any => {
        return editableHeaderFields?.size && Array.from(editableHeaderFields?.entries())?.map((item: any) => {
            const [key, value] = item;
            return <div className="input-container">
                <input className="input" value={value}
                    id={key}
                    name={key}
                    placeholder={key}
                    onChange={e => onHeaderFieldEdited(e.target)}
                    required
                    autoComplete="off" />

            </div>
        })
    }

    const onSendClick = () => {
        const payload: any = { alias: selectedEvent, HEADER: Object.fromEntries(editableHeaderFields), BODY: Object.fromEntries(editablePayloadFields) }
        triggerEvent(payload);
    }



    // const disableSendButton = editableHeaderFields && editablePayloadFields && Object.values(Object.fromEntries(editableHeaderFields))?.some(element => element === undefined) &&
    //     Object.values(Object.fromEntries(editablePayloadFields))?.some(element => element === undefined);

    return <div className="event-dashboard-container">
        <div className="heading">Events</div>
        <div className="event-dropdown">
            <Dropdown id="category" value={selectedCategory} options={(eventDataByCategory && Object.keys(eventDataByCategory)) ?? []} onChange={onCategoryChange} defaultOption="Select event category" />
            <Dropdown id={selectedCategory} value={selectedEvent} options={categoryOptions} onChange={onEventChange} defaultOption="Select event" />
        </div>
        {headerTemplateJson && <> <div className="heading">Header</div>
            <div className="json-editor">
                <textarea className="json-viewer" id="headers" name="headers" value={JSON.stringify(headerTemplateJson)} readOnly></textarea>
                <div className="fields-container">
                    <RenderEditableHeaderPlaceHolderFields />
                </div>
            </div>
        </>}
        {payloadTemplateJson && <><div className="heading">Payload</div>
            <div className="json-editor">
                <textarea className="json-viewer" id="payload" name="payload" value={JSON.stringify(payloadTemplateJson)} readOnly></textarea>
                <div className="fields-container">
                    {/* {RenderEditablePayloadPlaceHolderFields(editablePayloadFields)} */}
                    <RenderEditablePayloadPlaceHolderFields />
                </div>
            </div>
        </>}
        <div className="btn-container">
            <button className="btn btn-primary" onClick={onSendClick}>Send</button>
        </div>
    </div>
}