(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-laporan-detail-laporan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/detail-laporan/detail-laporan.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/detail-laporan/detail-laporan.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Pengaduan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content class=\"ion-no-padding\">\n  <ion-refresher pull-max=\"60\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-down\" pullingText=\"Pull to refresh\" refreshingSpinner=\"crescent\"\n      refreshingText=\"Refreshing...\"></ion-refresher-content>\n  </ion-refresher>\n  <ion-row class=\"ion-justify-content-center ion-no-padding\" *ngIf=\"data\">\n    <ion-col size=\"12\" size-md=\"6\" size-xl=\"6\" class=\"ion-no-padding\">\n      <div class=\"info-badge\" *ngIf=\"statusShow === 1\" [hidden]=\"hide_info\">\n        <ion-row>\n          <ion-col size=\"11\">\n            Pengaduan ini dibuat oleh user yang belum terverifikasi\n          </ion-col>\n          <ion-col size=\"1\">\n            <ion-icon class=\"mt10\" name=\"close-circle\" (click)=\"closeTag()\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"content-wrapper\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-avatar>\n              <img *ngIf=\"data.avatar\" [src]=\"data.avatar\" />\n              <img *ngIf=\"!data.avatar\" src=\"https://sidumas.badungkab.go.id/assets/frontpage/anon_user.png\" />\n            </ion-avatar>\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-row class=\"name-wrapper\">\n              <ion-col size=\"12\" class=\"mt3\">\n                <ion-text class=\"bold text1\">\n                  {{ data.pelapor }}\n                  <br />\n                  <ion-text color=\"medium\" class=\"text07\"> ID : #{{ data.no_tiket }} | {{ converTime(data.tanggal) }}\n                  </ion-text>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-button fill=\"clear\" color=\"medium\" (click)=\"presentAlertMultipleButtons(sharedService.getUserCache().id, data)\">\n              <ion-icon name=\"more\" slot=\"icon-only\">\n              </ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n        <div class=\"image\">\n          <ion-slides pager=\"true\" [options]=\"slideOpts\" *ngIf=\"files\" scrollbarr=\"true\" pager=\"true\">\n            <ion-slide *ngFor=\"let file of files\">\n              <img [src]=\"file.fullpath\">\n            </ion-slide>\n          </ion-slides>\n        </div>\n\n        <div class=\"category-wrapper\" [style.background]=\"data.color\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col class=\"ion-text-center\">\n              <ion-text>Status Pengaduan : {{  data.status_pengaduan }}</ion-text>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div *ngIf=\"infotanggapan!=''\" class=\"category-wrapper info-tanggapan\" [style.background]=\"data.color\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col class=\"ion-text-center\">\n              <ion-text>\"{{ infotanggapan }}\"</ion-text>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div class=\"main-content-wrapper ion-padding\">\n          <div class=\"category-tag ion-text-right\">#{{ data.kategori_name }}</div>\n          <div class=\"title\">\n            {{ data.topik }}\n          </div>\n          <div class=\"main mt10\">\n            {{ data.uraian }}\n          </div>\n        </div>\n\n        <div class=\"ion-text-right\">\n          <ion-chip color=\"danger\" class=\"ion-margin\" (click)=\"checkLocation(data.koordinat_lat, data.koordinat_lng)\">\n            <ion-icon name=\"map\"></ion-icon>\n            <ion-label>Lokasi</ion-label>\n          </ion-chip>\n        </div>\n      </div>\n\n      <div class=\"footer-wrapper mt5\">\n        <ion-row class=\"ion-text-center\">\n          <ion-col (click)=\"displayTanggapans()\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-icon name=\"ios-swap\" [color]=\"tanggapan_color\"></ion-icon>\n                <ion-badge [color]=\"tanggapan_color\">{{ count_tanggapans }}</ion-badge>\n              </ion-col>\n              <ion-col size=\"12\">\n                <span>Tindakan</span>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <ion-col>\n            <ion-row>\n              <ion-col size=\"12\" (click)=\"displayKomentars()\">\n                <ion-icon name=\"ios-chatbubbles\" [color]=\"komentar_color\"></ion-icon>\n                <ion-badge [color]=\"komentar_color\">{{ count_komentars }}</ion-badge>\n              </ion-col>\n              <ion-col size=\"12\">\n                <span>Komentar</span>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <ion-col>\n            <ion-row>\n              <ion-col size=\"12\" (click)=\"addVote(data)\">\n                <ion-icon name=\"ios-thumbs-up\" [color]=\"voteColor(data['is_like'])\"></ion-icon>\n                <ion-badge [color]=\"voteColor(data['is_like'])\">{{ count_dukungans }}</ion-badge>\n              </ion-col>\n              <ion-col size=\"12\">\n                <span>Dukungan</span>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- <ion-col>\n            <ion-row>\n              <ion-col size=\"12\" (click)=\"share(data)\">\n                <ion-icon name=\"share\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"12\">\n                <span>Bagikan</span>\n              </ion-col>\n            </ion-row>\n          </ion-col> -->\n        </ion-row>\n      </div>\n\n      <div class=\"content-wrapper\">\n\n        <div class=\"komentars\" [hidden]=\"!showTanggapans\">\n          <div class=\"ion-text-center\" *ngIf=\"!tanggapans\">\n            <ion-spinner></ion-spinner>\n          </div>\n          <div class=\"ion-text-center text-padding\" *ngIf=\"tanggapans.length < 1\">\n            <ion-text>\n              <ion-icon name=\"ios-chatbubbles\"></ion-icon> Belum Ada Komentar\n            </ion-text>\n          </div>\n          <ion-list *ngFor=\"let tanggapan of tanggapans\">\n            <div class=\"comment-wrapper\">\n              <ion-row>\n                <ion-col size=\"2\">\n                  <ion-avatar class=\"ion-no-padding\">\n                    <ion-img *ngIf=\"!tanggapan.avatar\" src=\"assets/icon/ico-user.png\"></ion-img>\n                    <ion-img *ngIf=\"tanggapan.avatar\" [src]=\"tanggapan.avatar\"></ion-img>\n                  </ion-avatar>\n                </ion-col>\n                <ion-col size=\"10\" class=\"user-name\">\n                  <b class=\"name\">{{ tanggapan.nama }}</b>\n                  <br />\n                  <span>{{ tanggapan.tanggapan }}</span>\n                  <br />\n                  <ion-grid *ngIf=\"tanggapan.files.length > 0\" class=\"ion-no-padding\">\n                    <ion-row>\n                      <ion-col size=\"4\" *ngFor=\"let tl_file of tanggapan.files\">\n                        <ion-img (click)=\"imagePopover(tl_file.fullpath)\" [src]=\"tl_file.fullpath\"></ion-img>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                  <span class=\"date\">{{ converTime(tanggapan.created_at) }}</span>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-list>\n        </div>\n\n        <div class=\"komentars\" [hidden]=\"!showKomentars\">\n          <div class=\"ion-text-center\" *ngIf=\"!komentars\">\n            <ion-spinner></ion-spinner>\n          </div>\n          <div class=\"ion-text-center text-padding\" *ngIf=\"komentars.length < 1\">\n            <ion-text>\n              <ion-icon name=\"ios-chatbubbles\"></ion-icon> Belum Ada Komentar\n            </ion-text>\n          </div>\n          <ion-list *ngFor=\"let komentar of komentars\">\n            <div class=\"comment-wrapper\">\n              <ion-row>\n                <ion-col size=\"2\">\n                  <ion-avatar class=\"ion-no-padding\">\n                    <ion-img *ngIf=\"!komentar.avatar\" src=\"assets/icon/ico-user.png\"></ion-img>\n                    <ion-img *ngIf=\"komentar.avatar\" [src]=\"komentar.avatar\"></ion-img>\n                  </ion-avatar>\n                </ion-col>\n                <ion-col size=\"10\" class=\"user-name\">\n                  <b class=\"name\">{{ komentar.nama }}</b>\n                  <br />\n                  <span>{{ komentar.komentar }}</span>\n                  <br />\n                  <span class=\"date\">{{ converTime(komentar.created_at) }}</span>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-list>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"toolbar-comment\" color=\"light\" *ngIf=\"data.user_id == sharedService.getUserCache().id\" [hidden]=\"!showTanggapans\">\n    <form [formGroup]=\"tanggapanForm\" (ngSubmit)=\"addTanggapan(tanggapanForm)\">\n      <ion-row class=\"ion-no-padding ion-align-items-center\">\n        <ion-col size=\"10\">\n          <ion-textarea class=\"message-input\" rows=\"2\" id=\"tanggapan_user\" name=\"tanggapan_user\"\n            formControlName=\"tanggapan_user\" placeholder=\"Masukan Tanggapan\">\n          </ion-textarea>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"!tanggapanForm.valid || disabled_submit\"\n            class=\"msg-btn\" type=\"Submit\">\n            <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"toolbar-comment\" color=\"light\" [hidden]=\"!showKomentars\">\n    <form [formGroup]=\"commentForm\" (ngSubmit)=\"addKomentar(commentForm)\">\n      <ion-row class=\"ion-no-padding ion-align-items-center\">\n        <ion-col size=\"10\">\n          <ion-textarea class=\"message-input\" rows=\"2\" name=\"komentar_user\" id=\"komentar_user\"\n            formControlName=\"komentar_user\" placeholder=\"Masukan Komentar\" required>\n          </ion-textarea>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"!commentForm.valid || disabled_submit\"\n            class=\"msg-btn\" type=\"submit\">\n            <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/detail-laporan/detail-laporan.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/detail-laporan/detail-laporan.module.ts ***!
  \***************************************************************/
/*! exports provided: DetailLaporanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailLaporanPageModule", function() { return DetailLaporanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_laporan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-laporan.page */ "./src/app/pages/detail-laporan/detail-laporan.page.ts");







