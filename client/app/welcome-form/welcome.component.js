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
var welcome_service_1 = require('./welcome.service');
var WelcomeComponent = (function () {
    function WelcomeComponent(router, welcomeService) {
        this.router = router;
        this.welcomeService = welcomeService;
        this.shownext = true;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.person = {
            name: '',
            email: '',
            password: '',
            age: null,
            gender: '',
            profession: '',
            about: '',
            city: '',
            news: '',
            art: '',
            health: '',
            food: '',
            sports: '',
            technology: ''
        };
    };
    WelcomeComponent.prototype.artvalue = function (value) {
        this.person.art = value;
    };
    WelcomeComponent.prototype.step1 = function () {
        this.shownext = false;
        window.scrollTo(0, 0);
    };
    WelcomeComponent.prototype.step2 = function () {
        var _this = this;
        this.welcomeService.save(this.person)
            .subscribe(function (data) {
            alert('Successfully Save');
            _this.ngOnInit();
            _this.shownext = true;
            window.scrollTo(0, 0);
        }, function (error) {
            console.log(error);
        });
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'welcome.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, welcome_service_1.WelcomeService])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map