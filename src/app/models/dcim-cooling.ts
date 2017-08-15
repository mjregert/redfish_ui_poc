/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
export class DcimCooling {
    oDataId: string;
    id: string;
    name: string;
    type: string;
    realType: string;
    health: string;
    state: string;

    /*
    Constructs a DCIM Cooling object from a JSON payload
     */
    constructor(json?: Object) {
        if (json) {
            var keys = Object.keys(json); 
            this.oDataId       = json["@odata.id"];
            this.id            = json["Id"];
            this.name          = json["Name"];
            this.type          = json["DCIMCoolingType"];
            this.realType      = keys[3];
            this.health        = json["Status"]["Health"];
            this.state        = json["Status"]["State"];
        }
    }
}
