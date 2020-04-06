import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auht/auth.service';
import { Storage } from '@ionic/storage';
let RegisterPage = class RegisterPage {
    constructor(commonService, formBuilder, loadingCtrl, authService, storage) {
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.storage = storage;
        this.password_type = "password";
        this.c_password_type = "password";
        this.hide_password = true;
        this.hide_c_password = true;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            'name': [null, Validators.compose([
                    Validators.required
                ])],
            'no_telp': [null, Validators.compose([
                    Validators.required
                ])],
            'email': [null, Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            'password': [null, Validators.compose([
                    Validators.required
                ])],
            'c_password': [null, Validators.compose([
                    Validators.required
                ])]
        }, {
            validator: this.matchPassword
        });
    }
    matchPassword(AC) {
        const password = AC.get('password').value;
        const c_password = AC.get('c_password').value;
        if (password != c_password) {
            AC.get('c_password').setErrors({ matchPassword: true });
        }
        else {
            AC.get('c_password').setErrors(null);
        }
    }
    goTo(page) {
        this.commonService.goTo(page);
    }
    showPassword() {
        this.password_type = "text";
        this.hide_password = false;
    }
    hidePassword() {
        this.password_type = "password";
        this.hide_password = true;
    }
    showCPassword() {
        this.c_password_type = "text";
        this.hide_c_password = false;
    }
    hideCPassword() {
        this.c_password_type = "password";
        this.hide_c_password = true;
    }
    presentLoading(loading) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield loading.present();
        });
    }
    register(form) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: "Mohon Menunggu...."
            });
            this.presentLoading(loading);
            this.authService.register(form.value.name, form.value.no_telp, form.value.email, form.value.password, form.value.c_password)
                .subscribe(data => {
                console.log(data);
                if (data) {
                    this.storage.set('token', data['token'])
                        .then(() => {
                        console.log('Token Stored');
                        loading.dismiss();
                        this.commonService.goTo('app/tabs/home');
                    }, err => {
                        console.log(err);
                    });
                }
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
};
RegisterPage = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [CommonService,
        FormBuilder,
        LoadingController,
        AuthService,
        Storage])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map