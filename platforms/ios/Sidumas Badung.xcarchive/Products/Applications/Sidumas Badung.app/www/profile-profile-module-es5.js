(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Profile\n    </ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentAlertConfirm()\">\n        <ion-icon name=\"log-out\" color=\"light\"></ion-icon>\n      </ion-button> \n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"false\">\n\n <ion-refresher pullMax=\"60\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n   <ion-refresher-content pullingIcon=\"arrow-down\" pullingText=\"Pull to refresh\" refreshingSpinner=\"crescent\" refreshingText=\"Refreshing...\"></ion-refresher-content>\n </ion-refresher>\n\n  <div class=\"profile-header\">\n    <!-- <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\" size-md=\"6\" size-x=\"6\">\n        <ion-chip class=\"ion-float-right\" (click)=\"presentAlertConfirm()\">\n          <ion-icon name=\"log-out\" color=\"light\"></ion-icon>\n          <ion-label color=\"light\">Keluar</ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row> -->\n  </div>\n\n  <div class=\"profile-card\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"11\" size-md=\"6\" size-xl=\"5\">\n        <ion-card>\n          <ion-avatar (click)=\"presentActionSheet()\" *ngIf=\"!user.avatar\">\n            <img src=\"assets/icon/ico-user.png\" />\n          </ion-avatar>\n          <ion-avatar (click)=\"presentActionSheet()\" *ngIf=\"user.avatar\">\n            <img [src]=\"sharedService.getUserCache().avatar\" />\n          </ion-avatar>\n          <div class=\"user-name ion-text-center\">\n            <ion-text>{{ sharedService.getUserCache().name }}</ion-text>\n          </div>\n          <div class=\"user-email ion-text-center\">\n            <ion-text>{{ sharedService.getUserCache().email }}</ion-text>\n          </div>\n          <div class=\"ion-text-center\">\n            <ion-chip [style.color]=\"statuses.statuscolor\">\n              <ion-icon name=\"checkmark-circle\" [style.color]=\"statuses.statuscolor\"></ion-icon>\n              <ion-text>{{ statuses.statusmsg }}</ion-text>\n            </ion-chip>\n          </div>\n          <div class=\"user-reports ion-text-center\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <ion-text>{{ statuses.new }}</ion-text>\n                <br />\n                <ion-label>Pengaduan <br/> Baru</ion-label>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-text>{{ statuses.progress }}</ion-text>\n                <br />\n                <ion-label>Proses</ion-label>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-text>{{ statuses.done }}</ion-text>\n                <br />\n                <ion-label>Selesai</ion-label>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"12\" size-md=\"6\" size-xl=\"6\" class=\"ion-no-padding\">\n      <ion-list class=\"ion-padding\">\n        <ion-item class=\"ion-no-padding ion-activatable\" (click)=\"update_profile(user.id)\">\n          <ion-ripple-effect></ion-ripple-effect>\n          <ion-icon name=\"contact\"></ion-icon>\n          <ion-label class=\"ion-margin\">\n            Update Profile \n            <ion-icon name=\"checkmark-circle\" color=\"primary\" *ngIf=\"statuses.status == 1\"></ion-icon>\n            <ion-icon name=\"alert\" color=\"danger\" *ngIf=\"statuses.status == 0\"></ion-icon>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"ion-no-padding ion-activatable\" (click)=\"update_password(user.id)\">\n          <ion-ripple-effect></ion-ripple-effect>\n          <ion-icon name=\"lock\"></ion-icon>\n          <ion-label class=\"ion-margin\">Update Password</ion-label>\n        </ion-item>\n        <ion-item class=\"ion-no-padding ion-activatable\" (click)=\"presentAlertConfirm()\">\n          <ion-ripple-effect></ion-ripple-effect>\n          <ion-icon name=\"log-out\"></ion-icon>\n          <ion-label class=\"ion-margin\">Keluar</ion-label>\n        </ion-item>\n      </ion-list>\n\n      <div class=\"divider-top\"></div>\n\n      <ion-list class=\"ion-padding\">\n          <ion-item class=\"ion-no-padding ion-activatable\" (click)=\"about()\">\n            <ion-ripple-effect></ion-ripple-effect>\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <ion-label class=\"ion-margin\">Tentang Kami</ion-label>\n          </ion-item>\n          <ion-item class=\"ion-no-padding ion-activatable\" (click)=\"rateApp()\">\n              <ion-ripple-effect></ion-ripple-effect>\n              <ion-icon name=\"star-outline\"></ion-icon>\n              <ion-label class=\"ion-margin\">Rate Us</ion-label>\n          </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #eeeeee;\n  font-family: Lato-Regular;\n  --ion-font-family: Lato-Regular;\n}\n\nion-toolbar {\n  --background: var(--ion-color-danger);\n  --border-style: none !important;\n  --border-color: transparent !important;\n  --color: var(--ion-color-light);\n  --ion-font-family: \"Lato-Regular\" !important;\n  font-family: \"Lato-Regular\" !important;\n}\n\n.profile-header {\n  background-color: var(--ion-color-danger);\n  height: 24vh;\n}\n\n.profile-card {\n  margin-top: -20vh;\n}\n\n.profile-card ion-card {\n  --background: #ffffff;\n  height: 280px;\n}\n\n.profile-card ion-card ion-avatar {\n  display: block;\n  margin: auto;\n  width: 90px;\n  height: 90px;\n}\n\n.profile-card ion-card ion-avatar img {\n  margin-top: 10px;\n}\n\n.user-name {\n  padding-top: 5px;\n  font-weight: bold;\n  font-size: 1.25rem;\n}\n\n.user-reports {\n  margin-top: 20px;\n  font-size: 10pt;\n}\n\n.user-reports .count-reports {\n  font-weight: bold;\n}\n\n.myreports-card {\n  background: #e3f2fd;\n}\n\n.myreports-card img {\n  display: block;\n  margin: auto;\n  width: 50%;\n}\n\n.myreports-card .comments-count {\n  margin-top: 10px;\n}\n\n.divider-top {\n  background-color: #EEEEEE;\n  height: 10px;\n}\n\nion-refresher {\n  background: var(--ion-color-danger);\n}\n\nion-refresher, ion-refresher-content {\n  --ion-text-color: white;\n  --color: white;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSwrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esc0NBQUE7QUNDSjs7QURFQTtFQUNJLHlDQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBRUksaUJBQUE7QUNBSjs7QURFSTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQ0FSOztBREtJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZSOztBRElRO0VBQ0ksZ0JBQUE7QUNGWjs7QURPQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE9BO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDSko7O0FETUk7RUFDSSxpQkFBQTtBQ0pSOztBRFFBO0VBQ0ksbUJBQUE7QUNMSjs7QURNSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0pSOztBRFFBO0VBQ0ksZ0JBQUE7QUNMSjs7QURRQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFFBO0VBQ0UsbUNBQUE7QUNMRjs7QURPQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQgOiAjZWVlZWVlO1xuICAgIGZvbnQtZmFtaWx5IDogTGF0by1SZWd1bGFyO1xuICAgIC0taW9uLWZvbnQtZmFtaWx5IDogTGF0by1SZWd1bGFyO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6IFwiTGF0by1SZWd1bGFyXCIgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogXCJMYXRvLVJlZ3VsYXJcIiAhaW1wb3J0YW50O1xufVxuICBcbi5wcm9maWxlLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgaGVpZ2h0OiAyNHZoO1xufVxuXG4ucHJvZmlsZS1jYXJkIHtcblxuICAgIG1hcmdpbi10b3AgOiAtMjB2aDtcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kIDogI2ZmZmZmZjtcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICB9XG59XG5cbi5wcm9maWxlLWNhcmQgaW9uLWNhcmQge1xuICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udXNlci1uYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLnVzZXItcmVwb3J0c3tcbiAgICBtYXJnaW4tdG9wIDogMjBweDtcbiAgICBmb250LXNpemU6IDEwcHQ7XG5cbiAgICAuY291bnQtcmVwb3J0cyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cblxuLm15cmVwb3J0cy1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xuICAgIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxuXG4ubXlyZXBvcnRzLWNhcmQgLmNvbW1lbnRzLWNvdW50IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZGl2aWRlci10b3B7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbiAgICBoZWlnaHQ6IDEwcHg7XG59XG5cbmlvbi1yZWZyZXNoZXJ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuaW9uLXJlZnJlc2hlciwgaW9uLXJlZnJlc2hlci1jb250ZW50e1xuICAtLWlvbi10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAtLWlvbi1mb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWlvbi1mb250LWZhbWlseTogXCJMYXRvLVJlZ3VsYXJcIiAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJMYXRvLVJlZ3VsYXJcIiAhaW1wb3J0YW50O1xufVxuXG4ucHJvZmlsZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgaGVpZ2h0OiAyNHZoO1xufVxuXG4ucHJvZmlsZS1jYXJkIHtcbiAgbWFyZ2luLXRvcDogLTIwdmg7XG59XG4ucHJvZmlsZS1jYXJkIGlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDI4MHB4O1xufVxuXG4ucHJvZmlsZS1jYXJkIGlvbi1jYXJkIGlvbi1hdmF0YXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuLnByb2ZpbGUtY2FyZCBpb24tY2FyZCBpb24tYXZhdGFyIGltZyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi51c2VyLW5hbWUge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udXNlci1yZXBvcnRzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuLnVzZXItcmVwb3J0cyAuY291bnQtcmVwb3J0cyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubXlyZXBvcnRzLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xufVxuLm15cmVwb3J0cy1jYXJkIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5teXJlcG9ydHMtY2FyZCAuY29tbWVudHMtY291bnQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZGl2aWRlci10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbmlvbi1yZWZyZXNoZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuaW9uLXJlZnJlc2hlciwgaW9uLXJlZnJlc2hlci1jb250ZW50IHtcbiAgLS1pb24tdGV4dC1jb2xvcjogd2hpdGU7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ "./src/app/services/common/common.service.ts");
/* harmony import */ var src_app_services_auht_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auht/auth.service */ "./src/app/services/auht/auth.service.ts");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_env_env_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/env/env.service */ "./src/app/services/env/env.service.ts");
/* harmony import */ var src_app_modal_image_modal_image_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modal-image/modal-image.page */ "./src/app/modal-image/modal-image.page.ts");
/* harmony import */ var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/app-rate/ngx */ "./node_modules/@ionic-native/app-rate/ngx/index.js");
/* harmony import */ var _components_profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/profile-popover/profile-popover.component */ "./src/app/components/profile-popover/profile-popover.component.ts");














