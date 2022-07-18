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
    

    useEffect(() => {
        fetchEvents().then((response: any) => {
            setEventData(_events);
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
        setFormat(null)
    }

    const onSendClick = (e: any) => {

    }

    const onResetClick = (e: any) => {

    }

    return <div className="event-dashboard-container">
        <EventFilter
            onEventChange={onEventChange}
            onEventCategoryChange={onEventCategoryChange}
            events={events}
            categories={categories}
            selectedCategory={selectedEventCategory}
            selectedEvent={selectedEvent} />

        {header && payload && <> <TabNavigation tabMenus={[Tab.Message, Tab.Details]} data={{ header, payload, format }} onResetClick />
            <div className="btn-container">
                <button id="reset" className="btn btn-secondary" onClick={onResetClick}>Reset</button>
                <button id="send" className="btn btn-primary" onClick={onSendClick}>Send</button>
            </div>
        </>}
    </div>
}