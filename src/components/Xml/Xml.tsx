import { XMLViewerProps } from "../Interfaces";
import XMLViewer from 'react-xml-viewer'

export const Xml: React.FC<any> = (props: XMLViewerProps) => {
    const { xml } = props;
    const customTheme = {
        "attributeKeyColor": "#FF0000",
        "attributeValueColor": "#000FF"
    }

    return <> <XMLViewer collapsible ={true} xml={xml} theme={customTheme} /></>
}