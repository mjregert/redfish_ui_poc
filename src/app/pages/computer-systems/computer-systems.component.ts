/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RedfishDataService } from '../../services/redfish/redfish-data.service';
import { ComputerSystem } from '../../models/computer-system';
import { ComputerSystemCollection } from '../../models/computer-system-collection';

@Component({
    selector: 'app-computer-systems',
    templateUrl: './computer-systems.component.html',
    styleUrls: ['./computer-systems.component.scss']
})
export class ComputerSystemsComponent implements OnInit {

    ///////////////////////////////////////////////////////////////////////////
    // PUBLIC ATTRIBUTES
    //-------------------------------------------------------------------------
    computerSystemCollection: Observable < ComputerSystemCollection > ;
    computerSystems: Observable < ComputerSystem[] > ;
    selectedSystem: ComputerSystem;

    ///////////////////////////////////////////////////////////////////////////
    // PUBLIC FUNCTIONS
    //-------------------------------------------------------------------------
    onSelect(computerSystem: ComputerSystem):void {
        this.selectedSystem = computerSystem;
    }

    ///////////////////////////////////////////////////////////////////////////
    // CONSTRUCTOR AND INIT FUNCTIONS
    //-------------------------------------------------------------------------
    constructor(private dataService: RedfishDataService) {}

    ngOnInit() {
        this.computerSystemCollection = this.dataService.getSystemCollection();
        this.computerSystems = Observable.create(observer => {
            let csArray: ComputerSystem[] = [];
            let subscription = this.computerSystemCollection.forEach(collection => {
                collection.members.forEach(element => {
                    let url = element['@odata.id'];
                    let tokens = url.split('/');
                    let id = tokens[tokens.length-1];
                    console.log("here");
                    let compSystem = this.dataService.getComputerSystem(id);
                    let csSubscription = compSystem.forEach(element => {
                        csArray.push(element);
                    });
                });
                observer.next(csArray);
                observer.complete();
            });
        });

    }
}

