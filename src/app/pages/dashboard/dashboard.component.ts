import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RedfishDataService } from '../../services/redfish/redfish-data.service';

import { ComputerSystemCollection } from '../../models/computer-system-collection';
import { DcimCoolingCollection } from '../../models/dcim-cooling-collection';
import { DcimPowerCollection } from '../../models/dcim-power-collection';

import { ComputerSystem } from '../../models/computer-system';
import { DcimCooling } from '../../models/dcim-cooling';
import { DcimPower } from '../../models/dcim-power';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    ///////////////////////////////////////////////////////////////////////////
    // PUBLIC ATTRIBUTES
    //-------------------------------------------------------------------------
    computerSystemCollection: Observable < ComputerSystemCollection >;
    computerSystems: Observable < ComputerSystem[] >;
    dcimCoolingCollection: Observable < DcimCoolingCollection >;
    dcimPowerCollection: Observable < DcimPowerCollection >;
    dcimCoolingSystems: Observable < DcimCooling[] >;
    dcimPowerSystems: Observable < DcimPower[] >;

    constructor(private dataService: RedfishDataService) {
        this.computerSystemCollection = this.dataService.getSystemCollection();
        this.computerSystems = Observable.create(observer => {
            let csArray: ComputerSystem[] = [];
            let subscription = this.computerSystemCollection.forEach(collection => {
                collection.members.forEach(element => {
                    let url = element['@odata.id'];
                    let tokens = url.split('/');
                    let id = tokens[tokens.length-1];
                    let compSystem = this.dataService.getComputerSystem(id);
                    let csSubscription = compSystem.forEach(element => {
                        csArray.push(element);
                    });
                });
                observer.next(csArray);
                observer.complete();
            });
        });

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
