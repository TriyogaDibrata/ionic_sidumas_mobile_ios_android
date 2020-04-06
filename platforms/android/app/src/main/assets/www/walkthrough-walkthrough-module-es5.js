(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["walkthrough-walkthrough-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/walkthrough/walkthrough.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/walkthrough/walkthrough.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col class=\"no-padding-bottom\" size=\"12\" size-md=\"6\" size-xl=\"6\">\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" #wtslides (ionSlideWillChange)=\"doCheck()\">\n    <ion-slide>\n\n    <div class=\"wt-content\">\n      <div class=\"wt-img\">\n        <img src=\"assets/images/wt/wt-1.png\" />\n      </div>\n      <div class=\"wt-title lato-bold\">\n        <ion-text>Selamat Datang di</ion-text>\n        <ion-text color=\"danger\"> Layanan Aspirasi dan Pengaduan</ion-text>\n        <ion-text> Masyarakat Badung</ion-text>\n      </div>\n      <div class=\"wt-step lato-regular\">\n        <h3>Langkah 1</h3>\n        <ion-text>Buat akun dengan menggunakan email yang masih aktif</ion-text>\n      </div>\n    </div>\n      \n    </ion-slide>\n\n    <ion-slide>\n      \n      <div class=\"wt-content\">\n        <div class=\"wt-img\">\n          <img src=\"assets/images/wt/wt-2.png\" />\n        </div>\n        <div class=\"wt-title lato-bold\">\n          <ion-text color=\"danger\">SIDUMAS</ion-text>\n          <ion-text> Memastikan Pelapor adalah Masyarakat yang</ion-text>\n          <ion-text color=\"danger\"> Valid</ion-text>\n        </div>\n        <div class=\"wt-step lato-regular\">\n          <h3>Langkah 2</h3>\n          <ion-text>Lengkapi identitas diri anda pada halaman profile</ion-text>\n        </div>\n      </div>\n        \n      </ion-slide>\n\n      <ion-slide>\n      \n        <div class=\"wt-content\">\n          <div class=\"wt-img\">\n            <img src=\"assets/images/wt/wt-3.png\" />\n          </div>\n          <div class=\"wt-title lato-bold\">\n            <ion-text color=\"danger\">SIDUMAS</ion-text>\n            <ion-text> Siap Menerima</ion-text>\n            <ion-text color=\"danger\"> Pengaduan Anda</ion-text>\n          </div>\n          <div class=\"wt-step lato-regular\">\n            <h3>Langkah 3</h3>\n            <ion-text>Laporkan pengaduan anda pada menu lapor</ion-text>\n            <h3>\"<ion-text color=\"danger\">Jadilah Pelapor Yang Bijak</ion-text>\"</h3>\n            <ion-button color=\"danger\" shape=\"round\" (click)=\"finish()\">Mulai</ion-button>\n          </div>\n        </div>\n          \n        </ion-slide>\n  </ion-slides> \n\n</ion-col>\n</ion-row>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"ion-no-padding ion-activatable lato-bold\">\n    <ion-buttons slot=\"start\" *ngIf=\"!disablePrevBtn\" (click)=\"prevSlide()\">\n      <ion-button>\n        <ion-icon name=\"arrow-round-back\" color=\"dark\"></ion-icon>\n        <ion-text color=\"dark\">Prev</ion-text>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"!disableNextBtn\" (click)=\"nextSlide()\">\n      <ion-button>\n        <ion-text color=\"dark\">Next</ion-text>\n        <ion-icon name=\"arrow-round-forward\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/walkthrough/walkthrough.module.ts":
/*!***************************************************!*\
  !*** ./src/app/walkthrough/walkthrough.module.ts ***!
  \***************************************************/
/*! exports provided: WalkthroughPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function() { return WalkthroughPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _walkthrough_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walkthrough.page */ "./src/app/walkthrough/walkthrough.page.ts");







var routes = [
    {
        path: '',
        component: _walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughPage"]
    }
];
var WalkthroughPageModule = /** @class */ (function () {
    function WalkthroughPageModule() {
    }
    WalkthroughPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughPage"]]
        })
    ], WalkthroughPageModule);
    return WalkthroughPageModule;
}());



/***/ }),

