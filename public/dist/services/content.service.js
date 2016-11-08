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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Rx_1 = require('rxjs/Rx');
var ContentService = (function () {
    function ContentService(http) {
        this.http = http;
        this.apiURL = 'https://goldminerpulse.com/ng';
    }
    ContentService.prototype.retrieveCache = function () {
        var _this = this;
        if (this.cache) {
            return Rx_1.Observable.of(this.cache);
        }
        else {
            return this.http.get(this.apiURL + "/config-svg-list.php")
                .map(function (res) {
                _this.cache = res.json();
                return _this.cache;
            })
                .catch(this.handleError);
        }
    };
    ContentService.prototype.fetchStats = function () {
        return this.http.get(this.apiURL + "/confg-stats.php")
            .map(this.extractData)
            .catch(this.handleError);
    };
    ContentService.prototype.fetchCharts = function () {
        return this.http.get(this.apiURL + "/config-charts.php")
            .map(this.extractData)
            .catch(this.handleError);
    };
    ContentService.prototype.fetchLatest = function () {
        return this.http.get(this.apiURL + "/config-latest.php")
            .map(this.extractData)
            .catch(this.handleError);
    };
    ContentService.prototype.fetchBlogs = function () {
        return this.http.get(this.apiURL + "/config-blogs.php")
            .map(this.extractData)
            .catch(this.handleError);
    };
    ContentService.prototype.extractData = function (res) {
        return res.json();
    };
    ContentService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        console.log('error: ', error);
        return Rx_1.Observable.throw(errMsg);
    };
    ContentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContentService);
    return ContentService;
}());
exports.ContentService = ContentService;
