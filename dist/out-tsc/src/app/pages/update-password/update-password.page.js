import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';
import { LoadingController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert/alert.service';
let UpdatePasswordPage = class UpdatePasswordPage {
    constructor(formBuilder, sharedService, loadingCtrl, alertService, navCtrl) {
        this.formBuilder = formBuilder;
        this.sharedService = sharedService;
        this.loadingCtrl = loadingCtrl;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.user = {};
    }
    ionViewWillEnter() {
        this.getUser();
    }
    ngOnInit() {
        this.updateForm = this.formBuilder.group({
            'old_password': [null, Validators.compose([
                    Validators.required,
                ])],
            'new_password': [null, Validators.compose([
                    Validators.required
                ])],
            'c_new_password': [null, Validators.compose([
                    Validators.required
                ])]
        }, {
            validator: this.matchPassword
        });
    }
    showLoading() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                spinner: "dots",
                backdropDismiss: true,
                message: "Loading..."
            });
            yield this.loading.present();
        });
    }
    matchPassword(AC) {
        const password = AC.get('new_password').value;
        const c_password = AC.get('c_new_password').value;
        if (password != c_password) {
            AC.get('c_new_password').setErrors({ matchPassword: true });
        }
        else {
            AC.get('c_new_password').setErrors(null);
        }
    }
    getUser() {
        this.sharedService.getUser()
            .subscribe(data => {
            console.log(data);
            this.user = data;
        });
    }
    update(form) {
        this.showLoading();
        let data = {
            'id': this.user['id'],
            'old': form.value.old_password,
            'new': form.value.new_password
        };
        this.sharedService.updatePassword(data)
            .subscribe(data => {
            console.log(data);
            if (data['success']) {
                this.loading.dismiss();
                this.navCtrl.navigateRoot('app/tabs/profile');
                this.alertService.presentToast(data['message']);
            }
            else {
                this.loading.dismiss();
                this.alertService.presentAlert('Gagal memperbaharui password', data['message']);
            }
        }, err => {
            this.loading.dismiss();
            this.alertService.presentAlert('Terjadi kesalahan', err);
        });
    }
};
UpdatePasswordPage = tslib_1.__decorate([
    Component({
        selector: 'app-update-password',
        templateUrl: './update-password.page.html',
        styleUrls: ['./update-password.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        SharedService,
        LoadingController,
        AlertService,
        NavController])
], UpdatePasswordPage);
export { UpdatePasswordPage };
//# sourceMappingURL=update-password.page.js.map