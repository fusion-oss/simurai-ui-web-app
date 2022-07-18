export const _events = [
    {
        "name": "DOOR_STATUS_REQUEST", "alias": "DOOR_STATUS_REQUEST_V1", "format": "JSON", "category": "Automated Dispense", "headerTemplate": "{\"Key1\":\"${HEADER.header1}\"}", "bodyTemplate": "{\"dispenseTerminalId\":\"${BODY.terminalId}\"}"
    }, {
        "name": "DOOR_STATUS_REQUEST", "alias": "DOOR_STATUS_REQUEST_V2", "format": "XML", "category": "Automated Dispense", "headerTemplate": "{\"Key1\":\"${HEADER.header1}\"}", "bodyTemplate": "{\"dispenseTerminalId\":\"${BODY.terminalId}\",\"doorId\":\"${BODY.doorId}\"}"
    }, {
        "name": "DOOR_MOTION", "alias": "DOOR_MOTION_V1", "format": "JSON", "category": "Automated Dispense", "headerTemplate": "{\"Key1\":\"${HEADER.Key1}\",\"Key2\":\"${HEADER.Key2}\"}", "bodyTemplate": "{\"dispenseTerminalId\":\"${BODY.terminalId}\",\"doorId\":\"${BODY.doorId}\",\"motion\":\"${BODY.motion}\"}"
    },
    {
        "name": "EXTRACTION_REQUEST",
        "alias": "EXTRACTION_REQUEST_V1",
        "format": "JSON",
        "category": "Inventory",
        "headerTemplate": "{\"Key1\":\"${HEADER.header1}\"}", "bodyTemplate": "{\"dispenseTerminalId\":\"${BODY.terminalId}\",\"containers\":[\"${BODY.containerId1}\",\"${BODY.containerId2}\"]}"
    },
    {
        "name": "EXTRACTION_REQUEST",
        "alias": "EXTRACTION_REQUEST_V3",
        "format": "xml",
        "category": "Inventory",
        "headerTemplate": "{\"Key1\":\"${HEADER.header1}\"}",
        "bodyTemplate": "${BODY.terminalId}<breakfast_menu> ${BODY.terminalId}       <food>        <name>Belgian Waffles</name>  ${BODY.terminalId}      <price>$5.95</price>    ${BODY.terminalId}    <description>Two of our famous Belgian Waffles with plenty of real maple syrup</description>        <calories>650</calories>        </food>  ${BODY.terminalId}      <food>        <name>Strawberry Belgian Waffles</name>        <price>$7.95</price>        <description>Light Belgian waffles covered with strawberries and whipped cream</description>        <calories>900</calories>        </food>        <food>        <name>Berry-Berry Belgian Waffles</name>        <price>$8.95</price>        <description>Light Belgian waffles covered with an assortment of fresh berries and whipped cream</description>        <calories>900</calories>        </food>        <food>        <name>French Toast</name>        <price>$4.50</price>        <description>Thick slices made from our homemade sourdough bread</description>        <calories>600</calories>        </food>        <food>        <name>Homestyle Breakfast</name>        <price>$6.95</price>        <description>Two eggs, bacon or sausage, toast, and our ever-popular hash browns</description>        <calories>950</calories>        </food>        </breakfast_menu>"
    }


]