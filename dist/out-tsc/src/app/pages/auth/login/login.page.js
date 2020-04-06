import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auht/auth.service';
let LoginPage = class LoginPage {
    constructor(commonService, formBuilder, loadingCtrl, authService) {
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.password_type = "password";
        this.hide_password = true;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'email': [null, Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            'password': [null, Validators.compose([
                    Validators.required,
                    Validators.minLength(8)
                ])]
        });
    }
    ionViewWillEnter() {
        this.authService.getToken().then(data => {
            if (this.authService.isLoggedIn) {
                this.commonService.goTo('app/tabs/home');
            }
        });
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
        this.commonService.goTo(page);
    }
    showLoading(loading) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield loading.present();
        });
    }
    login(form) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: "Mohon Menunggu ..."
            });
            this.showLoading(loading);
            this.authService.login(form.value.email, form.value.password)
                .subscribe(data => {
                if (data) {
                    this.commonService.presentToast('Login Berhasil');
                    this.commonService.goTo('app/tabs/home');
                    loading.dismiss();
                }
            }, err => {
                console.log(err);
                this.commonService.presentAlert('Login Gagal', err);
                loading.dismiss();
            });
        });
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [CommonService,
        FormBuilder,
        LoadingController,
        AuthService])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map