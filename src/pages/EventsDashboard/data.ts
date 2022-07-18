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
        "bodyTemplate": "{\"dispenseTerminalId\":\"${BODY.terminalId}\",\"doorId\":\"${BODY.doorId}\",\"motion\":\"${BODY.motion}\"}",
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
        "headerTemplate": "{\"Key1\":\"${HEADER.header1}\"}",
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
        "headerTemplate": "<breakfast_menu><food>        <name>${Header.key1}</name></breakfast_menu>",
        "bodyTemplate": "<breakfast_menu><food>        <name>Belgian Waffles</name>        <price>$5.95</price>        <description>Two of our famous Belgian Waffles with plenty of real maple syrup</description>        <calories>650</calories>        </food>        <food>        <name>${BODY.heelo}</name>        <price>$7.95</price>        <description>Light Belgian waffles covered with strawberries and whipped cream</description>        <calories>900</calories>        </food>        <food>        <name>Berry-Berry Belgian Waffles</name>        <price>$8.95</price>        <description>Light Belgian waffles covered with an assortment of fresh berries and whipped cream</description>        <calories>900</calories>        </food>        <food>        <name>French Toast</name>        <price>$4.50</price>        <description>Thick slices made from our homemade sourdough bread</description>        <calories>600</calories>        </food>        <food>        <name>Homestyle Breakfast</name>        <price>$6.95</price>        <description>Two eggs, bacon or sausage, toast, and our ever-popular hash browns</description>        <calories>950</calories>        </food>        </breakfast_menu>",
        "targetEndpoint": {
            "name": "activeMqEndpoint",
            "type": "QUEUE",
            "uri": "activemq:queue:amqSrc1?connectionFactory=activemq_cf1&disableReplyTo=true&preserveMessageQos=true",
        }
    }
]