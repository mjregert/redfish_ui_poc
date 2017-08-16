import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RedfishDataService } from '../../services/redfish/redfish-data.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

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
    @ViewChild( BaseChartDirective ) chart: BaseChartDirective;

    ///////////////////////////////////////////////////////////////////////////
    // PUBLIC ATTRIBUTES
    //-------------------------------------------------------------------------
    computerSystemCollection: Observable < ComputerSystemCollection >;
    computerSystems: Observable < ComputerSystem[] >;
    dcimCoolingCollection: Observable < DcimCoolingCollection >;
    dcimPowerCollection: Observable < DcimPowerCollection >;
    dcimCoolingSystems: Observable < DcimCooling[] >;
    dcimPowerSystems: Observable < DcimPower[] >;

    // Doughnut
    doughnutChartLabels:string[] = [];
    doughnutChartData:number[] = [];
    doughnutChartType:string = 'doughnut';
    doughnutChartColors: any[] = [{ backgroundColor: ["#b8436d", "#00d9f9", "#a4c73c", "#a4add3"] }];
    doughnutChartOptions: any = {
        cutoutPercentage: 40,
        legend: {
            position: 'bottom'
        },
        title: {
            display: 'true',
            position: 'bottom',
            text: 'Device Types'
        }
    }

    coolingDictionary: { [index: string]: number } = {};

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
            let objArray: DcimCooling[] = [];
            let subscription = this.dcimCoolingCollection.forEach(collection => {
                collection.members.forEach(element => {
                    let url = element['@odata.id'];
                    let tokens = url.split('/');
                    let id = tokens[tokens.length-1];
                    let cooling = this.dataService.getCooling(id);
                    let csSubscription = cooling.forEach(element => {
                        objArray.push(element);
                        if (this.coolingDictionary.hasOwnProperty(element.realType)) {
                            console.log("BAR:  " + element.realType);
                            let index = this.coolingDictionary[element.realType];
                            this.doughnutChartData[index] = this.doughnutChartData[index]+1;
                            this.chart.chart.update();
                        } else {
                            console.log("FOO:  " + element.realType);
                            let newlen = this.doughnutChartLabels.push(element.realType);
                            this.doughnutChartData.push(1);
                            this.coolingDictionary[element.realType] = newlen-1;
                            this.chart.chart.update();
                        }
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
