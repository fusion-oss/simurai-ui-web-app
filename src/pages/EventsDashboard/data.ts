export const _events = [
    {
        "name": "DOOR_STATUS_REQUEST",
        "alias": "DOOR_STATUS_REQUEST_V1",
        "format": "JSON",
        "category": "Automated Dispense",
        "source": "Walmart",
        "headerTemplate": "{\"Key1\":\"${HEADER.header1}\"}",
        "bodyTemplate": "{\"dispenseTerminalId\":\"${BODY.terminalId}\"}",
        "errorQueue": "alert-stage-errors",
        "usage": "Requst Door status",
        "targetEndpoint": {
            "name": "activeMqEndpoint",
            "type": "QUEUE",
            "uri": "activemq:queue:amqSrc1?connectionFactory=activemq_cf1&disableReplyTo=true&preserveMessageQos=true"
        }
    },
    {
        "name": "DOOR_STATUS_REQUEST",
        "alias": "DOOR_STATUS_REQUEST_V2",
        "format": "XML",
        "category": "Automated Dispense",
        "source": "Walmart",
        "headerTemplate": "{\"Key1\":\"${HEADER.header1}\"}",
        "bodyTemplate": "{\"dispenseTerminalId\":\"${BODY.terminalId}\",\"doorId\":\"${BODY.doorId}\"}",
        "errorQueue": null,
        "usage": null,
        "targetEndpoint": {
            "name": "activeMqEndpoint",
            "type": "QUEUE",
            "uri": "activemq:queue:amqSrc1?connectionFactory=activemq_cf1&disableReplyTo=true&preserveMessageQos=true"
        }
    },
    {
        "name": "DOOR_MOTION",
        "alias": "DOOR_MOTION_V1",
        "format": "JSON",
        "category": "Automated Dispense",
        "source": "Walmart",
        "headerTemplate": "{\"Key1\":\"${HEADER.Key1}\",\"Key2\":\"${HEADER.Key2}\"}",
        "bodyTemplate": "{\"batchId\":${BODY.batchId},\"dispenseTerminalId\":\"${BODY.terminalId}\",\"doorId\":\"${BODY.doorId}\",\"containsReturns\":${BODY.containsReturns},\"temperatureZonesForReturns\":[\"${BODY.temperatureZone1}\",\"${BODY.temperatureZone2}\"],\"containers\":[{\"containerId\":\"${BODY.containerId1}\",\"temperatureZone\":\"${BODY.temperatureZone1}\"},{\"containerId\":\"${BODY.containerId2}\",\"temperatureZone\":\"${BODY.temperatureZone2}\"}]}",
        "errorQueue": "alert-stage-errors",
        "usage": "Control the motion of the door",
        "targetEndpoint": {
            "name": "activeMqEndpoint",
            "type": "QUEUE",
            "uri": "activemq:queue:amqSrc1?connectionFactory=activemq_cf1&disableReplyTo=true&preserveMessageQos=true"
        }
    },
    {
        "name": "EXTRACTION_REQUEST",
        "alias": "EXTRACTION_REQUEST_V1",
        "format": "JSON",
        "category": "Inventory",
        "source": null,
        "headerTemplate": "{\"Key1\":\"{HEADER.header1}\"}",
        "bodyTemplate": "{\"dispenseTerminalId\":\"${BODY.terminalId}\",\"containers\":[\"${BODY.containerId1}\",\"${BODY.containerId2}\"]}",
        "errorQueue": "alert-stage-errors",
        "usage": "Request customer order totes to be delivered to a terminal for either automated or manual dispense",
        "targetEndpoint": {
            "name": "activeMqEndpoint",
            "type": "QUEUE",
            "uri": "activemq:queue:amqSrc1?connectionFactory=activemq_cf1&disableReplyTo=true&preserveMessageQos=true"
        }
    },
    {
        "name": "EXTRACTION_REQUEST",
        "alias": "EXTRACTION_REQUEST_V3",
        "format": "xml",
        "source": null,
        "category": "Inventory",
        "errorQueue": "alert-stage-errors",
        "usage": "Request customer order totes to be delivered to a terminal for either automated or manual dispense",
        "headerTemplate": "{\"Key1\":\"${HEADER.header1}\"}",
        "bodyTemplate": "<breakfast_menu><food>   ${BODY.heedloddsafasdf}   ${BODY.heedlodasdfasdfafdads}    ${BODY.heedlodfdd} ${BODY.heedlodeee} ${BODY.heedlod}  ${BODY.heedlos}   ${BODY.heedlo}     <name>Belgian Waffles</name>        <price>${BODY.heelo}</price>        <description>${BODY.heelo}</description>        <calories>${BODY.heelo}</calories>        </food>        <food>        <name>${BODY.heelo}</name>        <price>$7.95</price>        <description>Light Belgian waffles covered with strawberries and whipped cream</description>        <calories>900</calories>        </food>        <food>        <name>Berry-Berry Belgian Waffles</name>        <price>$8.95</price>        <description>Light Belgian waffles covered with an assortment of fresh berries and whipped cream</description>        <calories>900</calories>        </food>        <food>        <name>French Toast</name>        <price>$4.50</price>        <description>Thick slices made from our homemade sourdough bread</description>        <calories>600</calories>        </food>        <food>        <name>Homestyle Breakfast</name>        <price>$6.95</price>        <description>Two eggs, bacon or sausage, toast, and our ever-popular hash browns</description>        <calories>950</calories>        </food>        </breakfast_menu>",
        "targetEndpoint": {
            "name": "activeMqEndpoint",
            "type": "QUEUE",
            "uri": "activemq:queue:amqSrc1?connectionFactory=activemq_cf1&disableReplyTo=true&preserveMessageQos=true",
        }
    }
]