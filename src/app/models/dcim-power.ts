/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
export class DcimPower {
    oDataId: string;
    id: string;
    name: string;
    type: string;
    realType: string;

    /*
    Constructs a DCIM Power object from a JSON payload
     */
    constructor(json?: Object) {
        if (json) {
            var keys = Object.keys(json); 
            this.id            = json["Id"];
            this.name          = json["Name"];
            this.type          = json["DCIMPowerType"];
            this.realType      = keys[3];
        }
    }
}
