import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HostComponent } from './components/host.component';
import { HomeComponent } from './components/home.component';
import { StatsComponent } from './components/stats.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([{
            path: 'stats',
            component: StatsComponent
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
        StatsComponent
    ],
    bootstrap: [HostComponent]
})

export class AppModule {}