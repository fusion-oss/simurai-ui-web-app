import { Tab } from "../../TabConfig";
import { MessageTab } from "../MessageTab.tsx/MessageTab";

export interface TabRender {
    activeTab: string;
}

export const TabRenderer: React.FC<any> = (props: TabRender) => {
    const { activeTab } = props;

    if (Tab.Message === activeTab) {
        return <MessageTab />
    } else if (Tab.Details === activeTab) {
        return <>Details</>
    }
    return null;
}