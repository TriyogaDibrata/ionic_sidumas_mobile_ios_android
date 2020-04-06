(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-portal-data-portal-data-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/portal-data/portal-data.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/portal-data/portal-data.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ page_title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <iframe [src]=\"trusted_site\" target=\"_parent\" (load)=\"onLoad()\" (error)=\"onError()\" allowfullscreen></iframe>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/portal-data/portal-data.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/portal-data/portal-data.module.ts ***!
  \*********************************************************/
/*! exports provided: PortalDataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalDataPageModule", function() { return PortalDataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _portal_data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portal-data.page */ "./src/app/pages/portal-data/portal-data.page.ts");







const routes = [
    {
        path: '',
        component: _portal_data_page__WEBPACK_IMPORTED_MODULE_6__["PortalDataPage"]
    }
];
let PortalDataPageModule = class PortalDataPageModule {
};
PortalDataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_portal_data_page__WEBPACK_IMPORTED_MODULE_6__["PortalDataPage"]]
    })
], PortalDataPageModule);



/***/ }),

/***/ "./src/app/pages/portal-data/portal-data.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/portal-data/portal-data.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content iframe {\n  height: 100%;\n  width: 100%;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC9wYWdlcy9wb3J0YWwtZGF0YS9wb3J0YWwtZGF0YS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BvcnRhbC1kYXRhL3BvcnRhbC1kYXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9ydGFsLWRhdGEvcG9ydGFsLWRhdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgaWZyYW1lIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbn0iLCJpb24tY29udGVudCBpZnJhbWUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/portal-data/portal-data.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/portal-data/portal-data.page.ts ***!
  \*******************************************************/
/*! exports provided: PortalDataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalDataPage", function() { return PortalDataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let PortalDataPage = class PortalDataPage {
    constructor(route, domSanitize, platform, alertService, loadingCtrl, sharedService) {
        this.route = route;
        this.domSanitize = domSanitize;
        this.platform = platform;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.sharedService = sharedService;
        this.backbutton = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
    }
    ngOnInit() {
        this.page_title = this.route.snapshot.paramMap.get('title');
        this.url = this.route.snapshot.paramMap.get('url') + '?random=' + (new Date()).getTime();
        this.trusted_site = this.domSanitize.bypassSecurityTrustResourceUrl(this.url);
        console.log(this.trusted_site);
        this.showLoading();
    }
    ionViewWillEnter() {
        this.handleHardwareBackButton();
    }
    ionViewWillLeave() {
        this.backbutton.unsubscribe();
    }
    showLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create(this.sharedService.loadingOption);
            yield this.loading.present();
        });
    }
    onLoad() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loading.dismiss();
        });
    }
    onError() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loading.dismiss();
            yield this.alertService.presentAlert('Something Went Wrong', 'Cannot Proceed The Request');
        });
    }
    handleHardwareBackButton() {
        this.backbutton = this.platform.backButton.subscribe(() => {
            window.history.back();
        });
    }
};
PortalDataPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }
];
PortalDataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portal-data',
        template: __webpack_require__(/*! raw-loader!./portal-data.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/portal-data/portal-data.page.html"),
        styles: [__webpack_require__(/*! ./portal-data.page.scss */ "./src/app/pages/portal-data/portal-data.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
], PortalDataPage);



/***/ })

}]);
//# sourceMappingURL=pages-portal-data-portal-data-module-es2015.js.map