var routes = [
    {
        path: '',
        component: _detail_laporan_page__WEBPACK_IMPORTED_MODULE_6__["DetailLaporanPage"]
    }
];
var DetailLaporanPageModule = /** @class */ (function () {
    function DetailLaporanPageModule() {
    }
    DetailLaporanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detail_laporan_page__WEBPACK_IMPORTED_MODULE_6__["DetailLaporanPage"]]
        })
    ], DetailLaporanPageModule);
    return DetailLaporanPageModule;
}());



/***/ }),

/***/ "./src/app/pages/detail-laporan/detail-laporan.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/detail-laporan/detail-laporan.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-light);\n  font-family: Lato-Regular;\n  --ion-font-family: Lato-Regular;\n}\n\n.content-wrapper {\n  background: #ffffff;\n}\n\n.content-wrapper ion-avatar {\n  width: 62px;\n  height: 62px;\n  padding: 14px;\n}\n\n.name-wrapper {\n  margin-top: 5px;\n  font-size: 0.8rem;\n}\n\n.category-wrapper {\n  color: #ffffff;\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n\n.category-wrapper ion-row {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.main-content-wrapper .title {\n  font-size: 1rem;\n  font-weight: bolder;\n}\n\n.main-content-wrapper .main {\n  font-size: 0.8rem;\n}\n\n.footer-wrapper {\n  background: #ffffff;\n  color: var(--ion-color-medium);\n}\n\n.footer-wrapper ion-icon {\n  font-size: 1.2rem;\n}\n\n.footer-wrapper span {\n  font-size: 0.7rem;\n}\n\n.footer-wrapper ion-badge {\n  font-size: 0.5rem;\n}\n\nion-item {\n  --background: var(--ion-color-light);\n}\n\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-bottom: 10px;\n}\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n\n.comment-wrapper ion-avatar {\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n\n.comment-wrapper .user-name {\n  margin-top: 8px;\n}\n\nb.name {\n  font-size: 0.7rem;\n}\n\n.date {\n  font-size: 0.6rem;\n  color: #706e6e;\n}\n\n.category-tag {\n  color: #6083f5;\n  font-size: 0.8rem;\n}\n\n.info-badge {\n  background-color: #7044ff;\n  color: #ffffff;\n}\n\n.image img {\n  width: 100%;\n  height: 250px;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n\n.komentars {\n  min-height: 100%;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto;\n  margin-bottom: 93px;\n}\n\n.toolbar-comment {\n  position: fixed;\n  bottom: 0;\n  border-top: 2px solid #eeeeee;\n}\n\n.info-tanggapan {\n  font-style: italic;\n  font-weight: normal;\n  font-size: 0.7em;\n}\n\n.info-tanggapan ion-row, .info-tanggapan ion-col {\n  padding-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC9wYWdlcy9kZXRhaWwtbGFwb3Jhbi9kZXRhaWwtbGFwb3Jhbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldGFpbC1sYXBvcmFuL2RldGFpbC1sYXBvcmFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NSOztBREdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0FSOztBRE1JO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDSFI7O0FETUk7RUFDSSxpQkFBQTtBQ0pSOztBRFFBO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtBQ0xKOztBRE9JO0VBQ0ksaUJBQUE7QUNMUjs7QURRSTtFQUNJLGlCQUFBO0FDTlI7O0FEU0k7RUFDSSxpQkFBQTtBQ1BSOztBRFdBO0VBQ0ksb0NBQUE7QUNSSjs7QURXQTtFQUNJLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNSSjs7QURXRTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QUNSSjs7QURZTTtFQUNJLHlCQUFBO0tBQUEsc0JBQUE7QUNUVjs7QURZTTtFQUNJLGVBQUE7QUNWVjs7QURlRTtFQUNFLGlCQUFBO0FDWko7O0FEZUU7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNaTjs7QURlRTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ1pOOztBRGVFO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDWk47O0FEZ0JNO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO0FDYlY7O0FEaUJFO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ2ROOztBRGlCRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7QUNkSjs7QURpQkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNkSjs7QURnQkU7RUFDRSx5QkFBQTtBQ2JKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGV0YWlsLWxhcG9yYW4vZGV0YWlsLWxhcG9yYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZCA6IHZhcigtLWlvbi1jb2xvci1saWdodCk7IFxuICAgIGZvbnQtZmFtaWx5IDogTGF0by1SZWd1bGFyO1xuICAgIC0taW9uLWZvbnQtZmFtaWx5IDogTGF0by1SZWd1bGFyO1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgfVxufVxuXG4ubmFtZS13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5jYXRlZ29yeS13cmFwcGVyIHtcbiAgICBjb2xvciA6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICBpb24tcm93IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIH1cbn1cblxuLm1haW4tY29udGVudC13cmFwcGVyIHtcblxuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB9XG5cbiAgICAubWFpbntcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxufVxuXG4uZm9vdGVyLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgY29sb3IgOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIH1cblxuICAgIGlvbi1iYWRnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICAgIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZCA6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5tZXNzYWdlLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbSA6IDEwcHg7XG4gIH1cblxuICAubXNnLWJ0biB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAwLjVlbTtcbiAgfVxuXG4gIC5jb21tZW50LXdyYXBwZXJ7XG4gICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICAgICAgfVxuXG4gICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgICBtYXJnaW4tdG9wIDogOHB4O1xuICAgICAgfVxuXG4gIH1cblxuICBiLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gIH1cblxuICAuZGF0ZSB7XG4gICAgICBmb250LXNpemU6IC42cmVtO1xuICAgICAgY29sb3I6ICM3MDZlNmU7XG4gIH1cblxuICAuY2F0ZWdvcnktdGFnIHtcbiAgICAgIGNvbG9yIDogIzYwODNmNTtcbiAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gIH1cblxuICAuaW5mby1iYWRnZXtcbiAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjNzA0NGZmO1xuICAgICAgY29sb3IgOiAjZmZmZmZmO1xuICB9XG5cbiAgLmltYWdle1xuICAgICAgaW1ne1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgICAgIH1cbiAgfVxuXG4gIC5rb21lbnRhcnMge1xuICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOTNweDtcbiAgfVxuXG4gIC50b29sYmFyLWNvbW1lbnR7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItdG9wIDogMnB4IHNvbGlkICNlZWVlZWU7XG4gIH1cblxuICAuaW5mby10YW5nZ2FwYW57XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgfVxuICAuaW5mby10YW5nZ2FwYW4gaW9uLXJvdywgLmluZm8tdGFuZ2dhcGFuIGlvbi1jb2x7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLmNvbnRlbnQtd3JhcHBlciBpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDYycHg7XG4gIGhlaWdodDogNjJweDtcbiAgcGFkZGluZzogMTRweDtcbn1cblxuLm5hbWUtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5jYXRlZ29yeS13cmFwcGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXRlZ29yeS13cmFwcGVyIGlvbi1yb3cge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5tYWluLWNvbnRlbnQtd3JhcHBlciAudGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4ubWFpbi1jb250ZW50LXdyYXBwZXIgLm1haW4ge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmZvb3Rlci13cmFwcGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uZm9vdGVyLXdyYXBwZXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuLmZvb3Rlci13cmFwcGVyIGlvbi1iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLm1lc3NhZ2UtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1zZy1idG4ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuNWVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjVlbTtcbn1cblxuLmNvbW1lbnQtd3JhcHBlciBpb24tYXZhdGFyIHtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbn1cbi5jb21tZW50LXdyYXBwZXIgLnVzZXItbmFtZSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuYi5uYW1lIHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG5cbi5kYXRlIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGNvbG9yOiAjNzA2ZTZlO1xufVxuXG4uY2F0ZWdvcnktdGFnIHtcbiAgY29sb3I6ICM2MDgzZjU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uaW5mby1iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDQ0ZmY7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG59XG5cbi5rb21lbnRhcnMge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogOTNweDtcbn1cblxuLnRvb2xiYXItY29tbWVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2VlZWVlZTtcbn1cblxuLmluZm8tdGFuZ2dhcGFuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuXG4uaW5mby10YW5nZ2FwYW4gaW9uLXJvdywgLmluZm8tdGFuZ2dhcGFuIGlvbi1jb2wge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/detail-laporan/detail-laporan.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/detail-laporan/detail-laporan.page.ts ***!
  \*************************************************************/
