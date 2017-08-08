import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  headerLinks = [
    { link : ['/', 'dashboard'], icon: 'home'},
  ];

  subLinks = [
    { link : ['/', 'dashboard'], label: 'Dashboard' }
//    { link : ['/', 'cs'], label: 'Computer Systems'}
  ];

  headerActions = [
    { link: ['/', 'settings'], icon: 'cog'},
  ];
}
