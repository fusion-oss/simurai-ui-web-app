import { JSONViewer } from '../../../components/JSONViewer/JSONViewer';
import { Xml } from '../../../components/Xml/Xml';

enum TemplateFormat {
    json = 'json',
    xml = 'xml',
}
export interface TemplateViewerProps {
    format: string,
    template: string;
}
export const TemplateViewer: React.FC<any> = (props: TemplateViewerProps) => {
    const { format, template } = props;

    if (format?.toLowerCase() === TemplateFormat.json) {

        try {
            const json = JSON.parse(template);
            return <JSONViewer jsonObj={json} />
        } catch (e) {
            console.error('invalid json');
            return null;
        }
    } else if (format?.toLowerCase() === TemplateFormat.xml) {
        return <Xml xml={template} />
    }
    return <div>{template}</div>;
}