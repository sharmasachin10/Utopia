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
var WelcomeService = (function () {
    function WelcomeService(http) {
        this.http = http;
    }
    WelcomeService.prototype.save = function (user) {
        return this.http.post('/api/users', user)
            .map(function (response) {
        });
    };
    WelcomeService.prototype.imageUpload = function (item) {
        return this.http.post('/api/imageupload', item)
            .map(function (response) { return response.json(); });
    };
    WelcomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WelcomeService);
    return WelcomeService;
}());
exports.WelcomeService = WelcomeService;
//# sourceMappingURL=welcome.service.js.map