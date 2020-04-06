(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/register/register.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/register/register.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"12\" size-s=\"10\" size-md=\"6\" size-xl=\"4\">\n\n      <ion-button class=\"ion-no-padding btn-back\" shape=\"round\" fill=\"clear\" color=\"light\" (click)=\"goTo('login')\">\n        <ion-icon name=\"arrow-round-back\" slot=\"icon-only\" color=\"light\"></ion-icon> \n        <ion-text color=\"light\" class=\"lato-bold\">Kembali</ion-text>\n      </ion-button>\n\n      <ion-card class=\"ion-padding\">\n        <ion-card-content>\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"register(registerForm)\">\n\n            <ion-item class=\"ion-no-padding\">\n              <ion-input placeholder=\"Nama Lengkap\" type=\"text\" id=\"name\" name=\"name\" formControlName=\"name\" required>\n              </ion-input>\n            </ion-item>\n            <div class=\"ion-margin-top\" *ngIf=\"registerForm.get('name').touched && registerForm.get('name').hasError('required')\">\n              <ion-label>\n                <ion-icon name=\"warning\" color=\"warning\"></ion-icon>\n                <ion-text class=\"ion-margin\">Nama Tidak Boleh Kosong</ion-text>\n              </ion-label>\n            </div>\n            <ion-item class=\"ion-no-padding\">\n              <ion-input placeholder=\"Email\" type=\"email\" id=\"email\" name=\"email\" formControlName=\"email\" required>\n              </ion-input>\n            </ion-item>\n            <div class=\"ion-margin-top\" *ngIf=\"registerForm.get('email').touched && registerForm.get('email').hasError('required')\">\n              <ion-label>\n                <ion-icon name=\"warning\" color=\"warning\"></ion-icon>\n                <ion-text class=\"ion-margin\">Email Tidak Boleh Kosong !</ion-text>\n              </ion-label>\n            </div>\n  \n            <div class=\"ion-margin-top\" *ngIf=\"registerForm.get('email').touched && registerForm.get('email').hasError('pattern')\">\n              <ion-label>\n                <ion-icon name=\"warning\" color=\"warning\"></ion-icon>\n                <ion-text class=\"ion-margin\">Format Email Tidak Sesuai !</ion-text>\n              </ion-label>\n            </div>\n  \n            <ion-item class=\"ion-no-padding\">\n              <ion-input placeholder=\"Nomor Telepon\" type=\"tel\" id=\"no_telp\" name=\"no_telp\" formControlName=\"no_telp\"\n                required></ion-input>\n            </ion-item>\n            <div class=\"ion-margin-top\" *ngIf=\"registerForm.get('no_telp').touched && registerForm.get('no_telp').hasError('required')\">\n              <ion-label>\n                <ion-icon name=\"warning\" color=\"warning\"></ion-icon>\n                <ion-text class=\"ion-margin\">Nomor Telepon Tidak Boleh Kosong!</ion-text>\n              </ion-label>\n            </div>\n  \n            <ion-item class=\"ion-no-padding\">\n              <ion-input placeholder=\"Password\" [type]=\"password_type\" id=\"password\" name=\"password\"\n                formControlName=\"password\" required></ion-input>\n              <ion-icon name=\"eye\" (click)=\"showPassword()\" *ngIf=\"hide_password\"></ion-icon>\n              <ion-icon name=\"eye-off\" (click)=\"hidePassword()\" *ngIf=\"!hide_password\"></ion-icon>\n            </ion-item>\n            <div class=\"ion-margin-top\" *ngIf=\"registerForm.get('password').touched && registerForm.get('password').hasError('required')\">\n              <ion-label>\n                <ion-icon name=\"warning\" color=\"warning\"></ion-icon>\n                <ion-text class=\"ion-margin\">Password harus diisi !</ion-text>\n              </ion-label>\n            </div>\n  \n            <div class=\"ion-margin-top\" *ngIf=\"registerForm.get('password').touched && registerForm.get('password').hasError('minlength')\">\n              <ion-label>\n                <ion-icon name=\"warning\" color=\"warning\"></ion-icon>\n                <ion-text class=\"ion-margin\">Password Min 8 Karakter !</ion-text>\n              </ion-label>\n            </div>\n  \n            <ion-item class=\"ion-no-padding\">\n              <ion-input placeholder=\"Ulangi Password\" [type]=\"c_password_type\" id=\"c_password\" name=\"c_password\"\n                formControlName=\"c_password\" required></ion-input>\n              <ion-icon name=\"eye\" (click)=\"showCPassword()\" *ngIf=\"hide_c_password\"></ion-icon>\n              <ion-icon name=\"eye-off\" (click)=\"hideCPassword()\" *ngIf=\"!hide_c_password\"></ion-icon>\n            </ion-item>\n  \n            <div class=\"ion-margin-top\" *ngIf=\"registerForm.get('c_password').touched && this.registerForm.get('c_password').hasError('matchPassword')\">\n              <ion-label>\n                <ion-icon name=\"warning\" color=\"warning\"></ion-icon>\n                <ion-text class=\"ion-margin\">Tidak Sesuai !</ion-text>\n              </ion-label>\n            </div>\n  \n            <ion-button class=\"mt20\" color=\"danger\" shape=\"round\" expand=\"block\" type=\"submit\" [disabled]=\"!registerForm.valid\">Daftar</ion-button>\n  \n          </form>\n\n          <div class=\"other-login-option mt20 lato-bold\">\n            <ion-text>Daftar dengan : </ion-text>\n            <ion-button color=\"primary\" shape=\"round\" (click)=\"fbLogin()\"><ion-icon name=\"logo-facebook\"></ion-icon></ion-button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/register/register.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/auth/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/register/register.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  font-family: Lato-Regular !important;\n  --ion-font-family: Lato-Regular !important;\n  --background: var(--ion-color-danger);\n}\n\n.btn-back {\n  text-transform: capitalize;\n}\n\nion-card {\n  --background: var(--ion-color-light);\n  border-radius: 10px;\n}\n\nion-card-content ion-button {\n  text-transform: capitalize;\n}\n\n.line {\n  width: 100%;\n  border: solid 2px #a3a3a3;\n  margin-top: 10px;\n}\n\nion-item {\n  margin-top: 20px;\n  --color: var(--ion-color-dark);\n  --border-color: var(--ion-color-medium);\n  --color-activated: var(--ion-color-dark);\n  --highlight-color-focused: var(--ion-color-dark);\n  --highlight-color-invalid: var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC9wYWdlcy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLDBDQUFBO0VBQ0EscUNBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FER0k7RUFDSSwwQkFBQTtBQ0FSOztBRElBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrREFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhciAhaW1wb3J0YW50O1xuICAgIC0taW9uLWZvbnQtZmFtaWx5IDogTGF0by1SZWd1bGFyICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kIDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbi5idG4tYmFjayB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmlvbi1jYXJkIHtcbiAgICAtLWJhY2tncm91bmQgOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59XG5cbi5saW5lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjYTNhM2EzO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgICBtYXJnaW4tdG9wIDogMjBweDtcbiAgICAtLWNvbG9yIDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIC0tYm9yZGVyLWNvbG9yIDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQgOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZCA6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkIDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59IiwiaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyICFpbXBvcnRhbnQ7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXIgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLmJ0bi1iYWNrIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2EzYTNhMztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/auth/register/register.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ "./src/app/services/common/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auht_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auht/auth.service */ "./src/app/services/auht/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");









