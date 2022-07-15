import { Dropdown } from "../../components/Dropdown/Dropdown";
import './eventdashboard.scss';
export interface EventFilter {
    onEventChange: (data: string) => void;
    onEventCategoryChange: (data: string) => void;
    categories: string[];
    events: string[];
    selectedCategory: string | undefined;
    selectedEvent: string | null;
}
export const EventFilter = (props: EventFilter) => {
    const { onEventChange, onEventCategoryChange, categories, events, selectedCategory, selectedEvent } = props;

    return <div className="event-dropdown">
        <Dropdown placeholder="Select Event Category" value={selectedCategory} options={categories} onChange={onEventCategoryChange} id={"category"} />
        <Dropdown disabled={!selectedCategory} placeholder="Select Event" value={selectedEvent} options={events} onChange={onEventChange} id={"event"} />
    </div>
}