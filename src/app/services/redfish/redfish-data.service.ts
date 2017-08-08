/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { DataService } from '../data.service';
import {SettingsDataService} from "../settings/settings-data.service";
import { ComputerSystemCollection } from '../../models/computer-system-collection';
import { ComputerSystem } from '../../models/computer-system';
import { DcimCooling } from '../../models/dcim-cooling';
import { DcimCoolingCollection } from '../../models/dcim-cooling-collection';
import { DcimPowerCollection } from '../../models/dcim-power-collection';

@Injectable()
export class RedfishDataService extends DataService {

    ///////////////////////////////////////////////////////////////////////////
    // CONSTRUCTOR
    //-------------------------------------------------------------------------
    constructor(protected http: Http, protected settingsDataService: SettingsDataService) {
        super(http, settingsDataService);
    }

    ///////////////////////////////////////////////////////////////////////////
    // ATTRIBUTES
    //-------------------------------------------------------------------------
    // Getter for _baseUrl
    protected get baseUrl(): string {
        this._baseUrl = "http://10.210.115.192:9090/redfish/v1";//this.settingsDataService.getAllSettings().v1RedfishUrl;
        return this._baseUrl;
    }
 
    ///////////////////////////////////////////////////////////////////////////
    // PUBLIC FUNCTIONS
    //-------------------------------------------------------------------------
    getSystemCollection(): Observable <ComputerSystemCollection> {
        return Observable.create(observer => {
            this.get(this.baseUrl + '/systems')
            .subscribe(collectionAsJson => {
                console.log("\n\nComputerSystemCollection******\n" + JSON.stringify(collectionAsJson, null, 4));
                let collection: ComputerSystemCollection = new ComputerSystemCollection(collectionAsJson);
                observer.next(collection);
                observer.complete();
            });
        });
    }

    getComputerSystem(id: string): Observable <ComputerSystem> {
        return Observable.create(observer => {
            let theUrl = this.baseUrl + '/systems/' + id;
            this.get(theUrl)
            .subscribe(computerSystemAsJson => {
                console.log("\n\nComputer System ******\n" + JSON.stringify(computerSystemAsJson, null, 4));
                let computerSystem: ComputerSystem = new ComputerSystem(computerSystemAsJson);
                observer.next(computerSystem);
                observer.complete();
            });
        });
    }

    getDcimCoolingCollection(): Observable <DcimCoolingCollection> {
        return Observable.create(observer => {
            this.get(this.baseUrl + '/DCIMCooling')
            .subscribe(collectionAsJson => {
                console.log("\n\nDcimCoolingCollection******\n" + JSON.stringify(collectionAsJson, null, 4));
                let collection: DcimCoolingCollection = new DcimCoolingCollection(collectionAsJson);
                observer.next(collection);
                observer.complete();
            });
        });
    }

    getCooling(id: string): Observable <DcimCooling> {
        return Observable.create(observer => {
            let theUrl = this.baseUrl + '/DCIMCooling/' + id;
            this.get(theUrl)
            .subscribe(dcimCoolingAsJson => {
                console.log("\n\nDCIMCooling******\n" + JSON.stringify(dcimCoolingAsJson, null, 4));
                let dcimCooling: DcimCooling = new DcimCooling(dcimCoolingAsJson);
                observer.next(dcimCooling);
                observer.complete();
            });
        });
    }

    getDcimPowerCollection(): Observable <DcimPowerCollection> {
        return Observable.create(observer => {
            this.get(this.baseUrl + '/DCIMPower')
            .subscribe(collectionAsJson => {
                console.log("\n\nDcimPowerCollection******\n" + JSON.stringify(collectionAsJson, null, 4));
                let collection: DcimPowerCollection = new DcimPowerCollection(collectionAsJson);
                observer.next(collection);
                observer.complete();
            });
        });
    }
}
