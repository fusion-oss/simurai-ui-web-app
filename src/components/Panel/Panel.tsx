import './panel.scss';
export interface Panel {
    children: JSX.Element | any;
    margin?: string;
    height?: string;
    width?: string;
}

export const Panel: React.FC<any> = (props: Panel) => {
    const { children, margin = "0%", height = "5%", width = "auto" } = props;
    return <div className="panel" style={{ margin: margin, height: height, width: width }}>
        {children}
    </div>
}

