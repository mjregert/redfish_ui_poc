export class Collection {
    name: string;
    membersCount: number;
    members: string[];

    /*
    Constructs a collection from a JSON payload
     */

     constructor(json?: Object) {
        if (json) {
            this.name = json["Name"];
            this.membersCount = json["Members@odata.count"];
            this.members = json["Members"];
        }
    }
}
