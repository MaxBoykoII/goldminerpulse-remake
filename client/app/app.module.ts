import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HostComponent } from './components/host.component';
import { HomeComponent } from './components/home.component';
import { StatsComponent } from './components/stats.component';
import { ChartsComponent } from './components/charts.component';
import { LatestComponent } from './components/latest.component';
import { BlogsComponent } from './components/blogs.component';
import { ToolsComponent } from './components/tools.component';
import { ChartDetailComponent } from './components/chart-detail.component';

import { ContentService } from './services/content.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([{
            path: 'stats',
            component: StatsComponent
        }, {
            path: 'charts',
            component: ChartsComponent
        }, {
            path: 'latest',
            component: LatestComponent
        }, {
            path: 'blogs',
            component: BlogsComponent
        }, {
            path: 'tools',
            component: ToolsComponent
        }, {
            path: 'chart/:id',
            component: ChartDetailComponent
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
        ChartsComponent,
        LatestComponent,
        BlogsComponent,
        ToolsComponent,
        ChartDetailComponent
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }, ContentService],
    bootstrap: [HostComponent]
})

export class AppModule {}