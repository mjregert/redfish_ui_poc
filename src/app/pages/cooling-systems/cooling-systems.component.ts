/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RedfishDataService } from '../../services/redfish/redfish-data.service';
import { DcimCoolingCollection } from '../../models/dcim-cooling-collection';
import { DcimCooling } from '../../models/dcim-cooling';

@Component({
  selector: 'app-cooling-systems',
  templateUrl: './cooling-systems.component.html',
  styleUrls: ['./cooling-systems.component.scss']
})
export class CoolingSystemsComponent implements OnInit {

    ///////////////////////////////////////////////////////////////////////////
    // PUBLIC ATTRIBUTES
    //-------------------------------------------------------------------------
    dcimCoolingCollection: Observable < DcimCoolingCollection > ;
    dcimCoolingSystems: Observable < DcimCooling[] > ;
    selectedSystem: DcimCooling;

    ///////////////////////////////////////////////////////////////////////////
    // PUBLIC FUNCTIONS
    //-------------------------------------------------------------------------
    onSelect(coolingSystem: DcimCooling):void {
        console.log("selected cooling system is: " + coolingSystem.oDataId);
        this.selectedSystem = coolingSystem;
    }

    constructor(private dataService: RedfishDataService) {
        this.dcimCoolingCollection = this.dataService.getDcimCoolingCollection();
        this.dcimCoolingSystems = Observable.create(observer => {
          console.log("Getting cooling devices now");
            let objArray: DcimCooling[] = [];
            let subscription = this.dcimCoolingCollection.forEach(collection => {
                collection.members.forEach(element => {
                    let url = element['@odata.id'];
                    let tokens = url.split('/');
                    let id = tokens[tokens.length-1];
                    let cooling = this.dataService.getCooling(id);
                    let csSubscription = cooling.forEach(element => {
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
