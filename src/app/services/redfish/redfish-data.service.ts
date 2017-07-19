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
        this._baseUrl = this.settingsDataService.getAllSettings().v1RedfishUrl;
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
                //let collection: ComputerSystemCollection = JSON.parse(JSON.stringify(collectionAsJson));
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
    
}

