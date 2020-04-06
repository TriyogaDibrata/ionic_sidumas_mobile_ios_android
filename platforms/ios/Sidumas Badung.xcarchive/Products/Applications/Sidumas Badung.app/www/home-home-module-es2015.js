(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar *ngIf=\"search.active==0\">\n    <ion-title>SIDUMAS</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"toogleSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\" color=\"light\"></ion-icon>\n      </ion-button>\n      <ion-chip (click)=\"presentAlertConfirm()\" *ngIf=\"userhome.tipe == 1\">\n        <ion-icon name=\"log-out\" color=\"light\"></ion-icon>\n        <ion-label>Keluar</ion-label>\n      </ion-chip>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"search.active==1\">\n    <ion-searchbar (ionInput)=\"writeSearch($event)\" (search)=\"searchPengaduan($event)\"\n      placeholder=\"Pencarian, maks. 30 karakter\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"toogleSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n\n  <ion-refresher pull-max=\"60\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-down\" pullingText=\"Pull to refresh\" refreshingSpinner=\"crescent\" refreshingText=\"Refreshing...\"></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col class=\"no-padding-bottom\" size=\"12\" size-md=\"6\" size-xl=\"6\">\n\n      <ion-slides *ngIf=\"banners.length > 0\" pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let banner of banners\">\n          <img class=\"slide-img\" [src]=\"banner.url\" />\n          <div class=\"loading-slide\">\n            <div class=\"loading-slide-box\">\n                <!-- <div>\n                  <ion-spinner></ion-spinner>\n                </div> -->\n              <div class=\"loading-slide-text\">\n                Loading..\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n\n      <ion-segment class=\"category-segment\" scrollable color=\"danger\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button [checked]=\"category==''\" value=\"\">\n          <ion-label>Semua</ion-label>\n        </ion-segment-button>\n        <ion-segment-button *ngFor=\"let category of categories\" [checked]=\"category==category.kategori_id\"\n          value=\"{{category.kategori_id}}\">\n          <ion-label>{{category.name}}</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n      <div class=\"no-data\" *ngIf=\"lists.length == 0\">\n        <ion-icon name=\"notifications-outline\"></ion-icon>\n        Pengaduan belum tersedia\n      </div>\n\n      <ion-list *ngFor=\"let list of lists\">\n        <ion-card class=\"ion-no-padding\">\n          <ion-card-header class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col class=\"ion-no-padding\">\n                <ion-card-subtitle class=\"category-chip\">\n                  <ion-text class=\"text08\">\n                    {{ list['kategori_name'] }}\n                  </ion-text>\n                </ion-card-subtitle>\n              </ion-col>\n              <ion-col class=\"ion-no-padding\">\n                <ion-card-subtitle class=\"ion-text-right\">\n                  <ion-chip [style.background]=\"list['color']\">{{ list['status_pengaduan'] }}</ion-chip>\n                </ion-card-subtitle>\n              </ion-col>\n            </ion-row>\n          </ion-card-header>\n\n          <ion-card-content (click)=\"seeDetail(list)\">\n            <ion-card-title class=\"ion-text-wrap\">{{ list['topik'] }}</ion-card-title>\n\n            <div class=\"user-avatar\">\n              <ion-avatar item-left>\n                <img *ngIf=\"list['avatar'] != null\" [src]=\"list['avatar']\" />\n                <img *ngIf=\"list['avatar'] == null\" src=\"assets/icon/favicon.png\" />\n              </ion-avatar>\n              <div class=\"user-name\">\n                <h3>{{ list['pelapor'] }}</h3>\n                <ion-label>{{ converTime(list.tanggal) }}</ion-label>\n              </div>\n            </div>\n\n            <div class=\"uraian\">\n              <ion-row>\n                <ion-col *ngIf=\"list['file']\" size=\"12\" class=\"ion-no-padding\">\n                  <img [src]=\"list['file']['fullpath']\" width=\"100%\" height=\"250px\" />\n                </ion-col>\n                <ion-col class=\"ion-text-wrap ion-no-padding ion-margin-top\" size=12>\n                  <p>{{ list['uraian'] | slice:0:180 }} ...</p>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-card-content>\n          <div class=\"button-group\">\n            <ion-row>\n              <ion-col class=\"ion-text-center ion-activatable\" (click)=\"seeDetail(list)\">\n                <ion-ripple-effect></ion-ripple-effect>\n                <span>\n                  <ion-icon name=\"ios-swap\"></ion-icon>\n                  {{ list.tanggapans_count }} Tindakan\n                </span>\n              </ion-col>\n              <ion-col class=\"ion-text-center ion-activatable\" (click)=\"seeDetail(list)\">\n                <ion-ripple-effect></ion-ripple-effect>\n                <span>\n                  <ion-icon name=\"ios-chatbubbles\"></ion-icon>\n                  {{ list.comments_count }} Komentar\n                </span>\n              </ion-col>\n              <ion-col class=\"ion-text-center ion-activatable\" (click)=\"addVote(list)\">\n                <ion-ripple-effect></ion-ripple-effect>\n                <ion-text [color]=\"voteColor(list['is_like'])\">\n                  <ion-icon name=\"ios-thumbs-up\"></ion-icon>\n                  {{ list.likes_count }} Dukungan\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-card>\n      </ion-list>\n\n    </ion-col>\n  </ion-row>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"circular\" loadingText=\"Loading...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #eeeeee;\n  font-family: Lato-Regular;\n  --ion-font-family: Lato-Regular;\n}\n\n.user-avatar {\n  display: -webkit-box;\n  display: flex;\n  margin: 5px 0 5px;\n}\n\n.user-avatar ion-avatar {\n  height: 38px;\n  width: 38px;\n}\n\n.user-avatar .user-name {\n  margin-left: 8px;\n}\n\n.user-avatar .user-name h3 {\n  font-size: 14px;\n  font-weight: bolder;\n  color: #525252;\n}\n\n.user-avatar .user-name ion-label {\n  margin-top: 2px !important;\n  font-size: 12px;\n}\n\nion-card-title {\n  font-size: 1.05rem;\n  margin: 10px 0 10px;\n  font-weight: 500;\n  font-family: Lato-Bold !important;\n  --ion-font-family: Lato-Bold !important;\n}\n\n.button-group {\n  margin-left: 14px;\n  margin-right: 14px;\n  font-size: 0.8rem;\n  margin: 14px 0 14px 5px;\n}\n\nion-chip {\n  color: #ffffff;\n  height: 18px;\n  font-size: 0.8rem;\n}\n\nion-segment {\n  padding-top: 10px;\n  padding-bottom: 5px;\n}\n\nion-segment-button {\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --indicator-color-checked: rgba(0,0,0,0) !important;\n  border: 1px solid #737373;\n  border-radius: 100px;\n  margin-right: 2px;\n  margin-left: 2px;\n  min-height: 0;\n  line-height: normal;\n}\n\nion-segment-button.segment-button-checked {\n  border-color: var(--ion-color-danger, #f04141) !important;\n}\n\nion-label {\n  margin-top: 7px !important;\n  margin-bottom: 7px !important;\n}\n\n.no-padding-top {\n  padding-top: 0 !important;\n}\n\n.no-padding-bottom {\n  padding-bottom: 0 !important;\n}\n\n.no-data {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.3);\n  font-size: 18px;\n  padding: 40px 15px 15px;\n}\n\n.swiper-pagination-bullet-active {\n  background: red !important;\n}\n\nion-slides {\n  --bullet-background-active: red !important;\n  border-radius: 5px;\n}\n\n.slide-img {\n  z-index: 1;\n  position: absolute;\n  top: 0 !important;\n  left: 0 !important;\n  max-height: 100px;\n}\n\n.loading-slide {\n  height: 100px;\n  display: table;\n}\n\n.loading-slide-box {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.loading-slide-text {\n  font-style: italic;\n  font-size: 12px;\n}\n\n.category-chip {\n  font-size: 16px;\n  padding-top: 4px;\n}\n\n.uraian img {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.uraian p {\n  font-size: 0.9rem;\n  color: #000000;\n}\n\n.list-md {\n  background: #eeeeee !important;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.list-ios {\n  background-color: #eeeeee !important;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  margin-bottom: 0px !important;\n}\n\nion-card {\n  --background: #ffffff;\n}\n\n.sc-ion-card-md-h {\n  margin-bottom: 1px !important;\n}\n\nion-card-header {\n  padding: 10px 16px 0px 16px;\n}\n\nion-refresher {\n  background: #eeeeee;\n}\n\nion-infinite-scroll {\n  margin-top: 10px;\n}\n\nion-chip {\n  font-size: 9px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDUjs7QURFSTtFQUNJLGdCQUFBO0FDQVI7O0FERVE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQVo7O0FERVE7RUFDSSwwQkFBQTtFQUNBLGVBQUE7QUNBWjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7QUNGSjs7QURLQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FESUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbURBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0RGOztBREdBO0VBQ0UseURBQUE7QUNBRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQUE7RUFDRSw0QkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0lGOztBRERBO0VBQ0UsMEJBQUE7QUNJRjs7QUREQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURGQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0tGOztBREhBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUNNRjs7QURKQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ1FGOztBRE5BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDU0Y7O0FETEU7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0FDUUo7O0FETEU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNPSjs7QURIQTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ01GOztBREhBO0VBQ0Usb0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUNNRjs7QURIQTtFQUNFLHFCQUFBO0FDTUY7O0FESEE7RUFDRSw2QkFBQTtBQ01GOztBREhBO0VBQ0UsMkJBQUE7QUNNRjs7QURIQTtFQUNFLG1CQUFBO0FDTUY7O0FESEE7RUFDRSxnQkFBQTtBQ01GOztBREhBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZCA6ICNlZWVlZWU7XG4gIGZvbnQtZmFtaWx5IDogTGF0by1SZWd1bGFyO1xuICAtLWlvbi1mb250LWZhbWlseSA6IExhdG8tUmVndWxhcjtcbn1cblxuLnVzZXItYXZhdGFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogNXB4IDAgNXB4O1xuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgd2lkdGg6IDM4cHg7XG4gICAgfVxuXG4gICAgLnVzZXItbmFtZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjNTI1MjUyO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIG1hcmdpbjogMTBweCAwIDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LWZhbWlseTogTGF0by1Cb2xkICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6IExhdG8tQm9sZCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWdyb3VwIHtcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luOiAxNHB4IDAgMTRweCA1cHg7XG59XG5cbmlvbi1jaGlwIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbmlvbi1zZWdtZW50e1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbntcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiByZ2JhKDAsMCwwLDApICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MzczNzM7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWluLWhlaWdodDogMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2Vke1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNmMDQxNDEpICFpbXBvcnRhbnQ7XG59XG5pb24tbGFiZWx7XG4gIG1hcmdpbi10b3A6IDdweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA3cHggIWltcG9ydGFudDtcbn1cbi5uby1wYWRkaW5nLXRvcHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbn1cbi5uby1wYWRkaW5nLWJvdHRvbXtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi5uby1kYXRhe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogNDBweCAxNXB4IDE1cHg7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZXN7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiByZWQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnNsaWRlLWltZ3tcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cbi5sb2FkaW5nLXNsaWRle1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5sb2FkaW5nLXNsaWRlLWJveHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5sb2FkaW5nLXNsaWRlLXRleHR7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNhdGVnb3J5LWNoaXB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLnVyYWlhbiB7XG4gIGltZ3tcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gIHB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbn1cblxuLmxpc3QtbWQge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wIDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tIDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LWlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3AgOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b20gOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kIDogI2ZmZmZmZjtcbn1cblxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICBtYXJnaW4tYm90dG9tOiAxcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAxNnB4IDBweCAxNnB4O1xufVxuXG5pb24tcmVmcmVzaGVye1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xufVxuXG5pb24taW5maW5pdGUtc2Nyb2xse1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tY2hpcCB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAtLWlvbi1mb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuXG4udXNlci1hdmF0YXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDVweCAwIDVweDtcbn1cbi51c2VyLWF2YXRhciBpb24tYXZhdGFyIHtcbiAgaGVpZ2h0OiAzOHB4O1xuICB3aWR0aDogMzhweDtcbn1cbi51c2VyLWF2YXRhciAudXNlci1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi51c2VyLWF2YXRhciAudXNlci1uYW1lIGgzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogIzUyNTI1Mjtcbn1cbi51c2VyLWF2YXRhciAudXNlci1uYW1lIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBtYXJnaW46IDEwcHggMCAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogTGF0by1Cb2xkICFpbXBvcnRhbnQ7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBMYXRvLUJvbGQgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1ncm91cCB7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW46IDE0cHggMCAxNHB4IDVweDtcbn1cblxuaW9uLWNoaXAge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiAxOHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiByZ2JhKDAsMCwwLDApICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MzczNzM7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWluLWhlaWdodDogMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNmMDQxNDEpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDdweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA3cHggIWltcG9ydGFudDtcbn1cblxuLm5vLXBhZGRpbmctdG9wIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLm5vLXBhZGRpbmctYm90dG9tIHtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLm5vLWRhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogNDBweCAxNXB4IDE1cHg7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogcmVkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNsaWRlLWltZyB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG59XG5cbi5sb2FkaW5nLXNsaWRlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5sb2FkaW5nLXNsaWRlLWJveCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sb2FkaW5nLXNsaWRlLXRleHQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNhdGVnb3J5LWNoaXAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi51cmFpYW4gaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4udXJhaWFuIHAge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5saXN0LW1kIHtcbiAgYmFja2dyb3VuZDogI2VlZWVlZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtaW9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uc2MtaW9uLWNhcmQtbWQtaCB7XG4gIG1hcmdpbi1ib3R0b206IDFweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDE2cHggMHB4IDE2cHg7XG59XG5cbmlvbi1yZWZyZXNoZXIge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xufVxuXG5pb24taW5maW5pdGUtc2Nyb2xsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWNoaXAge1xuICBmb250LXNpemU6IDlweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var src_app_services_env_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/env/env.service */ "./src/app/services/env/env.service.ts");
/* harmony import */ var src_app_services_auht_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auht/auth.service */ "./src/app/services/auht/auth.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common/common.service */ "./src/app/services/common/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var src_app_components_home_popover_home_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/home-popover/home-popover.component */ "./src/app/components/home-popover/home-popover.component.ts");










