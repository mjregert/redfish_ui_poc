/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RedfishDataService } from '../../services/redfish/redfish-data.service';
import { DcimPowerCollection } from '../../models/dcim-power-collection';
import { DcimPower } from '../../models/dcim-power';

@Component({
  selector: 'app-power-systems',
  templateUrl: './power-systems.component.html',
  styleUrls: ['./power-systems.component.scss']
})
export class PowerSystemsComponent implements OnInit {

    ///////////////////////////////////////////////////////////////////////////
    // PUBLIC ATTRIBUTES
    //-------------------------------------------------------------------------
    dcimPowerCollection: Observable < DcimPowerCollection > ;
    dcimPowerSystems: Observable < DcimPower[] > ;
    selectedSystem: DcimPower;

    ///////////////////////////////////////////////////////////////////////////
    // PUBLIC FUNCTIONS
    //-------------------------------------------------------------------------
    onSelect(powerSystem: DcimPower):void {
        this.selectedSystem = powerSystem;
    }

    constructor(private dataService: RedfishDataService) {
        this.dcimPowerCollection = this.dataService.getDcimPowerCollection();
        this.dcimPowerSystems = Observable.create(observer => {
          console.log("Getting power devices now");
            let objArray: DcimPower[] = [];
            let subscription = this.dcimPowerCollection.forEach(collection => {
                collection.members.forEach(element => {
                    let url = element['@odata.id'];
                    let tokens = url.split('/');
                    let id = tokens[tokens.length-1];
                    let power = this.dataService.getPower(id);
                    let csSubscription = power.forEach(element => {
                        objArray.push(element);
                    });
                });
                observer.next(objArray);
                observer.complete();
            });
        });

    }

    ngOnInit() {
    }

}
