(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/search/search.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/search/search.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Riwayat Pengaduan Saya</ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"segment-toolbar\">\n    <ion-segment color=\"danger\" (ionChange)=\"segmentChanged($event)\">\n      <ion-segment-button [checked]=\"segment.value==1\" value=\"1\">\n        <ion-label class=\"ion-no-margin\">\n          <ion-icon name=\"timer\"></ion-icon> Proses\n        </ion-label>\n      </ion-segment-button>\n      <ion-segment-button [checked]=\"segment.value==2\" value=\"2\">\n        <ion-label class=\"ion-no-margin\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon> Selesai\n        </ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n\n  <ion-refresher pull-max=\"60\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-down\" pullingText=\"Pull to refresh\" refreshingSpinner=\"crescent\"\n      refreshingText=\"Refreshing...\"></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col *ngIf=\"lists.length == 0\" class=\"ion-no-padding-top\" size=\"12\" size-md=\"6\" size-xl=\"6\">\n      <div class=\"no-data\">\n        <ion-icon name=\"notifications-outline\"></ion-icon>\n        Pengaduan belum tersedia\n      </div>\n    </ion-col>\n    <ion-col class=\"ion-no-padding\" *ngIf=\"lists.length > 0\" size=\"12\" size-md=\"6\" size-xl=\"6\">\n      <ion-list *ngFor=\"let list of lists\" class=\"ion-no-padding\">\n        <ion-card>\n          <ion-card-header>\n            <ion-row>\n              <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-card-title class=\"category\">\n                  {{ list['kategori_name'] }}{{ list['subkategori_name']?' - '+list['subkategori_name']:'' }}\n                </ion-card-title>\n              </ion-col>\n              <ion-col class=\"ion-no-padding\">\n                <ion-card-subtitle>\n                  <h3>#{{list.no_tiket}}</h3>\n                  <ion-label>{{ converTime(list.tanggal) }}</ion-label>\n                </ion-card-subtitle>\n              </ion-col>\n              <ion-col class=\"ion-no-padding\">\n                <ion-card-subtitle class=\"ion-text-right\">\n                  <ion-chip [style.background]=\"list['color']\">{{ list['status_pengaduan'] }}</ion-chip>\n                </ion-card-subtitle>\n              </ion-col>\n            </ion-row>\n          </ion-card-header>\n          <ion-card-content (click)=\"seeDetail(list)\">\n            <ion-card-title class=\"topik\">\n              {{ list['topik'] }}\n            </ion-card-title>\n\n            <ion-item class=\"ion-text-wrap\" color=\"tertiary\" *ngIf=\"sharedService.getUserCache().status != 1\">\n                <ion-icon name=\"warning\" slot=\"start\" color=\"warning\"></ion-icon> <ion-text> Akun belum terverifikasi, pengaduan tidak dapat di proses</ion-text>\n            </ion-item>\n\n            <div class=\"uraian mt10\">\n              <ion-row>\n                <ion-col class=\"ion-no-padding\" *ngIf=\"list['file']\" size=\"12\">\n                  <img [src]=\"list['file']['fullpath']\" />\n                </ion-col>\n                <ion-col class=\"ion-no-padding ion-text-wrap\" size=\"12\">\n                  <p>{{ list['uraian'] | slice:0:180 }} ...</p>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-card-content>\n          <div class=\"button-group\">\n            <ion-row>\n              <ion-col class=\"ion-text-center ion-activatable\" (click)=\"seeDetail(list)\">\n                <ion-ripple-effect></ion-ripple-effect>\n                <span>\n                  <ion-icon name=\"ios-swap\"></ion-icon>\n                  {{ list.tanggapans_count }} Tindakan\n                </span>\n              </ion-col>\n              <ion-col class=\"ion-text-center ion-activatable\" (click)=\"seeDetail(list)\">\n                <ion-ripple-effect></ion-ripple-effect>\n                <span>\n                  <ion-icon name=\"ios-chatbubbles\"></ion-icon>\n                  {{ list.comments_count }} Komentar\n                </span>\n              </ion-col>\n              <ion-col class=\"ion-text-center ion-activatable\" (click)=\"addVote(list)\">\n                <ion-ripple-effect></ion-ripple-effect>\n                <ion-text [color]=\"voteColor(list['is_like'])\">\n                  <ion-icon name=\"ios-thumbs-up\"></ion-icon>\n                  {{ list.likes_count }} Dukungan\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-card>\n      </ion-list>\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"nextPage($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"circular\" loadingText=\"Loading...\"></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/search/search.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/pages/search/search.page.ts");







const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]
    }
];
let SearchPageModule = class SearchPageModule {
};
SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })
], SearchPageModule);



/***/ }),

