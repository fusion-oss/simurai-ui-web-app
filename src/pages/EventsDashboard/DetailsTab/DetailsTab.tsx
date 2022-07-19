import './detailsTab.scss';
import { InfoRenderer } from './InfoRenderer';
export const DetailsTab: React.FC<any> = (props: any) => {
    const { eventDetails } = props;

    const sourceData = [
        {
            value: eventDetails?.name,
            key: "Name"
        },
        {
            value: eventDetails?.usage,
            key: "Usage"
        },
        {
            value: eventDetails?.source,
            key: "Source"
        },
        {
            value: eventDetails?.errorQueue, key: "Error Queue"
        }
    ];
    const targetData = [
        {
            key: "Name",
            value: eventDetails?.targetEndpoint?.name
        },
        {
            value: eventDetails?.format,
            key: "Message Format"
        },
        {
            key: "Broker",
            value: eventDetails?.targetEndpoint?.uri
        }
    ];

    return <div className="details-container">
        <div className='template'>
            <div className='heading'>Event Details:</div>
            <InfoRenderer data={sourceData} />
        </div>
        <div className='template'>
            <div className='heading'>Target:</div>
            <InfoRenderer data={targetData} />
        </div>
    </div>
}