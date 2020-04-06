(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lapor-file-lapor-file-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/lapor-file/lapor-file.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/lapor-file/lapor-file.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Lampirkan Gambar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <!-- <ion-row class=\"ion-justify-content-center\" class=\"ion-no-padding\">\n    <ion-col size=\"12\" size-md=\"6\" size-xl=\"6\" class=\"ion-no-padding\">\n\n      <div class=\"preview-wrapper\">\n\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"4\">\n\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"btn-camera ion-activatable\" (click)=\"takePicture()\">\n              <ion-ripple-effect></ion-ripple-effect>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button class=\"ion-float-right btn-images\" fill=\"clear\" (click)=\"openGallery()\">\n              <ion-icon name=\"images\" color=\"light\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n        <ion-grid>\n            <ion-row class=\"scrolling-wrapper-flexbox\">\n            <ion-col size=\"4\" *ngFor=\"let photo of photos; let id = index\">\n              <ion-card class=\"block\">\n                <ion-icon name=\"close-circle\" class=\"deleteIcon\" (click)=\"deletePhoto(id)\"></ion-icon>\n                <img [src]=\"photo\" *ngIf=\"photo\" />\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n    </ion-col>\n  </ion-row> -->\n\n  <!-- <ion-row class=\"ion-justify-content-center\" class=\"ion-no-padding\">\n    <ion-col size=\"12\" size-md=\"6\" size-xl=\"6\" class=\"ion-no-padding\">\n\n      <div class=\"preview-wrapper\">\n\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"4\">\n\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"btn-camera ion-activatable\" (click)=\"takePicture()\">\n              <ion-ripple-effect></ion-ripple-effect>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button class=\"ion-float-right btn-images\" fill=\"clear\" (click)=\"openGallery()\">\n              <ion-icon name=\"images\" color=\"light\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n        <ion-grid>\n            <ion-row class=\"scrolling-wrapper-flexbox\">\n            <ion-col size=\"4\" *ngFor=\"let photo of photos; let id = index\">\n              <ion-card class=\"block\">\n                <ion-icon name=\"close-circle\" class=\"deleteIcon\" (click)=\"deletePhoto(id)\"></ion-icon>\n                <img [src]=\"photo\" *ngIf=\"photo\" />\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n    </ion-col>\n  </ion-row> -->\n  <ion-grid class=\"photo-preview\">\n      <ion-row class=\"scrolling-wrapper-flexbox\">\n      <ion-col size=\"4\" *ngFor=\"let photo of photos; let id = index\">\n        <ion-card class=\"block\">\n          <ion-icon name=\"close-circle\" class=\"deleteIcon\" (click)=\"deletePhoto(id)\"></ion-icon>\n          <img [src]=\"photo\" *ngIf=\"photo\" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row class=\"bottom-button\">\n    <ion-col size=\"2\">\n      <ion-button class=\"btn-images\" fill=\"clear\" (click)=\"switchCamera()\">\n        <ion-icon name=\"sync\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"2\" (click)=\"switchFlashOn()\" *ngIf=\"!flash_on\">\n      <ion-button class=\"btn-images\" fill=\"clear\">\n        <ion-icon color=\"light\" name=\"flash\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"2\" (click)=\"switchFlashOff()\" *ngIf=\"flash_on\">\n      <ion-button class=\"btn-images\" fill=\"clear\">\n        <ion-icon color=\"warning\" name=\"flash\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\">\n      <div class=\"btn-camera ion-activatable\" (click)=\"takePicture()\">\n        <ion-ripple-effect></ion-ripple-effect>\n      </div>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button class=\"ion-float-right btn-images\" fill=\"clear\" (click)=\"openGallery()\">\n        <ion-icon name=\"images\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"ion-text-center\" (click)=\"toTinjau()\">\n    <ion-title>Lanjutkan</ion-title>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/lapor-file/lapor-file.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/lapor-file/lapor-file.module.ts ***!
  \*******************************************************/
/*! exports provided: LaporFilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaporFilePageModule", function() { return LaporFilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lapor_file_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lapor-file.page */ "./src/app/pages/lapor-file/lapor-file.page.ts");







