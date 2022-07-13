export const _events = [
    {
        "name": "DOOR_STATUS_REQUEST",
        "alias": "DOOR_STATUS_REQUEST_V1",
        "format": "JSON",
        "category": "cat1",
        "headerTemplate": "{\"Key1\":\"${HEADER.header1}\"}",
        "bodyTemplate": "{\"dispenseTerminalId\":\"${BODY.terminalId}\"}"
    },
    {
        "name": "DOOR_MOTION",
        "alias": "DOOR_MOTION_V1",
        "format": "XML",
        "category": "cat2",
        "headerTemplate": "{\"Key1\":\"${HEADER.Key1}\",\"Key2\":\"${HEADER.Key2}\"}",
        "bodyTemplate": "{\"dispenseTerminalId\":\"${BODY.terminalId}\",\"doorId\":\"${BODY.doorId}\",\"motion\":\"${BODY.motion}\"}"
    }
]