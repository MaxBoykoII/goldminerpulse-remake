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
var router_1 = require('@angular/router');
var content_service_1 = require('../services/content.service');
var ChartDetailComponent = (function () {
    function ChartDetailComponent(_route, _contentService) {
        this._route = _route;
        this._contentService = _contentService;
        this.chart = {
            title: '',
            id: '',
            description: '',
            tooltip: '',
            src: ''
        };
    }
    ChartDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params['id'];
        console.log('The id is...', id);
        this._contentService.retrieveCache().subscribe(function (cache) {
            console.log('The cache is...', cache);
            _this.chart = cache.find(function (chart) { return chart.id === id; }) || null;
        });
    };
    ChartDetailComponent = __decorate([
        core_1.Component({
            selector: 'chart',
            templateUrl: './templates/chart-detail.component.html',
            styleUrls: ['./css/chart-detail.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, content_service_1.ContentService])
    ], ChartDetailComponent);
    return ChartDetailComponent;
}());
exports.ChartDetailComponent = ChartDetailComponent;
