(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/login/login.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/login/login.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"12\" size-s=\"10\" size-md=\"6\" size-xl=\"4\">\n      <div class=\"logo\">\n        <img src=\"assets/images/logo-circle.png\"/>\n      </div>\n\n      <ion-card class=\"ion-padding\">\n        <ion-card-header>\n          <ion-card-title class=\"ion-text-center\">\n            Login\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm)\">\n\n            <ion-item class=\"ion-no-padding\">\n              <ion-input placeholder=\"Email\" type=\"email\" id=\"email\" name=\"email\" formControlName=\"email\" required>\n              </ion-input>\n            </ion-item>\n            <div class=\"error mt10\" *ngIf=\"loginForm.get('email').touched && loginForm.get('email').hasError('required')\">\n              <ion-label color=\"dark\">\n                <ion-icon name=\"warning\" color=\"warning\"></ion-icon>\n                <ion-text class=\"ion-margin\">Email Tidak Boleh Kosong !</ion-text>\n              </ion-label>\n            </div>\n  \n            <ion-item class=\"ion-no-padding\">\n              <ion-input placeholder=\"Password\" type=\"{{ password_type }}\" id=\"password\" name=\"password\"\n                formControlName=\"password\" required></ion-input>\n              <ion-icon name=\"eye\" (click)=\"showPassword()\" *ngIf=\"hide_password\"></ion-icon>\n              <ion-icon name=\"eye-off\" (click)=\"hidePassword()\" *ngIf=\"!hide_password\"></ion-icon>\n            </ion-item>\n            <div class=\"error mt10\" *ngIf=\"loginForm.get('password').touched && loginForm.get('password').hasError('required')\">\n              <ion-label color=\"dark\">\n                <ion-icon name=\"warning\" color=\"warning\"></ion-icon>\n                <ion-text class=\"ion-margin\">Password Tidak Boleh Kosong !</ion-text>\n              </ion-label>\n            </div>\n  \n            <div class=\"ion-text-right forgot-password\"><span (click)=\"forgotPass()\">Lupa Password ?</span></div>\n  \n            <ion-button expand=\"block\" size=\"medium\" color=\"danger\" shape=\"round\" class=\"btn-login\" type=\"submit\"\n              [disabled]=\"!loginForm.valid\"> Masuk </ion-button>\n  \n          </form>\n          <div class=\"ion-text-center mt10 lato-bold\">\n            <ion-text>Belum memiliki akun ? <a (click)=\"goTo('register')\">Daftar</a> </ion-text>\n          </div>\n\n          <div class=\"other-login-option mt20 lato-bold\">\n            <ion-text>Login dengan : </ion-text>\n            <ion-button color=\"primary\" shape=\"round\" (click)=\"fbLogin()\"><ion-icon name=\"logo-facebook\"></ion-icon></ion-button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/auth/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/auth/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  font-family: Lato-Regular !important;\n  --ion-font-family: Lato-Regular !important;\n  --background: var(--ion-color-danger);\n  --color: var(--ion-color-light);\n}\n\n.logo {\n  margin-top: 10%;\n}\n\n.logo img {\n  width: 40%;\n  display: block;\n  margin: auto;\n}\n\nion-card {\n  --background: var(--ion-color-light);\n  border-radius: 10px;\n}\n\nion-card-content ion-button {\n  text-transform: capitalize;\n}\n\n.btn-group {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLDBDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREFJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDRVI7O0FERUE7RUFDSSxvQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FER0k7RUFDSSwwQkFBQTtBQ0FSOztBRElBO0VBQ0ksZ0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXIgIWltcG9ydGFudDtcbiAgICAtLWlvbi1mb250LWZhbWlseSA6IExhdG8tUmVndWxhciAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZCA6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIC0tY29sb3IgOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4ubG9nbyB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbiA6IGF1dG87XG4gICAgfVxufVxuXG5pb24tY2FyZCB7XG4gICAgLS1iYWNrZ3JvdW5kIDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgICBcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbn1cblxuLmJ0bi1ncm91cCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuIiwiaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyICFpbXBvcnRhbnQ7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXIgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG4ubG9nbyBpbWcge1xuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCBpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5idG4tZ3JvdXAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ "./src/app/services/common/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auht_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auht/auth.service */ "./src/app/services/auht/auth.service.ts");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");








let LoginPage = class LoginPage {
    constructor(commonService, formBuilder, loadingCtrl, authService, sharedService, alertCtrl, fb, navCtrl) {
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.sharedService = sharedService;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.password_type = "password";
        this.hide_password = true;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
                ])]
        });
    }
    ionViewWillEnter() {
    }
    showPassword() {
        this.password_type = "text";
        this.hide_password = false;
    }
    hidePassword() {
        this.password_type = "password";
        this.hide_password = true;
    }
    goTo(page) {
        this.navCtrl.navigateForward(page);
    }
    showLoading(loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield loading.present();
        });
    }
    login(form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create(this.sharedService.loadingOption);
            this.showLoading(loading);
            this.authService.login(form.value.email, form.value.password)
                .subscribe(data => {
                if (data) {
                    this.sharedService.getUserCache(true);
                    this.commonService.presentToast('Login Berhasil');
                    this.commonService.goTo('app/tabs/home');
                    loading.dismiss();
                }
            }, err => {
                this.commonService.presentAlert('Login Gagal', err.error.errors.email[0]);
                loading.dismiss();
            });
        });
    }
    forgotPass() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Lupa Password?',
                message: 'Masukan email untuk mendapatkan link reset password',
                inputs: [
                    {
                        name: 'email',
                        type: 'email',
                        placeholder: 'Email'
                    }
                ],
                buttons: [
                    {
                        text: 'Batal',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Konfirmasi',
                        handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            let form = {
                                'email': data.email,
                            };
                            this.sharedService.forgotPassword(form)
                                .subscribe(data => {
                                if (data['success']) {
                                    this.commonService.presentAlert('Perhatian !', data['message']);
                                }
                                else {
                                    this.commonService.presentAlert('Perhatian !', data['message']);
                                }
                            }, err => {
                                this.commonService.presentAlert('Proses Gagal', 'Terjadi kesalahan saat menyimpan data');
                            });
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    fbLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const permissions = ["public_profile", "email"];
            const loading = yield this.loadingCtrl.create(this.sharedService.loadingOption);
            this.fb.login(permissions)
                .then(response => {
                let UserId = response.authResponse.userID;
                this.fb.api("/me?fields=name,email", permissions)
                    .then(user => {
                    user.picture = "https://graph.facebook.com/" + UserId + "/picture?type=large";
                    let sm_type = 'facebook';
                    if (user) {
                        this.authService.socialMediaLogin(user.name, user.email, sm_type, user.id, user.picture)
                            .subscribe(data => {
                            if (data) {
                                this.sharedService.getUserCache(true);
                                this.commonService.presentToast('Login Berhasil');
                                this.commonService.goTo('app/tabs/home');
                                loading.dismiss();
                            }
                        }, err => {
                            this.commonService.presentAlert('Login Gagal', 'Terjadi kesalahan saat proses login');
                        });
                    }
                });
            }, err => {
                this.commonService.presentAlert('Login Gagal', 'Terjadi kesalahan saat proses login');
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_auht_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__["Facebook"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/auth/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        src_app_services_auht_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__["Facebook"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-login-login-module-es2015.js.map