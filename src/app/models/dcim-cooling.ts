/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
export class DcimCooling {
    oDataId: string;
    id: string;
    name: string;
    type: string;
    realType: string;

    /*
    Constructs a DCIM Cooling object from a JSON payload
     */
    constructor(json?: Object) {
        if (json) {
            var keys = Object.keys(json); 
            this.id            = json["Id"];
            this.name          = json["Name"];
            this.type          = json["DCIMCoolingType"];
            this.realType      = keys[3];
        }
    }
}