var ProfilePage = /** @class */ (function () {
    function ProfilePage(commonService, authService, sharedService, navCtrl, alertCtrl, loadingCtrl, camera, crop, actionSheetCtrl, alertService, http, env, modalCtrl, appRate, popover) {
        this.commonService = commonService;
        this.authService = authService;
        this.sharedService = sharedService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.crop = crop;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertService = alertService;
        this.http = http;
        this.env = env;
        this.modalCtrl = modalCtrl;
        this.appRate = appRate;
        this.popover = popover;
        this.user = {};
        this.statuses = {};
    }
    ProfilePage.prototype.ngOnInit = function () {
        // this.getUser();
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.getUser();
        this.showLoading();
    };
    ProfilePage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Perhatian!',
                            message: 'Apakah anda yakin ingin keluar ?',
                            buttons: [
                                {
                                    text: 'Batal',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Ya',
                                    handler: function () {
                                        _this.logout();
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
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function () {
            _this.sharedService.user = null;
            _this.alertService.presentToast("You're logged out");
        });
    };
    ProfilePage.prototype.getUser = function () {
        this.user = this.sharedService.getUserCache();
        console.log(this.user);
        this.lihatUserStatus(this.user.id);
    };
    ProfilePage.prototype.update_profile = function (id) {
        this.navCtrl.navigateForward(['/update-profile', id]);
    };
    ProfilePage.prototype.about = function () {
        this.navCtrl.navigateForward(['/about']);
    };
    ProfilePage.prototype.update_password = function (id) {
        this.navCtrl.navigateForward(['/update-password', id]);
    };
    ProfilePage.prototype.lihatUserStatus = function (user_id) {
        var _this = this;
        this.sharedService.seeUserStatus(user_id)
            .subscribe(function (data) {
            console.log(data);
            _this.statuses = data;
            _this.loading.dismiss();
        }, function (err) {
            _this.commonService.presentAlert('Gagal memuat konten', 'Terjadi kesalahan saat memuat konten');
            _this.loading.dismiss();
        });
    };
    ProfilePage.prototype.showLoading = function () {
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
    ProfilePage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: 'Profile',
                            buttons: [{
                                    text: 'Lihat Foto Profile',
                                    icon: 'search',
                                    handler: function () {
                                        // this.PresentImage(this.user.avatar);
                                        _this.enlargeImage(_this.sharedService.getUserCache().avatar);
                                    }
                                }, {
                                    text: 'Ubah Foto Profile',
                                    icon: 'images',
                                    handler: function () {
                                        _this.updateAvatarOptions();
                                    }
                                }, {
                                    text: 'Batal',
                                    icon: 'close-circle',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.updateAvatarOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            // header: 'Confirm!',
                            message: 'Ubah foto profile',
                            buttons: [{
                                    text: 'Kamera',
                                    handler: function () {
                                        _this.takePhoto(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Galeri',
                                    handler: function () {
                                        _this.takePhoto(_this.camera.PictureSourceType.PHOTOLIBRARY);
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
    ProfilePage.prototype.takePhoto = function (type) {
        var _this = this;
        var options = {
            quality: 100,
            targetHeight: 600,
            targetWidth: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            sourceType: type,
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (imageData) {
                _this.base64Image = "data:image/jpeg;base64," + imageData;
                var data = {
                    'id': _this.user.id,
                    'avatar': _this.base64Image,
                };
                _this.sharedService.updateAvatar(data)
                    .subscribe(function (data) {
                    if (data['success']) {
                        _this.ionViewWillEnter();
                        _this.doRefresh(event);
                        _this.sharedService.getUserCache(true);
                    }
                    else {
                        _this.alertService.presentAlert('Gagal menyimpan data', 'Terdapat kesalahan saat menyimpan data');
                    }
                }, function (err) {
                    _this.alertService.presentAlert('Gagal menyimpan data', 'Terdapat kesalahan saat menyimpan data');
                });
            }
        }, function (err) {
            //this.alertService.presentAlert('Gagal menyimpan data', 'Terdapat kesalahan saat menyimpan data');
            console.log(err);
        });
    };
    ProfilePage.prototype.doRefresh = function (event) {
        var _this = this;
        this.token = this.authService.token;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        this.http.get(this.env.API_URL + 'user', { headers: headers })
            .subscribe(function (data) {
            _this.user = data;
            _this.sharedService.getUserCache(true);
            event.target.complete();
        }, function (err) {
            _this.alertService.presentAlert('Gagal memuat data', 'Terdapat kesalahan saat memuat data');
            event.target.complete();
        });
    };
    ProfilePage.prototype.PresentImage = function (image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_modal_image_modal_image_page__WEBPACK_IMPORTED_MODULE_11__["ModalImagePage"],
                            componentProps: {
                                image: image
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfilePage.prototype.rateApp = function () {
        this.appRate.preferences.storeAppURL = {
            android: 'market://details?id=com.badungkab.lapor_sidumas'
        };
        this.appRate.promptForRating(true);
    };
    ProfilePage.prototype.enlargeImage = function (image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popover.create({
                            component: _components_profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_13__["ProfilePopoverComponent"],
                            animated: true,
                            cssClass: 'image-popover',
                            showBackdrop: true,
                            componentProps: {
                                image: image,
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
    ProfilePage.ctorParameters = function () { return [
        { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: src_app_services_auht_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
        { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__["Crop"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
        { type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
        { type: src_app_services_env_env_service__WEBPACK_IMPORTED_MODULE_10__["EnvService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_12__["AppRate"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            src_app_services_auht_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__["Crop"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
            src_app_services_env_env_service__WEBPACK_IMPORTED_MODULE_10__["EnvService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_12__["AppRate"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es5.js.map