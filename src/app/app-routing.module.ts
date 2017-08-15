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
import { PowerSystemsComponent } from './pages/power-systems/power-systems.component';
import { CoolingSystemsComponent } from './pages/cooling-systems/cooling-systems.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'computer', component: ComputerSystemsComponent },
            { path: 'power', component: PowerSystemsComponent },
            { path: 'cooling', component: CoolingSystemsComponent },
            { path: 'settings', component: SettingsComponent }
        ]
    }
]

export const appRoutingProviders: any[] = [
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
