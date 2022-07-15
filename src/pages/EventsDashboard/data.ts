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
    }]