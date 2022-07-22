import ReactJson from 'react-json-view'
import { JsonViewerProps } from "../Interfaces"

export const JSONViewer: React.FC<any> = (props: JsonViewerProps) => {
    const { jsonObj } = props;
    return <ReactJson src={jsonObj} displayDataTypes={false} collapseStringsAfterLength={50} />
}