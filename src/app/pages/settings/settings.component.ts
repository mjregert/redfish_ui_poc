import { Component, OnInit } from '@angular/core';
import { SettingsDataService } from '../../services/settings/settings-data.service';
import { Settings } from '../../models/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [SettingsDataService]
})
export class SettingsComponent implements OnInit {

  settings = new Settings();

  constructor(private settingsService: SettingsDataService) { }

  ngOnInit() {
    this.settings = this.settingsService.getAllSettings();
 }

  applySettings(form) {
    this.settingsService.setAllSettings(form);
  }
}
