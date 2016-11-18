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
require('rxjs/add/operator/mergeMap');
var content_service_1 = require('../services/content.service');
var FeaturedComponent = (function () {
    function FeaturedComponent(_contentService) {
        this._contentService = _contentService;
        this.charts = [];
    }
    FeaturedComponent.prototype.getChart = function (id) {
        return this.charts.find(function (chart) { return chart.id === id; });
    };
    FeaturedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contentService.fetchFeatured().flatMap(function (featured) {
            _this.featured = featured;
            return _this._contentService.retrieveCache();
        }).subscribe(function (cache) {
            var ids = _this.featured.features.map(function (feature) { return feature.id; });
            _this.charts = ids.map(function (id) {
                return cache.find(function (chart) { return chart.id === id; });
            });
        });
    };
    FeaturedComponent = __decorate([
        core_1.Component({
            selector: 'featured',
            templateUrl: './templates/featured.component.html',
            styleUrls: ['./css/featured.component.css']
        }), 
        __metadata('design:paramtypes', [content_service_1.ContentService])
    ], FeaturedComponent);
    return FeaturedComponent;
}());
exports.FeaturedComponent = FeaturedComponent;