let HomePage = class HomePage {
    constructor(sharedService, env, authService, commonService, alertCtrl, alertService, loadingCtrl, popoverCtrl) {
        this.sharedService = sharedService;
        this.env = env;
        this.authService = authService;
        this.commonService = commonService;
        this.alertCtrl = alertCtrl;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.lists = [];
        this.userhome = {};
        this.categories = [];
        this.category = "";
        this.search = { active: 0, limit: 30, value: '' };
        this.iScroll = { enable: 1, page: 0 };
        this.slideOpts = {
            initialSlide: 0,
            loop: true,
            autoplay: {
                delay: 3000,
            },
            speed: 400
        };
        this.banners = [];
    }
    ngOnInit() {
        setTimeout(() => {
            this.showPopover();
        }, 1500);
        this.getBanners();
    }
    ionViewWillEnter() {
        this.showLoading();
        this.lists = [];
        this.iScroll.page = 0;
        this.getMenuCategories();
        this.getUser();
        this.getListPengaduan();
    }
    seeDetail(pengaduan) {
        this.sharedService.pengaduan = pengaduan;
        this.commonService.goForward(['detail-laporan/', pengaduan.id]);
    }
    getListPengaduan() {
        this.sharedService.getListPengaduan(this.category, this.search.value, this.iScroll.page)
            .subscribe(data => {
            console.log(data);
            this.lists = data['data'];
            this.loading.dismiss();
        });
    }
    getMenuCategories() {
        if (this.categories.length == 0) {
            this.sharedService.getMenuCategories()
                .subscribe(data => {
                this.categories = data;
            });
        }
    }
    doRefresh(event) {
        this.iScroll.page = 0;
        this.iScroll.enable = 1;
        this.sharedService.getListPengaduan(this.category, this.search.value, this.iScroll.page)
            .subscribe(data => {
            this.lists = data['data'];
            event.target.complete();
            this.loading.dismiss();
        }, err => {
            this.loading.dismiss();
            this.alertService.presentAlert('Terjadi Kesalahan', 'Tidak dapat memuat data');
        });
    }
    converTime(time) {
        moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('id');
        let local_time = moment__WEBPACK_IMPORTED_MODULE_5__(time).fromNow();
        return local_time;
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Perhatian!',
                message: 'Apakah anda yakin ingin keluar ?',
                buttons: [
                    {
                        text: 'Batal',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ya',
                        handler: () => {
                            this.logout();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    logout() {
        this.authService.logout();
    }
    getUser() {
        this.userhome = this.sharedService.getUserCache();
    }
    addVote(pengaduan) {
        let data = {
            'user_id': this.sharedService.getUserCache().id,
            'pengaduan_id': pengaduan.id,
        };
        this.sharedService.addVote(data)
            .subscribe(data => {
            if (data['success'] && data['new_user']) {
                pengaduan.likes_count++;
                pengaduan.is_like = 1;
            }
            else if (data['success'] && !data['new_user']) {
                pengaduan.likes_count--;
                pengaduan.is_like = null;
            }
            else {
                this.alertService.presentAlert('Gagal Menyimpan Data', 'Terjadi kesalahan saat menyimpan data');
            }
        }, err => {
            this.alertService.presentAlert('Gagal Menyimpan Data', 'Terjadi kesalahan saat menyimpan data');
        });
    }
    segmentChanged(ev) {
        this.showLoading();
        this.category = ev.detail.value;
        this.getListPengaduan();
        this.iScroll.page = 0;
        this.iScroll.enable = 1;
    }
    toogleSearch() {
        if (this.search.active == 1) {
            this.showLoading();
            this.search.active = 0;
            this.search.value = '';
            this.getListPengaduan();
        }
        else {
            this.search.active = 1;
        }
    }
    loadData(event) {
        if (this.iScroll.enable) {
            this.iScroll.page++;
            this.sharedService.getListPengaduan(this.category, this.search.value, this.iScroll.page)
                .subscribe((data) => {
                if (data['count'] > 0) {
                    this.transformData(data['data']);
                }
                else {
                    this.iScroll.enable = 0;
                }
                event.target.complete();
            }, err => {
                this.commonService.presentAlert('Gagal memuat', 'Terjadi kesalahan saat memuat data');
            });
        }
        else {
            event.target.complete();
        }
    }
    transformData(rows) {
        rows.forEach((data) => {
            this.lists.push(data);
        });
    }
    searchPengaduan(ev) {
        this.showLoading();
        this.getListPengaduan();
    }
    writeSearch(ev) {
        if (ev.target.value.length > this.search.limit) {
            ev.target.value = this.search.value;
            return false;
        }
        this.search.value = ev.target.value;
    }
    showLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create(this.sharedService.loadingOption);
            yield this.loading.present();
        });
    }
    getBanners() {
        if (this.sharedService.banners.get == 0) {
            this.sharedService.getBanners(this.sharedService.versionNumber, this.sharedService.versionCode)
                .subscribe(data => {
                this.sharedService.banners.get = 1;
                this.sharedService.banners = data;
                this.banners = this.sharedService.banners.data;
            });
        }
        else {
            this.banners = this.sharedService.banners.data;
        }
    }
    voteColor(islike) {
        if (islike == null) {
            return "";
        }
        else {
            return "danger";
        }
    }
    showPopover() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.sharedService.banners.popover);
            if (this.sharedService.banners.get == 0) {
                setTimeout(() => {
                    this.showPopover();
                }, 2000);
            }
            else {
                if (this.sharedService.banners.popover != null) {
                    const popover = yield this.popoverCtrl.create({
                        component: src_app_components_home_popover_home_popover_component__WEBPACK_IMPORTED_MODULE_9__["HomePopoverComponent"],
                        animated: true,
                        showBackdrop: true
                    });
                    return yield popover.present();
                }
                return null;
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: src_app_services_env_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] },
    { type: src_app_services_auht_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"])
], HomePage.prototype, "infiniteScroll", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
        src_app_services_env_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"],
        src_app_services_auht_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map