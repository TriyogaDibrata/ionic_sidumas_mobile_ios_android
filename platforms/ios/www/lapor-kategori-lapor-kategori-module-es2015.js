(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lapor-kategori-lapor-kategori-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/lapor-kategori/lapor-kategori.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/lapor-kategori/lapor-kategori.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Pilih Kategori Pengaduan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-row class=\"ion-justify-content-center\" no-padding>\n    <ion-col size=\"12\" size-md=\"6\" size-xl=\"6\" no-padding>\n\n      <div *ngFor=\"let cat of kategori\">\n        <div class=\"divider-top\"></div>\n        <div class=\"category-wrapper ion-padding\">\n\n          <ion-item-divider class=\"ion-no-padding\">\n            <ion-label class=\"bold\">\n              {{ cat.name }}\n            </ion-label>\n          </ion-item-divider>\n\n          <ion-row class=\"frame-btn\">\n            <ion-col *ngFor=\"let child of cat.child\" size=\"{{child.size}}\" class=\"ion-text-center ion-no-padding ion-activatable\"\n            (click)=\"goToLapor(child.kategori_id, child.event)\">\n            <div [ngStyle]=\"{'background-color': child.bgcolor, 'color': child.color, 'border-radius': child.radius}\" class=\"btn-cat\">\n              <ion-ripple-effect></ion-ripple-effect>\n              <ion-img [src]=\"child.iconurl\" class=\"icon-img\"></ion-img>\n              <ion-label class=\"text08\">\n                {{ child.name }}\n              </ion-label>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n      </div>\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/lapor-kategori/lapor-kategori.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/lapor-kategori/lapor-kategori.module.ts ***!
  \***************************************************************/
/*! exports provided: LaporKategoriPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaporKategoriPageModule", function() { return LaporKategoriPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lapor_kategori_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lapor-kategori.page */ "./src/app/pages/lapor-kategori/lapor-kategori.page.ts");







const routes = [
    {
        path: '',
        component: _lapor_kategori_page__WEBPACK_IMPORTED_MODULE_6__["LaporKategoriPage"]
    }
];
let LaporKategoriPageModule = class LaporKategoriPageModule {
};
LaporKategoriPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_lapor_kategori_page__WEBPACK_IMPORTED_MODULE_6__["LaporKategoriPage"]]
    })
], LaporKategoriPageModule);



/***/ }),

/***/ "./src/app/pages/lapor-kategori/lapor-kategori.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/lapor-kategori/lapor-kategori.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  font-family: Lato-Regular;\n  --ion-font-family: Lato-Regular;\n}\n\nion-item-divider {\n  --background: #ffffff;\n}\n\n.category-wrapper ion-img {\n  height: 60px;\n  width: auto;\n  margin: 8px;\n  padding: 5px;\n}\n\n.divider-top {\n  background-color: #EEEEEE;\n  height: 10px;\n}\n\n.btn-cat {\n  margin: 2px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.frame-btn {\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC9wYWdlcy9sYXBvci1rYXRlZ29yaS9sYXBvci1rYXRlZ29yaS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhcG9yLWthdGVnb3JpL2xhcG9yLWthdGVnb3JpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FER0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQVI7O0FESUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFwb3Ita2F0ZWdvcmkvbGFwb3Ita2F0ZWdvcmkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgZm9udC1mYW1pbHkgOiBMYXRvLVJlZ3VsYXI7XG4gICAgLS1pb24tZm9udC1mYW1pbHkgOiBMYXRvLVJlZ3VsYXI7XG59XG5cbmlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZCA6ICNmZmZmZmY7XG59XG5cbi5jYXRlZ29yeS13cmFwcGVye1xuICAgIGlvbi1pbWd7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIG1hcmdpbiA6IDhweDtcbiAgICAgICAgcGFkZGluZyA6IDVweDtcbiAgICB9XG59XG5cbi5kaXZpZGVyLXRvcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICAgIGhlaWdodDogMTBweDtcbn1cblxuLmJ0bi1jYXR7ICAgIFxuICAgIG1hcmdpbjogMnB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmZyYW1lLWJ0bntcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuIiwiaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAtLWlvbi1mb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuXG5pb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uY2F0ZWdvcnktd3JhcHBlciBpb24taW1nIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiA4cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmRpdmlkZXItdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuXG4uYnRuLWNhdCB7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uZnJhbWUtYnRuIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/lapor-kategori/lapor-kategori.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/lapor-kategori/lapor-kategori.page.ts ***!
  \*************************************************************/
/*! exports provided: LaporKategoriPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaporKategoriPage", function() { return LaporKategoriPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var src_app_services_auht_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auht/auth.service */ "./src/app/services/auht/auth.service.ts");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");








let LaporKategoriPage = class LaporKategoriPage {
    constructor(navCtrl, router, route, sharedService, authService, loadingCtrl, alertService, callNumber) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertService = alertService;
        this.callNumber = callNumber;
        this.allowed_user = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.checkUser();
        this.getKategori();
    }
    showLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create(this.sharedService.loadingOption);
            yield this.loading.present();
        });
    }
    goToLapor(id, event) {
        if (event) {
            let event_detail = event.split(',');
            if (event_detail[0] == 'call_number') {
                this.callNumber.callNumber(event_detail[1], true)
                    .then(res => console.log('Launched Dialer', res))
                    .catch(err => this.alertService.presentAlert('Terjadi Kesalahan', err));
            }
            else if (event_detail[0] == 'open_page') {
                this.navCtrl.navigateForward([event_detail[1], event_detail[3], event_detail[2]]);
            }
            else {
                console.log('no event');
            }
        }
        else {
            if (this.allowed_user) {
                this.navCtrl.navigateForward(['/lapor', id]);
            }
            else {
                this.alertService.presentAlert('Data Diri Belum Lengkap', 'Anda hanya akan bisa melapor apabila data diri anda sudah lengkap');
                this.navCtrl.navigateRoot('app/tabs/profile');
            }
        }
    }
    getKategori() {
        this.sharedService.getKategori()
            .subscribe(data => {
            this.kategori = data;
        });
    }
    checkUser() {
        this.user = this.sharedService.getUserCache();
        console.log(this.user['id']);
        this.showLoading();
        this.sharedService.checkUser(this.user['id'])
            .subscribe(data => {
            if (!data['success']) {
                this.loading.dismiss();
                return this.allowed_user = false;
            }
            else {
                this.loading.dismiss();
                return this.allowed_user = true;
            }
        });
    }
};
LaporKategoriPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: src_app_services_auht_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"] }
];
LaporKategoriPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lapor-kategori',
        template: __webpack_require__(/*! raw-loader!./lapor-kategori.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/lapor-kategori/lapor-kategori.page.html"),
        styles: [__webpack_require__(/*! ./lapor-kategori.page.scss */ "./src/app/pages/lapor-kategori/lapor-kategori.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        src_app_services_auht_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"]])
], LaporKategoriPage);



/***/ })

}]);
//# sourceMappingURL=lapor-kategori-lapor-kategori-module-es2015.js.map