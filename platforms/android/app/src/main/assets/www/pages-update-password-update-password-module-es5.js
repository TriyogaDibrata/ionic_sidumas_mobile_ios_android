(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-update-password-update-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/update-password/update-password.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/update-password/update-password.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button>\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Perbarui Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"12\" size-md=\"6\" size-xl=\"6\">\n\n      <form [formGroup]=\"updateForm\" (ngSubmit)=\"update(updateForm)\">\n        <ion-item no-padding>\n          <ion-input placeholder=\"Kata Sandi Lama\" type=\"password\" id=\"old_password\" name=\"old_password\"\n            formControlName=\"old_password\" required></ion-input>\n        </ion-item>\n        <ion-item no-padding>\n          <ion-input placeholder=\"Kata Sandi\" type=\"password\" id=\"new_password\" name=\"new_password\"\n            formControlName=\"new_password\" required></ion-input>\n        </ion-item>\n        <ion-item no-padding>\n          <ion-input placeholder=\"Konfirmasi Kata Sandi\" type=\"password\" id=\"c_new_password\" name=\"c_new_password\"\n            formControlName=\"c_new_password\" required></ion-input>\n        </ion-item>\n        <ion-button expand=\"block\" shape=\"round\" type=\"submit\" [disabled]=\"!updateForm.valid\"\n          color=\"danger\" class=\"ion-margin-top\">Simpan</ion-button>\n      </form>\n\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/update-password/update-password.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/update-password/update-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: UpdatePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordPageModule", function() { return UpdatePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-password.page */ "./src/app/pages/update-password/update-password.page.ts");







var routes = [
    {
        path: '',
        component: _update_password_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePasswordPage"]
    }
];
var UpdatePasswordPageModule = /** @class */ (function () {
    function UpdatePasswordPageModule() {
    }
    UpdatePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_update_password_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePasswordPage"]]
        })
    ], UpdatePasswordPageModule);
    return UpdatePasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/update-password/update-password.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/update-password/update-password.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/update-password/update-password.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/update-password/update-password.page.ts ***!
  \***************************************************************/
/*! exports provided: UpdatePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordPage", function() { return UpdatePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");






var UpdatePasswordPage = /** @class */ (function () {
    function UpdatePasswordPage(formBuilder, sharedService, loadingCtrl, alertService, navCtrl) {
        this.formBuilder = formBuilder;
        this.sharedService = sharedService;
        this.loadingCtrl = loadingCtrl;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.user = {};
    }
    UpdatePasswordPage.prototype.ionViewWillEnter = function () {
        this.getUser();
    };
    UpdatePasswordPage.prototype.ngOnInit = function () {
        this.updateForm = this.formBuilder.group({
            'old_password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ])],
            'new_password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'c_new_password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])]
        }, {
            validator: this.matchPassword
        });
    };
    UpdatePasswordPage.prototype.showLoading = function () {
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
    UpdatePasswordPage.prototype.matchPassword = function (AC) {
        var password = AC.get('new_password').value;
        var c_password = AC.get('c_new_password').value;
        if (password != c_password) {
            AC.get('c_new_password').setErrors({ matchPassword: true });
        }
        else {
            AC.get('c_new_password').setErrors(null);
        }
    };
    UpdatePasswordPage.prototype.getUser = function () {
        this.user = this.sharedService.getUserCache();
    };
    UpdatePasswordPage.prototype.update = function (form) {
        var _this = this;
        this.showLoading();
        var data = {
            'id': this.user['id'],
            'old': form.value.old_password,
            'new': form.value.new_password
        };
        this.sharedService.updatePassword(data)
            .subscribe(function (data) {
            console.log(data);
            if (data['success']) {
                _this.loading.dismiss();
                _this.navCtrl.navigateRoot('app/tabs/profile');
                _this.alertService.presentToast(data['message']);
            }
            else {
                _this.loading.dismiss();
                _this.alertService.presentAlert('Gagal memperbaharui password', data['message']);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.alertService.presentAlert('Terjadi kesalahan', err);
        });
    };
    UpdatePasswordPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    UpdatePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-password',
            template: __webpack_require__(/*! raw-loader!./update-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/update-password/update-password.page.html"),
            styles: [__webpack_require__(/*! ./update-password.page.scss */ "./src/app/pages/update-password/update-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], UpdatePasswordPage);
    return UpdatePasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-update-password-update-password-module-es5.js.map