/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RedfishDataService } from '../../services/redfish/redfish-data.service';
import { ComputerSystem } from '../../models/computer-system';
import { DcimCooling } from '../../models/dcim-cooling';
import { ComputerSystemCollection } from '../../models/computer-system-collection';
import { DcimCoolingCollection } from '../../models/dcim-cooling-collection';
import { DcimPowerCollection } from '../../models/dcim-power-collection';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    ///////////////////////////////////////////////////////////////////////////
    // PUBLIC ATTRIBUTES
    //-------------------------------------------------------------------------
    computerSystemCollection: Observable < ComputerSystemCollection >;
    computerSystems: Observable < ComputerSystem[] >;
    dcimCoolingCollection: Observable < DcimCoolingCollection >;
    dcimPowerCollection: Observable < DcimPowerCollection >;
    dcimCoolingSystems: Observable < DcimCooling[] >;

 
    // Pie
    public pieChartType:string = 'pie';
    public pieChartLabels:string[] = ["Foo", "Bar", "Hello World"];
    public pieChartData:number[] = [300, 500, 100];

    public deviceTypeMap: Map<string, number> = new Map();
    
    public chartClicked(e:any):void {
        console.log(e);
    }
    
    public chartHovered(e:any):void {
        console.log(e);
    }

    chartLabels: Observable < string[] >;




    ///////////////////////////////////////////////////////////////////////////
    // CONSTRUCTOR AND INIT FUNCTIONS
    //-------------------------------------------------------------------------
    constructor(private dataService: RedfishDataService) {
    }

    ngOnInit() {
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
                        if (this.deviceTypeMap.has(element.realType)) {
                            this.deviceTypeMap[element.realType] = this.deviceTypeMap[element.realType] + 1;
                        } else {
                            this.deviceTypeMap.set(element.realType, 1);
                            this.pieChartLabels.push(element.realType);
                        }
                    });
                });
                observer.next(objArray);
                observer.complete();
            });
        });

        this.chartLabels = Observable.create(observer => {
            let strArray: string[] = [];
            let subscription = this.dcimCoolingSystems.forEach(element => {
                console.log("here");
            });
        });
    }
}