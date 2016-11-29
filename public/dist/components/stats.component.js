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
var StatsComponent = (function () {
    function StatsComponent(_contentService, router) {
        this._contentService = _contentService;
        this.router = router;
        this.sections = [];
        this.charts = [];
    }
    StatsComponent.prototype.getById = function (id) {
        return this.charts.find(function (chart) { return chart.id === id; });
    };
    StatsComponent.prototype.toId = function (id) {
        this.router.navigate(['/stats'], {
            fragment: id
        });
        setTimeout(function () {
            var anchor = window.location.hash.substring(7);
            document.querySelector(anchor).scrollIntoView();
        });
    };
    StatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contentService.fetchStats().subscribe(function (sections) {
            _this.sections = sections;
            var ids = sections.map(function (section) { return section.chart_ids; }).reduce(function (ids1, ids2) { return ids1.concat(ids2); });
            _this._contentService.retrieveCache().subscribe(function (cache) {
                _this.charts = ids.map(function (id) { return cache.find(function (chart) { return chart.id === id; }); });
                console.log(_this.charts);
            });
        });
    };
    StatsComponent = __decorate([
        core_1.Component({
            selector: 'stats',
            templateUrl: './templates/stats.component.html',
            styleUrls: ['./css/stats.component.css']
        }), 
        __metadata('design:paramtypes', [content_service_1.ContentService, router_1.Router])
    ], StatsComponent);
    return StatsComponent;
}());
exports.StatsComponent = StatsComponent;
