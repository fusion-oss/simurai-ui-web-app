import { AxiosError } from "axios";
import React, { useState, useEffect, useRef } from "react"
import { fetchEvents, triggerEvent } from "../../services/EventDashboard";
import { Tab } from "../TabConfig";
import { _events } from "./data";
import './eventdashboard.scss';
import { EventFilter } from "./EventFIlter";
import { TabNavigation } from "./TabNavigation/TabNavigation";

export const EventDashboard: React.FC<any> = (): JSX.Element => {
    const [eventData, setEventData] = useState<any>();
    const [selectedEventCategory, setSelectedEventCategory] = useState<string | undefined>();
    const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
    const [categories, setCategories] = useState<string[]>([]);
    const [events, setEvents] = useState<any>([]);
    const [header, setHeader] = useState<any>();
    const [format, setFormat] = useState<any>();
    const [payload, setPayload] = useState<any>();
    const [eventDetails, setEventDetails] = useState<any>();

    useEffect(() => {
        fetchEvents().then((response: any) => {
            // setEventData(_events);
            setCategories(getUniqueCategoriesFromEvents(_events))
        }).catch((error: AxiosError) => console.error(error));
    }, []);

    useEffect(() => {
        setSelectedEvent(null);
        setEvents(_events?.filter((item: any) => item.category === selectedEventCategory)?.map((item: any) => item.alias));
    }, [selectedEventCategory]);

    useEffect(() => {
        const index = _events.findIndex((item: any) => item.alias === selectedEvent);

        if (index !== -1) {
            setHeader(_events[index]?.headerTemplate ?? null);
            setPayload(_events[index]?.bodyTemplate ?? null);
            setFormat(_events[index]?.format ?? null);
            setEventDetails(_events[index]);

            //     "name": "EXTRACTION_REQUEST",
            // "alias": "EXTRACTION_REQUEST_V1",
            // "format": "JSON",
            // "category": "Inventory",
            // "source": null,
            // "headerTemplate": "{\"Key1\":\"${HEADER.header1}\"}",
            // "bodyTemplate": "{\"dispenseTerminalId\":\"${BODY.terminalId}\",\"containers\":[\"${BODY.containerId1}\",\"${BODY.containerId2}\"]}",
            // "errorQueue": "alert-stage-errors",
            // "usage": "Request customer order totes to be delivered to a terminal for either automated or manual dispense",
            // "targetEndpoint": {
            //     "name": "activeMqEndpoint",
            //     "type": "QUEUE",
            //     "uri": "activemq:queue:amqSrc1?connectionFactory=activemq_cf1&disableReplyTo=true&preserveMessageQos=true"
            // }
        }
    }, [selectedEvent]);

    const getUniqueCategoriesFromEvents = (_events: any): string[] => {
        return _events ? Array.from(new Set(_events?.map((item: any) => item.category))) : [];
    }

    const onEventChange = (eventName: string) => {
        setSelectedEvent(eventName);
    }

    const onEventCategoryChange = (categoryName: string) => {
        setSelectedEventCategory(categoryName);
        setHeader(null);
        setPayload(null);
        setFormat(null);
        setEventDetails(null);
    }

    return <div className="event-dashboard-container">
        <h1>Events</h1>
        <EventFilter
            onEventChange={onEventChange}
            onEventCategoryChange={onEventCategoryChange}
            events={events}
            categories={categories}
            selectedCategory={selectedEventCategory}
            selectedEvent={selectedEvent} />

        {/* {header && payload && <TabNavigation tabMenus={[Tab.Message, Tab.Details]} data={{ header, payload, format, alias: selectedEvent, eventName: selectedEvent, targetName: "kuch toh" }} onResetClick />} */}
        {eventDetails && <TabNavigation tabMenus={[Tab.Message, Tab.Details]} eventDetails={eventDetails} onResetClick />}
    </div>
}