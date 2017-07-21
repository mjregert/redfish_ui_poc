/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RedfishDataService } from '../../services/redfish/redfish-data.service';
import { ComputerSystem } from '../../models/computer-system';
import { ComputerSystemCollection } from '../../models/computer-system-collection';
import { DcimCoolingCollection } from '../../models/dcim-cooling-collection';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    ///////////////////////////////////////////////////////////////////////////
    // PUBLIC ATTRIBUTES
    //-------------------------------------------------------------------------
    computerSystemCollection: Observable < ComputerSystemCollection >;
    dcimCoolingCollection: Observable < DcimCoolingCollection >;

    ///////////////////////////////////////////////////////////////////////////
    // CONSTRUCTOR AND INIT FUNCTIONS
    //-------------------------------------------------------------------------
    constructor(private dataService: RedfishDataService) {
    }

    ngOnInit() {
        this.computerSystemCollection = this.dataService.getSystemCollection();
        this.dcimCoolingCollection = this.dataService.getDcimCoolingCollection();
    }
}
