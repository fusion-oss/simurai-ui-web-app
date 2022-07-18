import { Tab } from "../../TabConfig";
import { MessageTab } from "../MessageTab.tsx/MessageTab";

export interface TabRender {
    activeTab: string;
    data?: any;
}

export const TabRenderer: React.FC<any> = (props: TabRender) => {
    const { activeTab, data } = props;

    if (Tab.Message === activeTab) {
        return <MessageTab data={data} />
    } else if (Tab.Details === activeTab) {
        return <>Details</>
    }
    return null;
}