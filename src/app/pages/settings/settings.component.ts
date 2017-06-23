import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';
import { Settings } from '../../models/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [SettingsService]
})
export class SettingsComponent implements OnInit {

  settings = new Settings();

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settings = this.settingsService.getAllSettings();
 }

  applySettings(form) {
    this.settingsService.setAllSettings(form);
  }
}
