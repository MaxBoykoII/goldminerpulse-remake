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
var HomeComponent = (function () {
    function HomeComponent(router, _contentService) {
        this.router = router;
        this._contentService = _contentService;
    }
    HomeComponent.prototype.navigate = function (route) {
        this.router.navigate([route]);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contentService.fetchHome().subscribe(function (data) { return _this.page = data; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            styleUrls: ['./css/home.component.css'],
            templateUrl: './templates/home.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, content_service_1.ContentService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