const routes = [
    {
        path: '',
        component: _lapor_file_page__WEBPACK_IMPORTED_MODULE_6__["LaporFilePage"]
    }
];
let LaporFilePageModule = class LaporFilePageModule {
};
LaporFilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_lapor_file_page__WEBPACK_IMPORTED_MODULE_6__["LaporFilePage"]]
    })
], LaporFilePageModule);



/***/ }),

/***/ "./src/app/pages/lapor-file/lapor-file.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/lapor-file/lapor-file.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: transparent;\n  font-family: Lato-Regular;\n  --ion-font-family: Lato-Regular;\n}\n\n.preview-wrapper {\n  margin-top: 48vh;\n}\n\n.block .deleteIcon {\n  position: absolute !important;\n  color: #ffffff !important;\n  margin-left: 85% !important;\n}\n\n.block .deleteIcon:before {\n  font-size: 40px !important;\n}\n\n.block img {\n  height: 100px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.btn-camera {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  height: 72px;\n  width: 72px;\n  background: #ff4e4e;\n  border-radius: 50%;\n  border: solid #858585 3pt;\n}\n\n.btn-images ion-icon {\n  font-size: 24pt;\n}\n\n.scrolling-wrapper-flexbox {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n\n.bottom-button {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding-bottom: 20px;\n}\n\n.photo-preview {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC9wYWdlcy9sYXBvci1maWxlL2xhcG9yLWZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYXBvci1maWxlL2xhcG9yLWZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREdJO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDQU47O0FERUk7RUFDRSwwQkFBQTtBQ0FOOztBREdJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDRFI7O0FES0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDRko7O0FETUk7RUFDSSxlQUFBO0FDSFI7O0FET0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSko7O0FET0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNKSjs7QURPQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFwb3ItZmlsZS9sYXBvci1maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1mYW1pbHkgOiBMYXRvLVJlZ3VsYXI7XG4gICAgLS1pb24tZm9udC1mYW1pbHkgOiBMYXRvLVJlZ3VsYXI7XG59XG5cbi5wcmV2aWV3LXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDQ4dmg7XG59XG5cbi5ibG9jayB7XG4gICAgLmRlbGV0ZUljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWxlZnQ6IDg1JSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZGVsZXRlSWNvbjpiZWZvcmUge1xuICAgICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbn1cblxuLmJ0bi1jYW1lcmEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgIFxuICAgIGhlaWdodDogNzJweDtcbiAgICB3aWR0aDogNzJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmY0ZTRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IHNvbGlkICM4NTg1ODUgM3B0O1xufVxuXG4uYnRuLWltYWdlcyB7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI0cHQ7XG4gICAgfVxufVxuXG4uc2Nyb2xsaW5nLXdyYXBwZXItZmxleGJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uYm90dG9tLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnBob3RvLXByZXZpZXcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgLS1pb24tZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbn1cblxuLnByZXZpZXctd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDQ4dmg7XG59XG5cbi5ibG9jayAuZGVsZXRlSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogODUlICFpbXBvcnRhbnQ7XG59XG4uYmxvY2sgLmRlbGV0ZUljb246YmVmb3JlIHtcbiAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4uYmxvY2sgaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYnRuLWNhbWVyYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBoZWlnaHQ6IDcycHg7XG4gIHdpZHRoOiA3MnB4O1xuICBiYWNrZ3JvdW5kOiAjZmY0ZTRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogc29saWQgIzg1ODU4NSAzcHQ7XG59XG5cbi5idG4taW1hZ2VzIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB0O1xufVxuXG4uc2Nyb2xsaW5nLXdyYXBwZXItZmxleGJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uYm90dG9tLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5waG90by1wcmV2aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/lapor-file/lapor-file.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/lapor-file/lapor-file.page.ts ***!
  \*****************************************************/
