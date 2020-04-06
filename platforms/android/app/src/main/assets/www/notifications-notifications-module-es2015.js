(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/notifications/notifications.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/notifications/notifications.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Pemberitahuan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-down\" pullingText=\"Pull to refresh\" refreshingSpinner=\"crescent\" refreshingText=\"Refreshing...\"></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list class=\"ion-no-padding\">\n    <ion-row *ngIf=\"notifs.length == 0\" class=\"notif\">\n      <ion-col class=\"no-padding-top\" size=\"12\" size-md=\"6\" size-xl=\"6\">\n        <div class=\"no-data\">\n          <ion-icon name=\"notifications-outline\"></ion-icon>\n          Pemberitahuan belum tersedia\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"notif\" *ngFor=\"let notif of notifs\">\n      <ion-col *ngIf=\"notif.group\" class=\"notif-divider\" size=\"12\">\n        {{notif.mmmmyy}}\n      </ion-col>\n      <ion-col class=\"notif-date\" size=\"2\" (click)=\"redirectTo(notif.redirect_mobile)\">\n        {{notif.ddmmm}}\n      </ion-col>\n      <ion-col class=\"notif-label\" size=\"10\" (click)=\"redirectTo(notif.redirect_mobile)\">\n        <ion-text *ngIf=\"notif.tipe==0 && notif.user!=null\" class=\"notif-name\" color=\"dark\">{{notif.user}}</ion-text>\n        <ion-text *ngIf=\"notif.tipe==1 && notif.admin_user!=null\" class=\"notif-name\" color=\"dark\">{{notif.admin_user}}</ion-text>\n        {{notif.title}}\n      </ion-col>\n    </ion-row>\n  </ion-list>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"nextPage($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"circular\" loadingText=\"Loading...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/notifications/notifications.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/pages/notifications/notifications.page.ts");







const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })
], NotificationsPageModule);



/***/ }),

/***/ "./src/app/pages/notifications/notifications.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  font-family: Lato-Regular;\n  --ion-font-family: Lato-Regular;\n}\n\n.notif {\n  border-bottom: 1px solid #EEEEEE;\n}\n\n.notif-date {\n  padding: 15px 5px;\n  color: #949292;\n  text-align: center;\n}\n\n.notif-label {\n  padding: 15px 5px;\n}\n\n.notif-divider {\n  color: #252424;\n  background-color: #EEEEEE;\n  font-weight: bold;\n  padding: 10px;\n}\n\n.no-padding-top {\n  padding-top: 0 !important;\n}\n\n.no-padding-bottom {\n  padding-bottom: 0 !important;\n}\n\n.no-data {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.3);\n  font-size: 18px;\n  padding: 40px 15px 15px;\n}\n\nion-refresher {\n  background: #ffffff;\n}\n\nion-text.notif-name {\n  font-weight: bold;\n  display: block;\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtBQ0dGOztBRERBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDSUY7O0FEREE7RUFDRSx5QkFBQTtBQ0lGOztBREZBO0VBQ0UsNEJBQUE7QUNLRjs7QURIQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNNRjs7QURKQTtFQUNFLG1CQUFBO0FDT0Y7O0FETEE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICBmb250LWZhbWlseSA6IExhdG8tUmVndWxhcjtcbiAgLS1pb24tZm9udC1mYW1pbHkgOiBMYXRvLVJlZ3VsYXI7XG59XG5cbi5ub3RpZntcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUVFRUU7XG59XG4ubm90aWYtZGF0ZXtcbiAgcGFkZGluZzogMTVweCA1cHg7XG4gIGNvbG9yOiAjOTQ5MjkyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubm90aWYtbGFiZWx7XG4gIHBhZGRpbmc6IDE1cHggNXB4O1xufVxuLm5vdGlmLWRpdmlkZXJ7XG4gIGNvbG9yOiAjMjUyNDI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm5vLXBhZGRpbmctdG9we1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuLm5vLXBhZGRpbmctYm90dG9te1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLm5vLWRhdGF7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiA0MHB4IDE1cHggMTVweDtcbn1cbmlvbi1yZWZyZXNoZXJ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5pb24tdGV4dC5ub3RpZi1uYW1le1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuIiwiaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAtLWlvbi1mb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuXG4ubm90aWYge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRUVFRTtcbn1cblxuLm5vdGlmLWRhdGUge1xuICBwYWRkaW5nOiAxNXB4IDVweDtcbiAgY29sb3I6ICM5NDkyOTI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5vdGlmLWxhYmVsIHtcbiAgcGFkZGluZzogMTVweCA1cHg7XG59XG5cbi5ub3RpZi1kaXZpZGVyIHtcbiAgY29sb3I6ICMyNTI0MjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubm8tcGFkZGluZy10b3Age1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4ubm8tcGFkZGluZy1ib3R0b20ge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4ubm8tZGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiA0MHB4IDE1cHggMTVweDtcbn1cblxuaW9uLXJlZnJlc2hlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbmlvbi10ZXh0Lm5vdGlmLW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/notifications/notifications.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.ts ***!
  \***********************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ "./src/app/services/common/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");








