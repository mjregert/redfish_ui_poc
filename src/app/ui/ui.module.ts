import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule,
    ChartsModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class UiModule { }