/***/ "./src/app/pages/search/search.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #eeeeee;\n  font-family: Lato-Regular;\n  --ion-font-family: Lato-Regular;\n}\n\n.toolbar-segment {\n  --background: #eeeeee;\n  --border-style: none !important;\n  --border-color: transparent !important;\n  --color: var(--ion-color-light);\n  --ion-font-family: \"Lato-Regular\" !important;\n  font-family: \"Lato-Regular\" !important;\n}\n\n.list-md {\n  background: #eeeeee !important;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.list-ios {\n  background: #eeeeee !important;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  margin-bottom: 0px !important;\n}\n\nion-card {\n  --background: var(--ion-color-light);\n}\n\n.sc-ion-card-md-h {\n  margin-bottom: 1px !important;\n}\n\n.category {\n  margin-bottom: 5px;\n  color: var(--ion-color-step-550, #737373);\n}\n\n.user-avatar {\n  display: -webkit-box;\n  display: flex;\n}\n\n.user-avatar ion-avatar {\n  height: 48px;\n  width: 48px;\n  margin-bottom: 20px;\n}\n\n.user-avatar .user-name {\n  margin-left: 8px;\n}\n\n.user-avatar .user-name h3 {\n  font-size: 1rem;\n  font-weight: bolder;\n}\n\nion-card-title {\n  font-size: 1rem;\n  margin: 10px 0 10px;\n  font-weight: 500;\n}\n\n.button-group {\n  margin-left: 14px;\n  margin-right: 14px;\n  font-size: 0.8rem;\n  margin: 14px 0 14px 5px;\n}\n\n.button-group ion-icon {\n  font-size: 1rem;\n}\n\nion-chip {\n  color: #ffffff;\n}\n\nion-card-subtitle > h3 {\n  font-size: 0.8rem;\n  margin: 0;\n  color: var(--ion-color-danger, #f04141) !important;\n}\n\n.no-padding-top {\n  padding-top: 0 !important;\n}\n\n.no-padding-bottom {\n  padding-bottom: 0 !important;\n}\n\n.no-data {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.3);\n  font-size: 18px;\n  padding: 40px 15px 15px;\n}\n\nion-chip {\n  color: #ffffff;\n  height: 15px;\n  font-size: 0.7rem;\n}\n\n.uraian img {\n  width: 100%;\n  height: 250px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-refresher {\n  background: #eeeeee;\n}\n\n.topik {\n  font-weight: 600;\n  font-size: 1.2rem;\n}\n\nion-infinite-scroll {\n  margin-top: 10px;\n}\n\nion-chip {\n  font-size: 9px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNENBQUE7RUFDQSxzQ0FBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksb0NBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHlDQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNDSjs7QURDSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDUjs7QURFSTtFQUNJLGdCQUFBO0FDQVI7O0FERVE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNBWjs7QURLQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREdJO0VBQ0ksZUFBQTtBQ0RSOztBREtBO0VBQ0ksY0FBQTtBQ0ZKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0RBQUE7QUNESjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FER0E7RUFDRSw0QkFBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQVI7O0FESUE7RUFDRSxtQkFBQTtBQ0RGOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQgOiAjZWVlZWVlO1xuICAgIGZvbnQtZmFtaWx5IDogTGF0by1SZWd1bGFyO1xuICAgIC0taW9uLWZvbnQtZmFtaWx5IDogTGF0by1SZWd1bGFyO1xufVxuXG4udG9vbGJhci1zZWdtZW50IHtcbiAgICAtLWJhY2tncm91bmQgOiAjZWVlZWVlO1xuICAgIC0tYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAtLWlvbi1mb250LWZhbWlseTogXCJMYXRvLVJlZ3VsYXJcIiAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG8tUmVndWxhclwiICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LW1kIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3AgOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbSA6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1pb3Mge1xuICAgIGJhY2tncm91bmQ6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcCA6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tIDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgICAtLWJhY2tncm91bmQgOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4uc2MtaW9uLWNhcmQtbWQtaCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXRlZ29yeSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIzczNzM3Myk7XG59XG5cbi51c2VyLWF2YXRhciB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC51c2VyLW5hbWUge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYnV0dG9uLWdyb3VwIHtcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luOiAxNHB4IDAgMTRweCA1cHg7XG4gICAgaW9uLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG59XG5cbmlvbi1jaGlwIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbmlvbi1jYXJkLXN1YnRpdGxlID4gaDN7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjA0MTQxKSAhaW1wb3J0YW50O1xufVxuXG4ubm8tcGFkZGluZy10b3B7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4ubm8tcGFkZGluZy1ib3R0b217XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4ubm8tZGF0YXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDQwcHggMTVweCAxNXB4O1xufVxuXG5pb24tY2hpcCB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuXG4udXJhaWFue1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbn1cblxuaW9uLXJlZnJlc2hlcntcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcbn1cblxuLnRvcGlrIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5pb24taW5maW5pdGUtc2Nyb2xse1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tY2hpcCB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgLS1pb24tZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbn1cblxuLnRvb2xiYXItc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBcIkxhdG8tUmVndWxhclwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG8tUmVndWxhclwiICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LW1kIHtcbiAgYmFja2dyb3VuZDogI2VlZWVlZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtaW9zIHtcbiAgYmFja2dyb3VuZDogI2VlZWVlZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4uc2MtaW9uLWNhcmQtbWQtaCB7XG4gIG1hcmdpbi1ib3R0b206IDFweCAhaW1wb3J0YW50O1xufVxuXG4uY2F0ZWdvcnkge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsICM3MzczNzMpO1xufVxuXG4udXNlci1hdmF0YXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnVzZXItYXZhdGFyIGlvbi1hdmF0YXIge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnVzZXItYXZhdGFyIC51c2VyLW5hbWUge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLnVzZXItYXZhdGFyIC51c2VyLW5hbWUgaDMge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW46IDEwcHggMCAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYnV0dG9uLWdyb3VwIHtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbjogMTRweCAwIDE0cHggNXB4O1xufVxuLmJ1dHRvbi1ncm91cCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuaW9uLWNoaXAge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUgPiBoMyB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjA0MTQxKSAhaW1wb3J0YW50O1xufVxuXG4ubm8tcGFkZGluZy10b3Age1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4ubm8tcGFkZGluZy1ib3R0b20ge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4ubm8tZGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiA0MHB4IDE1cHggMTVweDtcbn1cblxuaW9uLWNoaXAge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLnVyYWlhbiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmlvbi1yZWZyZXNoZXIge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xufVxuXG4udG9waWsge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuaW9uLWluZmluaXRlLXNjcm9sbCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1jaGlwIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/search/search.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/search/search.page.ts ***!
  \*********************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common/common.service */ "./src/app/services/common/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let SearchPage = class SearchPage {
    constructor(sharedService, alertService, commonService, loadingCtrl) {
        this.sharedService = sharedService;
        this.alertService = alertService;
        this.commonService = commonService;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
        this.lists = [];
        this.segment = { value: 1 };
        this.iScroll = { enable: 1, page: 0 };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.showLoading();
        this.lists = [];
        this.iScroll.enable = 1;
        this.iScroll.page = 0;
        this.getUser();
    }
    getUser() {
        this.sharedService.getUser()
            .subscribe(data => {
            this.user = data;
            this.getMyList(this.user['id']);
        }, err => {
            this.commonService.presentAlert('Gagal memuat', 'Terjadi kesalahan saat memuat data');
        });
    }
    getMyList(user_id) {
        this.sharedService.myList(user_id, this.segment.value, this.iScroll.page)
            .subscribe(data => {
            console.log(data);
            this.lists = data['data'];
            this.loading.dismiss();
        }, err => {
            this.commonService.presentAlert('Gagal memuat', 'Terjadi kesalahan saat memuat data');
            this.loading.dismiss();
        });
    }
    doRefresh(event) {
        this.showLoading();
        this.iScroll.page = 0;
        this.iScroll.enable = 1;
        this.sharedService.myList(this.user['id'], this.segment.value, this.iScroll.page)
            .subscribe(data => {
            this.lists = data['data'];
            event.target.complete();
            this.loading.dismiss();
        }, err => {
            this.alertService.presentAlert('Terjadi Kesalahan', 'Tidak dapat memuat data');
            this.loading.dismiss();
        });
    }
    converTime(time) {
        moment__WEBPACK_IMPORTED_MODULE_4__["locale"]('id');
        let local_time = moment__WEBPACK_IMPORTED_MODULE_4__(time).fromNow();
        return local_time;
    }
    segmentChanged(ev) {
        this.showLoading();
        this.segment.value = ev.detail.value;
        // reset infinite scroll
        this.iScroll.page = 0;
        this.iScroll.enable = 1;
        this.getMyList(this.user['id']);
    }
    nextPage(event) {
        if (this.iScroll.enable) {
            this.iScroll.page++;
            this.sharedService.myList(this.user['id'], this.segment.value, this.iScroll.page)
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
    showLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create(this.sharedService.loadingOption);
            yield this.loading.present();
        });
    }
    voteColor(islike) {
        if (islike == null) {
            return "";
        }
        else {
            return "danger";
        }
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
    seeDetail(pengaduan) {
        this.sharedService.pengaduan = pengaduan;
        this.commonService.goForward(['detail-laporan/', pengaduan.id]);
    }
};
SearchPage.ctorParameters = () => [
    { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"])
], SearchPage.prototype, "infiniteScroll", void 0);
SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/search/search.page.html"),
        styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/pages/search/search.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
        src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
        src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])
], SearchPage);



/***/ })

}]);
//# sourceMappingURL=search-search-module-es2015.js.map