import { AxiosError } from "axios";
import React, { useState, useEffect } from "react"
import { fetchEvents, triggerEvent } from "../../services/EventDashboard";
import { _events } from "./data";
import './eventdashboard.scss';
import { EventFilter } from "./EventFIlter";

export const EventDashboard: React.FC<any> = (): JSX.Element => {
    const [eventData, setEventData] = useState<any>();
    const [selectedEventCategory, setSelectedEventCategory] = useState<string | undefined>();
    const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
    const [categories, setCategories] = useState<string[]>([]);
    const [events, setEvents] = useState<any>([]);

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

    const getUniqueCategoriesFromEvents = (_events: any): string[] => {
        return _events ? Array.from(new Set(_events?.map((item: any) => item.category))) : [];
    }

    const onEventChange = (eventName: string) => {
        setSelectedEvent(eventName);
    }

    const onEventCategoryChange = (categoryName: string) => {
        setSelectedEventCategory(categoryName);
    }

    return <div className="event-dashboard-container">
        <EventFilter
            onEventChange={onEventChange}
            onEventCategoryChange={onEventCategoryChange}
            events={events}
            categories={categories}
            selectedCategory={selectedEventCategory}
            selectedEvent={selectedEvent} />
    </div>
}