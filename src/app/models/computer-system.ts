/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
export class ComputerSystem {
    id: string;
    description: string;
    name: string;
    systemType: string;
    assetTag: string;
    manufacturer: string;
    model: string;
    sku: string;
    serialNumber: string;
    partNumber: string;
    uuid: string;
    hostName: string;
    indicatorLed: string;
    powerState: string;
    health: string;
    state: string;

    /*
    Constructs a ComputerSystem from a JSON payload
     */
    constructor(json?: Object) {
        if (json) {
            this.id           = json["Id"];
            this.description  = json["Description"];
            this.name         = json["Name"];
            this.systemType   = json["SystemType"];
            this.assetTag     = json["AssetTag"];
            this.manufacturer = json["Manufacturer"];
            this.model        = json["Model"];
            this.sku          = json["SKU"];
            this.serialNumber = json["SerialNumber"];
            this.partNumber   = json["PartNumber"];
            this.uuid         = json["UUID"];
            this.hostName     = json["HostName"];
            this.indicatorLed = json["IndicatorLED"];
            this.powerState   = json["PowerState"];
            this.health        = json["Status"]["Health"];
            this.state        = json["Status"]["State"];
        }
    }    
}
