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
//    { link : ['/', 'home'], icon: 'home'},
//    { link : ['/', 'about'], icon: 'info-standard'}
  ];

  subLinks = [
    { link : ['/', 'home'], label: 'Home' },
    { link : ['/', 'cs'], label: 'Computer Systems'}
  ];

  headerActions = [
    { link: ['/', 'settings'], icon: 'cog'},
  ];
}