/***/ "./src/app/walkthrough/walkthrough.page.scss":
/*!***************************************************!*\
  !*** ./src/app/walkthrough/walkthrough.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slide {\n  height: 92vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n          flex-direction: column-reverse;\n}\n\n.wt-content {\n  position: absolute;\n}\n\n.wt-img img {\n  max-width: 80%;\n  height: auto;\n}\n\n.wt-title {\n  padding: 16px;\n  font-weight: bolder;\n  color: #7e7e7e;\n  font-size: 16px;\n}\n\n.wt-step {\n  margin-top: 50px;\n  padding: 16px;\n  color: #7e7e7e;\n  font-size: 16px;\n}\n\n.wt-step h3 {\n  font-size: 16px;\n  font-weight: bolder;\n}\n\n.wt-step ion-button {\n  text-transform: capitalize;\n}\n\nion-footer ion-toolbar {\n  --background: transparent;\n  height: 8vh;\n}\n\nion-footer ion-toolbar ion-button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC93YWxrdGhyb3VnaC93YWxrdGhyb3VnaC5wYWdlLnNjc3MiLCJzcmMvYXBwL3dhbGt0aHJvdWdoL3dhbGt0aHJvdWdoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSw0QkFBQTtFQUFBLDhCQUFBO1VBQUEsOEJBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FESUk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0RSOztBREtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNGSjs7QURLQTtFQUtJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDTko7O0FEREk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNHUjs7QURJSTtFQUNJLDBCQUFBO0FDRlI7O0FET0k7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNKUjs7QURNUTtFQUNJLDBCQUFBO0FDSloiLCJmaWxlIjoic3JjL2FwcC93YWxrdGhyb3VnaC93YWxrdGhyb3VnaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xuICAgIGhlaWdodDogOTJ2aDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgXG59XG5cbi53dC1jb250ZW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnd0LWltZyB7XG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59XG5cbi53dC10aXRsZXtcbiAgICBwYWRkaW5nIDogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yIDogIzdlN2U3ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi53dC1zdGVwe1xuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIH1cbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHBhZGRpbmcgOiAxNnB4O1xuICAgIGNvbG9yIDogIzdlN2U3ZTtcbiAgICBmb250LXNpemUgOiAxNnB4O1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBoZWlnaHQ6IDh2aDtcblxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG4gICAgfVxufSIsImlvbi1zbGlkZSB7XG4gIGhlaWdodDogOTJ2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xufVxuXG4ud3QtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnd0LWltZyBpbWcge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ud3QtdGl0bGUge1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogIzdlN2U3ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ud3Qtc3RlcCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGNvbG9yOiAjN2U3ZTdlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ud3Qtc3RlcCBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi53dC1zdGVwIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogOHZoO1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */"

/***/ }),

/***/ "./src/app/walkthrough/walkthrough.page.ts":
/*!*************************************************!*\
  !*** ./src/app/walkthrough/walkthrough.page.ts ***!
  \*************************************************/
/*! exports provided: WalkthroughPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPage", function() { return WalkthroughPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var WalkthroughPage = /** @class */ (function () {
    function WalkthroughPage(storage, router) {
        this.storage = storage;
        this.router = router;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            allowSlidePrev: true,
            allowSlideNext: true,
        };
        this.disablePrevBtn = true;
        this.disableNextBtn = false;
    }
    WalkthroughPage.prototype.ngOnInit = function () {
    };
    WalkthroughPage.prototype.finish = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set('walkthroughComplete', true)];
                    case 1:
                        _a.sent();
                        this.router.navigateByUrl('/');
                        return [2 /*return*/];
                }
            });
        });
    };
    WalkthroughPage.prototype.nextSlide = function () {
        this.slides.slideNext();
    };
    WalkthroughPage.prototype.prevSlide = function () {
        this.slides.slidePrev();
    };
    WalkthroughPage.prototype.doCheck = function () {
        var _this = this;
        var prom1 = this.slides.isBeginning();
        var prom2 = this.slides.isEnd();
        Promise.all([prom1, prom2]).then(function (data) {
            data[0] ? _this.disablePrevBtn = true : _this.disablePrevBtn = false;
            data[1] ? _this.disableNextBtn = true : _this.disableNextBtn = false;
        });
    };
    WalkthroughPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wtslides', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
    ], WalkthroughPage.prototype, "slides", void 0);
    WalkthroughPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-walkthrough',
            template: __webpack_require__(/*! raw-loader!./walkthrough.page.html */ "./node_modules/raw-loader/index.js!./src/app/walkthrough/walkthrough.page.html"),
            styles: [__webpack_require__(/*! ./walkthrough.page.scss */ "./src/app/walkthrough/walkthrough.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WalkthroughPage);
    return WalkthroughPage;
}());



/***/ })

}]);
//# sourceMappingURL=walkthrough-walkthrough-module-es5.js.map