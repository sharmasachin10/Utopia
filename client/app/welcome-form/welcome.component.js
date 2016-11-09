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
var ng2_img_cropper_1 = require('ng2-img-cropper');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var welcome_service_1 = require('./welcome.service');
var WelcomeComponent = (function () {
    function WelcomeComponent(router, welcomeService) {
        this.router = router;
        this.welcomeService = welcomeService;
        this.files = [];
        this.artCategory = [];
        this.shownext = true;
        this.cropperSettings = new ng2_img_cropper_1.CropperSettings();
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
        this.cropperSettings.croppedWidth = 200;
        this.cropperSettings.croppedHeight = 200;
        this.cropperSettings.canvasWidth = 500;
        this.cropperSettings.canvasHeight = 300;
        this.cropperSettings.minWidth = 200;
        this.cropperSettings.minHeight = 200;
        this.cropperSettings.rounded = false;
        this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
        this.data = {};
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.file_srcs = '';
        this.person = {
            image: '',
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
    WelcomeComponent.prototype.step1 = function (isValid, form) {
        if (isValid) {
            this.shownext = false;
            window.scrollTo(0, 0);
        }
    };
    WelcomeComponent.prototype.step2 = function (form) {
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
    WelcomeComponent.prototype.fileChangeListener = function ($event) {
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
            that.cropModal.show();
        };
        myReader.readAsDataURL(file);
    };
    WelcomeComponent.prototype.savecropImage = function () {
        var _this = this;
        this.file_srcs = this.data.image;
        var formData = new FormData();
        formData.append("image", this.dataURItoBlob(this.data.image));
        this.welcomeService.imageUpload(formData)
            .subscribe(function (data) {
            _this.person.image = data.name;
            _this.cropModal.hide();
        }, function (error) {
            console.log(error);
        });
    };
    WelcomeComponent.prototype.dataURItoBlob = function (dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var bb = new Blob([ab], { type: mimeString });
        return bb;
    };
    __decorate([
        core_1.ViewChild('cropper', undefined), 
        __metadata('design:type', ng2_img_cropper_1.ImageCropperComponent)
    ], WelcomeComponent.prototype, "cropper", void 0);
    __decorate([
        core_1.ViewChild('cropModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], WelcomeComponent.prototype, "cropModal", void 0);
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