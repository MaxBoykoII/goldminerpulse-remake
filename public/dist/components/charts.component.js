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
var content_service_1 = require('../services/content.service');
var ChartsComponent = (function () {
    function ChartsComponent(_contentService) {
        this._contentService = _contentService;
        this.sections = [];
    }
    ChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contentService.fetchCharts().subscribe(function (sections) {
            _this.sections = sections;
            console.log(_this.sections);
        });
    };
    ChartsComponent = __decorate([
        core_1.Component({
            selector: 'charts',
            templateUrl: './templates/charts.component.html',
            styleUrls: ['./css/charts.component.css']
        }), 
        __metadata('design:paramtypes', [content_service_1.ContentService])
    ], ChartsComponent);
    return ChartsComponent;
}());
exports.ChartsComponent = ChartsComponent;
