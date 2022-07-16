import './menubar.scss';
export interface MenuBar {
    menus: string[];
    onTabChange: (e: any) => void;
}

export interface Menu {
    menuItem: string;
    onTabChange: (e: any) => void;
}

export const Menu: React.FC<any> = (props: Menu) => {
    const { menuItem, onTabChange } = props;
    const onTabClick = (e: any) => {
        onTabChange(e.target.id);
    }

    return <button id={menuItem} className='menu' onClick={onTabClick}>{menuItem}</button>
}

export const MenuBar: React.FC<any> = (props: MenuBar) => {
    const { menus, onTabChange } = props;
    return <div className="menubar">{menus?.map((item: string) => <Menu onTabChange={onTabChange} menuItem={item} />)}</div>
}