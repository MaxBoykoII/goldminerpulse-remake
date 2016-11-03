"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var host_component_1 = require('./components/host.component');
var home_component_1 = require('./components/home.component');
var stats_component_1 = require('./components/stats.component');
var charts_component_1 = require('./components/charts.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([{
                        path: 'stats',
                        component: stats_component_1.StatsComponent
                    }, {
                        path: 'charts',
                        component: charts_component_1.ChartsComponent
                    }, {
                        path: '',
                        component: home_component_1.HomeComponent
                    }, {
                        path: '**',
                        redirectTo: '/',
                        pathMatch: 'full'
                    }])
            ],
            declarations: [
                host_component_1.HostComponent,
                home_component_1.HomeComponent,
                stats_component_1.StatsComponent,
                charts_component_1.ChartsComponent
            ],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
            bootstrap: [host_component_1.HostComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
