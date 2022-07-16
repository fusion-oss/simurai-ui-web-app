import { useEffect, useState } from "react";
import { MenuBar } from "./MenuBar";
import { TabRenderer } from "./TabRenderer";

export interface TabNavigation {
    tabMenus: string[];
}

export const TabNavigation: React.FC<any> = (props: TabNavigation) => {
    const { tabMenus } = props;
    const [activeTab, setActiveTab] = useState<string>(tabMenus?.length ? tabMenus[0] : "");

    const onTabChange = (tabName: string) => {
        setActiveTab(tabName);
    }

    useEffect(() => {

    }, [activeTab])

    return <div>
        <MenuBar menus={tabMenus} onTabChange={onTabChange} />
        <TabRenderer activeTab={activeTab} />
    </div>
}