var RegisterPage = /** @class */ (function () {
    function RegisterPage(commonService, formBuilder, loadingCtrl, authService, storage, sharedService, fb) {
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.storage = storage;
        this.sharedService = sharedService;
        this.fb = fb;
        this.password_type = "password";
        this.c_password_type = "password";
        this.hide_password = true;
        this.hide_c_password = true;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
            'no_telp': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
                ])],
            'c_password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
                ])]
        }, {
            validator: this.matchPassword
        });
    };
    RegisterPage.prototype.matchPassword = function (AC) {
        var password = AC.get('password').value;
        var c_password = AC.get('c_password').value;
        if (password != c_password) {
            AC.get('c_password').setErrors({ matchPassword: true });
        }
        else {
            AC.get('c_password').setErrors(null);
        }
    };
    RegisterPage.prototype.goTo = function (page) {
        this.commonService.goTo(page);
    };
    RegisterPage.prototype.showPassword = function () {
        this.password_type = "text";
        this.hide_password = false;
    };
    RegisterPage.prototype.hidePassword = function () {
        this.password_type = "password";
        this.hide_password = true;
    };
    RegisterPage.prototype.showCPassword = function () {
        this.c_password_type = "text";
        this.hide_c_password = false;
    };
    RegisterPage.prototype.hideCPassword = function () {
        this.c_password_type = "password";
        this.hide_c_password = true;
    };
    RegisterPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RegisterPage.prototype.register = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create(this.sharedService.loadingOption)];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        this.authService.register(form.value.name, form.value.no_telp, form.value.email, form.value.password, form.value.c_password)
                            .subscribe(function (data) {
                            console.log(data);
                            if (data) {
                                // this.storage.set('token', data['token'])
                                // .then(
                                //   ()=> {
                                //     loading.dismiss();
                                //     this.commonService.goTo('app/tabs/home');
                                //     this.commonService.presentToast('Proses registrasi berhasil, silahkan login untuk dapat masuk ke dalam sistem');
                                //   }, err => {
                                //     loading.dismiss();
                                //     this.commonService.presentAlert('Gagal Menyimpan Data', 'Terjadi kesalahan saat menyimpan data');
                                //   }
                                // );
                                _this, _this.authService.login(form.value.email, form.value.password)
                                    .subscribe(function (data) {
                                    console.log(data);
                                    if (data) {
                                        _this.sharedService.getUserCache(true);
                                        _this.commonService.presentToast('Login Berhasil');
                                        _this.commonService.goTo('app/tabs/home');
                                        loading.dismiss();
                                    }
                                }, function (err) {
                                    _this.commonService.presentAlert('Login Gagal', err.error.errors.email[0]);
                                    loading.dismiss();
                                });
                            }
                        }, function (err) {
                            var errors = err.error.errors;
                            _this.commonService.presentAlert('Daftar Gagal', errors[Object.keys(errors)[0]]);
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.fbLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var permissions, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        permissions = ["public_profile", "email"];
                        return [4 /*yield*/, this.loadingCtrl.create(this.sharedService.loadingOption)];
                    case 1:
                        loading = _a.sent();
                        this.fb.login(permissions)
                            .then(function (response) {
                            var UserId = response.authResponse.userID;
                            _this.fb.api("/me?fields=name,email", permissions)
                                .then(function (user) {
                                user.picture = "https://graph.facebook.com/" + UserId + "/picture?type=large";
                                var sm_type = 'facebook';
                                if (user) {
                                    _this.authService.socialMediaLogin(user.name, user.email, sm_type, user.id, user.picture)
                                        .subscribe(function (data) {
                                        if (data) {
                                            _this.sharedService.getUserCache(true);
                                            _this.commonService.presentToast('Login Berhasil');
                                            _this.commonService.goTo('app/tabs/home');
                                            loading.dismiss();
                                        }
                                    }, function (err) {
                                        _this.commonService.presentAlert('Login Gagal', 'Terjadi kesalahan saat proses login');
                                    });
                                }
                            });
                        }, function (err) {
                            _this.commonService.presentAlert('Login Gagal', 'Terjadi kesalahan saat proses login');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.ctorParameters = function () { return [
        { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: src_app_services_auht_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/auth/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            src_app_services_auht_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-register-register-module-es5.js.map