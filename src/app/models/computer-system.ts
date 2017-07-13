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
    powerState: string;

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
            this.serialNumber = json["SerialNumber"];
            this.model        = json["Model"];
            this.powerState   = json["PowerState"];
        }
    }    
}
