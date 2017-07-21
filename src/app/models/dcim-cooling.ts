/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
export class DcimCooling {
    id: string;
    name: string;
    type: string;
//    status: {
//        state: string;
//        health: string;
//    };

    /*
    Constructs a DCIM Cooling object from a JSON payload
     */
    constructor(json?: Object) {
        if (json) {
            this.id            = json["Id"];
            this.name          = json["Name"];
            this.type          = json["DCIMCoolingType"];
//            this.status.state  = json["Status"]["State"];
//            this.status.health = json["Status"]["Health"];
        }
    }
}
