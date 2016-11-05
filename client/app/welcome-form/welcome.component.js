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
        this.files = [];
        this.artCategory = [];
        this.shownext = true;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.person = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            age: null,
            gender: '',
            profession: '',
            about: '',
            city: '',
            news: '',
            art: [],
            health: '',
            food: '',
            sports: '',
            technology: ''
        };
        this.artCategory = [{
                name: 'Photography',
                select: false
            }, {
                name: 'Poetry',
                select: false
            }, {
                name: 'Sculpture',
                select: false
            }, {
                name: 'History',
                select: false
            }, {
                name: 'Literature',
                select: false
            }, {
                name: 'Architecture',
                select: false
            }, {
                name: 'Films',
                select: false
            }, {
                name: 'Theater',
                select: false
            }];
    };
    WelcomeComponent.prototype.artvalue = function (value, i) {
        this.artCategory.forEach(function (item, index) {
            if (index === i) {
                item.select = (item.select == true ? false : true);
            }
        });
        this.person.art = this.artCategory;
    };
    WelcomeComponent.prototype.step1 = function (isValid) {
        if (isValid) {
            this.shownext = false;
            window.scrollTo(0, 0);
        }
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
    WelcomeComponent.prototype.fileChange = function (input) {
        var _this = this;
        // Loop through each picture file
        for (var i = 0; i < input.files.length; i++) {
            this.files.push(input.files[i]);
            // Create an img element and add the image file data to it
            var img = document.createElement("img");
            img.src = window.URL.createObjectURL(input.files[i]);
            // Create a FileReader
            var reader, target;
            reader = new FileReader();
            // Add an event listener to deal with the file when the reader is complete
            reader.addEventListener("load", function (event) {
                // Get the event.target.result from the reader (base64 of the image)
                img.src = event.target.result;
                // Resize the image
                var resized_img = img;
                // Push the img src (base64 string) into our array that we display in our html template
                _this.file_srcs = img.src;
                console.log(_this.file_srcs);
            }, false);
            reader.readAsDataURL(input.files[i]);
        }
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