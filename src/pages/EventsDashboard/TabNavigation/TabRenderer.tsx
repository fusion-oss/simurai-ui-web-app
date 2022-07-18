import { Tab } from "../../TabConfig";
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
        return <>Details</>
    }
    return null;
}