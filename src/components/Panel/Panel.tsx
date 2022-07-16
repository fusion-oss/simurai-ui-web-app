import './panel.scss';
export interface Panel {
    children: JSX.Element | any;
}

export const Panel: React.FC<any> = (props: Panel) => {
    const { children } = props;
    return <div className="panel">
        {children}
    </div>
}

