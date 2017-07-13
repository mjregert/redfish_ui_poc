/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
import { Injectable } from '@angular/core';
import { Settings } from '../../models/settings';

@Injectable()
export class SettingsDataService {

    ///////////////////////////////////////////////////////////////////////////
    // PUBLIC FUNCTIONS
    //-------------------------------------------------------------------------
    getAllSettings() : Settings {
        this.settings.secureConnToggle = window.localStorage.getItem('secureConnToggle') == "true";
        this.settings.apiAuthToggle = window.localStorage.getItem('apiAuthToggle') == "true";
        this.settings.apiAuthUserName = window.localStorage.getItem('apiAuthUserName');
        this.settings.apiAuthPassword = window.localStorage.getItem('apiAuthPassword');
        this.settings.v11ApiUrl = window.localStorage.getItem('v11ApiUrl');
        this.settings.v20ApiUrl = window.localStorage.getItem('v20ApiUrl');
        this.settings.v1RedfishUrl = window.localStorage.getItem('v1RedfishUrl');
        this.settings.webSocketUrl = window.localStorage.getItem('webSocketUrl');
        this.settings.elasticSearchUrl = window.localStorage.getItem('elasticSearchUrl');
        return this.settings;
    }

    //-------------------------------------------------------------------------

    setAllSettings(form) : void {
        // Save these values to local storage which persists across browser sessions until the cache is cleared.
        window.localStorage.setItem('secureConnToggle', form.secureConnToggle);
        window.localStorage.setItem('apiAuthToggle', form.apiAuthToggle);
        window.localStorage.setItem('apiAuthUserName', form.apiAuthUserName);
        window.localStorage.setItem('apiAuthPassword', form.apiAuthPassword);
        window.localStorage.setItem('v11ApiUrl', form.v11ApiUrl);
        window.localStorage.setItem('v20ApiUrl', form.v20ApiUrl);
        window.localStorage.setItem('v1RedfishUrl', form.v1RedfishUrl);
        window.localStorage.setItem('webSocketUrl', form.webSocketUrl);
        window.localStorage.setItem('elasticSearchUrl', form.elasticSearchUrl);
    }

    ///////////////////////////////////////////////////////////////////////////
    // PRIVATE ATTRIBUTES
    //-------------------------------------------------------------------------
    private settings: Settings = new Settings();

    ///////////////////////////////////////////////////////////////////////////
    // CONSTRUCTOR
    //-------------------------------------------------------------------------
  constructor() { }
}
