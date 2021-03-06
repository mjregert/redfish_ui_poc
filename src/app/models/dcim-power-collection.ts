/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
export class DcimPowerCollection {
    name: string;
    membersCount: number;
    members: string[];

    /*
    Constructs a PowerCollection from a JSON payload
     */

     constructor(json?: Object) {
        if (json) {
            this.name = json["Name"];
            this.membersCount = json["Members@odata.count"];
            this.members = json["Members"];
        }
    }
}
