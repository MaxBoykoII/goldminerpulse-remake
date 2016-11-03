import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HostComponent } from './components/host.component';
import { HomeComponent } from './components/home.component';
import { StatsComponent } from './components/stats.component';
import { ChartsComponent } from './components/charts.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([{
            path: 'stats',
            component: StatsComponent
        }, {
            path: 'charts',
            component: ChartsComponent
        }, {
            path: '',
            component: HomeComponent
        }, {
            path: '**',
            redirectTo: '/',
            pathMatch: 'full'
        }])
    ],
    declarations: [
        HostComponent,
        HomeComponent,
        StatsComponent,
        ChartsComponent
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [HostComponent]
})

export class AppModule {}