/*! exports provided: LaporFilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaporFilePage", function() { return LaporFilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ "./src/app/services/common/common.service.ts");
/* harmony import */ var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera-preview/ngx */ "./node_modules/@ionic-native/camera-preview/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");








let LaporFilePage = class LaporFilePage {
    constructor(commonService, cameraPreview, navCtrl, alertCtrl, camera, route, router, alertService) {
        this.commonService = commonService;
        this.cameraPreview = cameraPreview;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.screenHeight = window.screen.height / 2;
        this.dataObj = {};
        this.flash_on = false;
        this.photos = [];
    }
    ionViewWillEnter() {
        this.openCamera();
    }
    ngOnInit() {
        this.dataRec = this.route.snapshot.paramMap.get('dataObj');
        this.photos = [];
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.cameraPreview.stopCamera();
    }
    ionViewWillLeave() {
        this.cameraPreview.stopCamera();
    }
    goTo(page) {
        this.commonService.goTo(page);
    }
    goForward(page) {
        this.commonService.goForward(page);
    }
    goBack(page) {
        this.commonService.goForward(page);
    }
    back() {
        this.navCtrl.back();
    }
    openCamera() {
        const cameraPreviewOpts = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: this.cameraPreview.CAMERA_DIRECTION.BACK,
            tapPhoto: true,
            previewDrag: false,
            toBack: true,
            alpha: 1
        };
        this.cameraPreview.startCamera(cameraPreviewOpts);
    }
    // take a picture
    takePicture() {
        if (this.photos.length >= 5) {
            this.toTinjau();
            this.alertService.presentToast('Maksimum 5 data');
        }
        else {
            console.log(this.photos);
            const pictureOpts = {
                width: 1280,
                height: 1280
            };
            this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
                this.base64Image = 'data:image/jpeg;base64,' + imageData;
                this.photos.push(this.base64Image);
                this.photos.reverse();
            }, (err) => {
                console.log(err);
                // this.picture = 'assets/img/test.jpg';
            });
        }
    }
    deletePhoto(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const confirm = yield this.alertCtrl.create({
                header: 'Perhatian!',
                message: 'Apakah anda yakin untuk menghapus foto ini ?',
                buttons: [
                    {
                        text: 'No',
                        handler: () => {
                            console.log('Disagree clicked');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            console.log('Agree clicked');
                            this.photos.splice(index, 1);
                        }
                    }
                ]
            });
            yield confirm.present();
        });
    }
    openGallery() {
        const options = {
            quality: 100,
            targetHeight: 600,
            targetWidth: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photos.push(this.base64Image);
            this.photos.reverse();
        }, (err) => {
            console.log(err);
        });
    }
    toTinjau() {
        let combineObj = {
            'data': this.dataRec,
            'files': this.photos,
        };
        let dataString = JSON.stringify(combineObj);
        this.navCtrl.navigateForward(['lapor-tinjau', dataString]);
    }
    switchCamera() {
        this.cameraPreview.switchCamera();
    }
    switchFlashOn() {
        this.flash_on = true;
        this.cameraPreview.setFlashMode(this.cameraPreview.FLASH_MODE.ON);
    }
    switchFlashOff() {
        this.flash_on = false;
        this.cameraPreview.setFlashMode(this.cameraPreview.FLASH_MODE.OFF);
    }
};
LaporFilePage.ctorParameters = () => [
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__["CameraPreview"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
LaporFilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lapor-file',
        template: __webpack_require__(/*! raw-loader!./lapor-file.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/lapor-file/lapor-file.page.html"),
        styles: [__webpack_require__(/*! ./lapor-file.page.scss */ "./src/app/pages/lapor-file/lapor-file.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__["CameraPreview"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]])
], LaporFilePage);



/***/ })

}]);
//# sourceMappingURL=pages-lapor-file-lapor-file-module-es2015.js.map