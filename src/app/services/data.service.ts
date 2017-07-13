/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {SettingsDataService} from "./settings/settings-data.service";

@Injectable()
export class DataService {

    ///////////////////////////////////////////////////////////////////////////
    // CONSTRUCTOR
    //-------------------------------------------------------------------------
    constructor(protected http: Http, protected settingsDataService: SettingsDataService) {
    }

    ///////////////////////////////////////////////////////////////////////////
    // ATTRIBUTES
    //-------------------------------------------------------------------------
    protected _baseUrl:string = "";

    ///////////////////////////////////////////////////////////////////////////
    // PROTECTED FUNCTIONS
    //-------------------------------------------------------------------------
    protected get(url) : Observable<any> {
        return this.http.get(url).map(response => {
            return response.json();
        }).catch(this.handleError);
    }

    //-------------------------------------------------------------------------
    protected handleError (error: Response | any) {
        // TODO Consider adding in a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
