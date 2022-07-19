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
    const [eventDetails, setEventDetails] = useState<any>();

    useEffect(() => {
        fetchEvents().then((response: any) => {
            setEventData(response);
            setCategories(getUniqueCategoriesFromEvents(response))
        }).catch((error: AxiosError) => console.error(error));
    }, []);

    useEffect(() => {
        setSelectedEvent(null);
        setEvents(eventData?.filter((item: any) => item.category === selectedEventCategory)?.map((item: any) => item.alias));
    }, [selectedEventCategory]);

    useEffect(() => {
        const index = eventData?.findIndex((item: any) => item.alias === selectedEvent);

        if (index !== -1 && eventData) {
            setEventDetails(eventData[index]);
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
        setEventDetails(null);
    }

    return <div className="event-dashboard-container">
        <h3>Events</h3>
        <EventFilter
            onEventChange={onEventChange}
            onEventCategoryChange={onEventCategoryChange}
            events={events}
            categories={categories}
            selectedCategory={selectedEventCategory}
            selectedEvent={selectedEvent} />

        {eventDetails && <TabNavigation tabMenus={[Tab.Message, Tab.Details]} eventDetails={eventDetails} onResetClick />}
    </div>
}