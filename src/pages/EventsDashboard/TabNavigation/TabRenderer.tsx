import { Tab } from "../../TabConfig";
import { DetailsTab } from "../DetailsTab/DetailsTab";
import { MessageTab } from "../MessageTab.tsx/MessageTab";

export interface TabRender {
    activeTab: string;
    eventDetails?: any;
}

export const TabRenderer: React.FC<any> = (props: TabRender) => {
    const { activeTab, eventDetails } = props;

    if (Tab.Message === activeTab) {
        return <MessageTab eventDetails={eventDetails} />
    } else if (Tab.Details === activeTab) {
        return eventDetails ? <DetailsTab eventDetails={eventDetails} /> : null
    }
    return null;
}