import './menubar.scss';
export interface MenuBar {
    menus: string[];
    onTabChange: (e: any) => void;
    activeTab: string;
}

export interface Menu {
    menuItem: string;
    onTabChange: (e: any) => void;
    activeTab: string;
}

export const Menu: React.FC<any> = (props: Menu) => {

    const { activeTab, menuItem, onTabChange } = props;
    const onTabClick = (e: any) => {
        onTabChange(e.target.id);
    }

    return <button id={menuItem} className={activeTab === menuItem ? 'menu active' : 'menu'} onClick={onTabClick}>{menuItem}</button>
}

export const MenuBar: React.FC<any> = (props: MenuBar) => {
    const { activeTab, menus, onTabChange } = props;
    return <div className="menubar">{menus?.map((item: string) => <Menu activeTab={activeTab} onTabChange={onTabChange} menuItem={item} />)}</div>
}