/*
 Copyright © 2017 Dell Inc. or its subsidiaries.  All Rights Reserved.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ComputerSystemsComponent } from './pages/computer-systems/computer-systems.component';

/*const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cs', component: ComputerSystemsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'settings', component: SettingsComponent }
];*/

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'cs', component: ComputerSystemsComponent },
            { path: 'settings', component: SettingsComponent }
        ]
    }
]

export const appRoutingProviders: any[] = [
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