let NotificationsPage = class NotificationsPage {
    constructor(sharedService, commonService, loadingCtrl, alertCtrl, alertService) {
        this.sharedService = sharedService;
        this.commonService = commonService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.alertService = alertService;
        this.notifs = [];
        this.user = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.showLoading();
        this.notifs = [];
        this.page = this.lastMonth = 0;
        this.infiniteScrollEnable = 1;
        this.getUser();
    }
    firstNotifs(id) {
        this.sharedService.getNotifs(id, this.page, 1)
            .subscribe((data) => {
            if (data.length > 0) {
                this.transformData(data);
            }
            this.sharedService.notif.news = 0;
            this.loading.dismiss();
        }, err => {
            this.alertService.presentAlert('Gagal memuat data', 'Terdapat kesalahan saat memuat data');
        });
    }
    doRefresh(event) {
        this.page = this.lastMonth = 0;
        this.sharedService.getNotifs(this.user.id, this.page, 1)
            .subscribe((data) => {
            this.notifs = [];
            this.infiniteScrollEnable = 1;
            if (data.length > 0) {
                this.transformData(data);
            }
            this.sharedService.notif.news = 0;
            this.loading.dismiss();
            event.target.complete();
        }, err => {
            event.target.complete();
            this.alertService.presentAlert('Gagal memuat data', 'Terdapat kesalahan saat memuat data');
        });
    }
    nextPage(event) {
        if (this.infiniteScrollEnable) {
            this.page++;
            this.sharedService.getNotifs(this.user.id, this.page)
                .subscribe((data) => {
                if (data.length > 0) {
                    this.transformData(data);
                }
                else {
                    this.infiniteScrollEnable = 0;
                }
                event.target.complete();
            }, err => {
                console.log(err);
            });
        }
        else {
            event.target.complete();
        }
    }
    transformData(rows) {
        moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('id');
        rows.forEach((data) => {
            let date = moment__WEBPACK_IMPORTED_MODULE_5__(data.created_at, 'YYYY-MM-DD HH:mm:ss');
            data.mmmmyy = date.format('MMMM YY');
            data.ddmmm = date.format('DD MMM');
            data.group = 0;
            if (this.lastMonth != date.month()) {
                data.group = 1;
                this.lastMonth = date.month();
            }
            data.title = this.capitalizeFirstLetter(data.title);
            this.notifs.push(data);
        });
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    getUser() {
        this.user = this.sharedService.getUserCache();
        this.firstNotifs(this.user.id);
    }
    showLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create(this.sharedService.loadingOption);
            yield this.loading.present();
        });
    }
    redirectTo(page) {
        if (page != null) {
            this.commonService.goForward(page);
        }
    }
};
NotificationsPage.ctorParameters = () => [
    { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
], NotificationsPage.prototype, "infiniteScroll", void 0);
NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/notifications/notifications.page.html"),
        styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/pages/notifications/notifications.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
        src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
], NotificationsPage);



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map