/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
export class DcimPower {
    oDataId: string;
    id: string;
    name: string;
    type: string;
    realType: string;
    health: string;
    state: string;

    /*
    Constructs a DCIM Power object from a JSON payload
     */
    constructor(json?: Object) {
        if (json) {
            var keys = Object.keys(json); 
            this.oDataId       = json["@odata.id"];
            this.id            = json["Id"];
            this.name          = json["Name"];
            this.type          = json["DCIMPowerType"];
            this.realType      = keys[3];
            this.health        = json["Status"]["Health"];
            this.state        = json["Status"]["State"];
        }
    }
}