/*! exports provided: DetailLaporanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailLaporanPage", function() { return DetailLaporanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common/common.service */ "./src/app/services/common/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var src_app_components_image_popover_image_popover_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/image-popover/image-popover.component */ "./src/app/components/image-popover/image-popover.component.ts");












var DetailLaporanPage = /** @class */ (function () {
    function DetailLaporanPage(route, router, sharedService, alertService, navCtrl, socialSharing, loadingCtrl, commonService, formBuilder, alertCtrl, clipboard, popoverCtrl) {
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.clipboard = clipboard;
        this.popoverCtrl = popoverCtrl;
        this.data = {};
        this.tanggapans = [];
        this.komentars = [];
        this.hide_info = false;
        this.infotanggapan = '';
        this.showTanggapans = false;
        this.tanggapan_color = "none";
        this.showKomentars = false;
        this.komentar_color = "none";
        this.user = {};
        this.color_vote = "none";
        this.disabled_submit = false;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    DetailLaporanPage.prototype.ngOnInit = function () {
        this.pengaduan_id = this.route.snapshot.paramMap.get('id');
        this.commentForm = this.formBuilder.group({
            'komentar_user': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required
                ])]
        });
        this.tanggapanForm = this.formBuilder.group({
            'tanggapan_user': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required
                ])]
        });
    };
    DetailLaporanPage.prototype.ionViewWillEnter = function () {
        this.showLoading();
        this.getUser();
        this.getDetail();
    };
    DetailLaporanPage.prototype.getDetail = function () {
        var _this = this;
        this.sharedService.getDetailPengaduan(this.pengaduan_id)
            .subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.data = data['data'];
                _this.count_tanggapans = _this.data['tanggapans']['length'];
                _this.count_komentars = _this.data['comments']['length'];
                _this.count_dukungans = _this.data['likes']['length'];
                _this.files = _this.data['files'];
                _this.statusShow = _this.data['statusshow'];
                if (_this.count_tanggapans > 0) {
                    for (var i = _this.count_tanggapans - 1; i >= 0; i--) {
                        if (_this.data['tanggapans'][i].tipe == 1 && _this.data['tanggapans'][i].status_id == _this.data.status) {
                            _this.infotanggapan = _this.capitalizeFirstLetter(_this.data['tanggapans'][i].tanggapan);
                            break;
                        }
                    }
                }
                _this.loading.dismiss();
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.commonService.presentAlert("Gagal memuat", "Terjadi kesalah saat memuat konten");
        });
    };
    DetailLaporanPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom(500);
        }, 100);
    };
    DetailLaporanPage.prototype.getComments = function () {
        var _this = this;
        this.showLoading();
        this.sharedService.getComments(this.pengaduan_id)
            .subscribe(function (data) {
            console.log(data);
            _this.komentars = data['data'];
            _this.scrollToBottom();
            _this.sharedService.pengaduan.comments_count = _this.komentars.length;
            _this.loading.dismiss();
        }, function (err) {
            _this.alertService.presentAlert('Terjadi kesalahan', 'Terjadi kesalahan saat memuat data');
        });
    };
    DetailLaporanPage.prototype.getTanggapans = function () {
        var _this = this;
        this.showLoading();
        this.sharedService.getTanggapans(this.pengaduan_id)
            .subscribe(function (data) {
            console.log(data);
            _this.tanggapans = data['data'];
            _this.scrollToBottom();
            _this.sharedService.pengaduan.tanggapans_count = _this.tanggapans.length;
            _this.loading.dismiss();
        }, function (err) {
            _this.alertService.presentAlert('Terjadi kesalahan', 'Terjadi kesalahan saat memuat data');
        });
    };
    DetailLaporanPage.prototype.converTime = function (time) {
        moment__WEBPACK_IMPORTED_MODULE_4__["locale"]('id');
        var local_time = moment__WEBPACK_IMPORTED_MODULE_4__(time).fromNow();
        return local_time;
    };
    DetailLaporanPage.prototype.displayTanggapans = function () {
        this.showKomentars = false;
        this.komentar_color = "none";
        this.showTanggapans = !this.showTanggapans;
        if (this.showTanggapans == true) {
            this.tanggapan_color = "danger";
            this.getTanggapans();
        }
        else {
            this.tanggapan_color = "none";
        }
    };
    DetailLaporanPage.prototype.displayKomentars = function () {
        this.showTanggapans = false;
        this.tanggapan_color = "none";
        this.showKomentars = !this.showKomentars;
        if (this.showKomentars == true) {
            this.komentar_color = "danger";
            this.getComments();
        }
        else {
            this.komentar_color = "none";
        }
    };
    DetailLaporanPage.prototype.getUser = function () {
        this.user = this.sharedService.getUserCache();
    };
    DetailLaporanPage.prototype.addKomentar = function (form) {
        var _this = this;
        if (!this.disabled_submit) {
            this.disabled_submit = true;
            var data = {
                'user_id': this.user['id'],
                'pengaduan_id': this.pengaduan_id,
                'komentar': form.value.komentar_user
            };
            this.sharedService.postKomentar(data)
                .subscribe(function (data) {
                _this.disabled_submit = false;
                if (data['success']) {
                    _this.alertService.presentToast(data['message']);
                    form.reset();
                    _this.getDetail();
                    _this.getComments();
                }
                else {
                    _this.alertService.presentAlert('Perhatian', data['message']);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    DetailLaporanPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.sharedService.getDetailPengaduan(this.pengaduan_id)
            .subscribe(function (data) {
            _this.data = data['data'];
            event.target.complete();
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.alertService.presentAlert('Terjadi Kesalahan', 'Tidak dapat memuat data');
        });
    };
    DetailLaporanPage.prototype.addTanggapan = function (form) {
        var _this = this;
        if (!this.disabled_submit) {
            this.disabled_submit = true;
            var data = {
                'user_id': this.user['id'],
                'pengaduan_id': this.pengaduan_id,
                'tanggapan': form.value.tanggapan_user
            };
            this.sharedService.postTanggapan(data)
                .subscribe(function (data) {
                if (data['success']) {
                    _this.disabled_submit = false;
                    _this.alertService.presentToast(data['message']);
                    form.reset();
                    _this.getDetail();
                    _this.getTanggapans();
                }
                else {
                    _this.alertService.presentAlert('Perhatian', data['message']);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    DetailLaporanPage.prototype.addVote = function (pengaduan) {
        var _this = this;
        var data = {
            'user_id': this.sharedService.getUserCache().id,
            'pengaduan_id': pengaduan.id,
        };
        this.sharedService.addVote(data)
            .subscribe(function (data) {
            if (data['success'] && data['new_user']) {
                _this.count_dukungans++;
                pengaduan['is_like'] = true;
                _this.sharedService.pengaduan.is_like = 1;
                _this.sharedService.pengaduan.likes_count = _this.count_dukungans;
            }
            else if (data['success'] && !data['new_user']) {
                _this.count_dukungans--;
                pengaduan['is_like'] = null;
                _this.sharedService.pengaduan.is_like = null;
                _this.sharedService.pengaduan.likes_count = _this.count_dukungans;
            }
            else {
                _this.alertService.presentAlert('Gagal Menyimpan Data', 'Terjadi kesalahan saat menyimpan data');
            }
        }, function (err) {
            _this.alertService.presentAlert('Gagal Menyimpan Data', 'Terjadi kesalahan saat menyimpan data');
        });
    };
    DetailLaporanPage.prototype.closeTag = function () {
        this.hide_info = true;
    };
    DetailLaporanPage.prototype.checkLocation = function (lat, lng) {
        this.navCtrl.navigateForward(['lokasi', lat, lng]);
    };
    DetailLaporanPage.prototype.voteColor = function (islike) {
        if (islike == null) {
            return "none";
        }
        else {
            return "danger";
        }
    };
    DetailLaporanPage.prototype.share = function (data) {
        this.socialSharing.share(data.topik, null, null, "https://sidumas.badungkab.go.id/T/" + data.no_tiket).then(function () {
            console.log("shareSheetShare: Success");
        }).catch(function () {
            console.error("shareSheetShare: failed");
        });
    };
    DetailLaporanPage.prototype.showLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create(this.sharedService.loadingOption)];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailLaporanPage.prototype.editPengaduan = function (id) {
        this.navCtrl.navigateForward(['edit-pengaduan', id]);
    };
    DetailLaporanPage.prototype.capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    DetailLaporanPage.prototype.presentAlertMultipleButtons = function (user_id, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var buttons, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (user_id == data.user_id) {
                            if (data.status == 1 || data.status == 3) {
                                buttons = [
                                    {
                                        text: 'Bagikan',
                                        handler: function () {
                                            _this.share(data);
                                        }
                                    },
                                    {
                                        text: 'Salin URL',
                                        handler: function () {
                                            _this.clipboard.copy("https://sidumas.badungkab.go.id/T/" + data.no_tiket);
                                            _this.alertService.presentToast('URL berhasil disalin');
                                        }
                                    },
                                    {
                                        text: 'Edit Pengaduan',
                                        handler: function () {
                                            _this.editPengaduan(data.id);
                                        }
                                    },
                                    {
                                        text: 'Hapus Pengaduan',
                                        handler: function () {
                                            _this.confirmDelete(data.id);
                                        }
                                    },
                                    {
                                        text: 'Batal',
                                        role: 'cancel',
                                        handler: function (blah) {
                                            console.log('Confirm Cancel: blah');
                                        }
                                    }
                                ];
                            }
                            else {
                                buttons = [
                                    {
                                        text: 'Bagikan',
                                        handler: function () {
                                            _this.share(data);
                                        }
                                    },
                                    {
                                        text: 'Salin URL',
                                        handler: function () {
                                            _this.clipboard.copy("https://sidumas.badungkab.go.id/T/" + data.no_tiket);
                                            _this.alertService.presentToast('URL berhasil disalin');
                                        }
                                    },
                                    {
                                        text: 'Batal',
                                        role: 'cancel',
                                        handler: function (blah) {
                                            console.log('Confirm Cancel: blah');
                                        }
                                    }
                                ];
                            }
                        }
                        else {
                            buttons = [
                                {
                                    text: 'Bagikan',
                                    handler: function () {
                                        _this.share(data);
                                    }
                                },
                                {
                                    text: 'Salin URL',
                                    handler: function () {
                                        _this.clipboard.copy("https://sidumas.badungkab.go.id/T/" + data.no_tiket);
                                        _this.alertService.presentToast('URL berhasil disalin');
                                    }
                                },
                                {
                                    text: 'Batal',
                                    role: 'cancel',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }
                            ];
                        }
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Lainnya',
                                cssClass: 'secondary',
                                buttons: buttons
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailLaporanPage.prototype.confirmDelete = function (pengaduan_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Konfirmasi !',
                            message: 'Apakah anda yakin untuk menghapus pengaduan ini ?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Yakin',
                                    handler: function () {
                                        _this.deletePengaduan(pengaduan_id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailLaporanPage.prototype.deletePengaduan = function (pengaduan_id) {
        var _this = this;
        var data = {
            'id': pengaduan_id
        };
        this.showLoading();
        this.sharedService.deletePengaduan(data)
            .subscribe(function (data) {
            if (data['success']) {
                _this.loading.dismiss();
                _this.navCtrl.navigateRoot('app/tabs/search');
                _this.alertService.presentToast('Pengaduan Berhasil Dihapus');
            }
            else {
                _this.loading.dismiss();
                _this.alertService.presentAlert('Gagal menyimpan data', 'Terjadi kesalahan saat menyimpan data');
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.alertService.presentAlert('Gagal menyimpan data', 'Terjadi kesalahan saat menyimpan data');
        });
    };
    DetailLaporanPage.prototype.imagePopover = function (src) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: src_app_components_image_popover_image_popover_component__WEBPACK_IMPORTED_MODULE_11__["ImagePopoverComponent"],
                            cssClass: 'image-popover',
                            animated: true,
                            showBackdrop: true,
                            componentProps: {
                                url: src,
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DetailLaporanPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
        { type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Clipboard"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
    ], DetailLaporanPage.prototype, "content", void 0);
    DetailLaporanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-laporan',
            template: __webpack_require__(/*! raw-loader!./detail-laporan.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/detail-laporan/detail-laporan.page.html"),
            styles: [__webpack_require__(/*! ./detail-laporan.page.scss */ "./src/app/pages/detail-laporan/detail-laporan.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Clipboard"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]])
    ], DetailLaporanPage);
    return DetailLaporanPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detail-laporan-detail-laporan-module-es5.js.map