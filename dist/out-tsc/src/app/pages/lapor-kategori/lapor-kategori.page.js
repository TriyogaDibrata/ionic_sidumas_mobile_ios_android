import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';
import { AuthService } from 'src/app/services/auht/auth.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
let LaporKategoriPage = class LaporKategoriPage {
    constructor(navCtrl, router, route, sharedService, authService, loadingCtrl, alertService, callNumber) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertService = alertService;
        this.callNumber = callNumber;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getUser();
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
    goToLapor(id, event) {
        if (event == 'call_number') {
            this.callNumber.callNumber('112', true)
                .then(res => console.log('Launched Dialer', res))
                .catch(err => console.log('Error launching dialer', err));
        }
        else {
            this.navCtrl.navigateForward(['/lapor', id]);
        }
    }
    getKategori() {
        this.sharedService.getKategori()
            .subscribe(data => {
            this.kategori = data;
            console.log(this.kategori);
        });
    }
    getUser() {
        this.sharedService.getUser()
            .subscribe(data => {
            this.user = data;
            this.checkUser(this.user['id']);
        });
    }
    checkUser(user_id) {
        this.showLoading();
        this.sharedService.checkUser(user_id)
            .subscribe(data => {
            if (!data['success']) {
                this.loading.dismiss();
                this.alertService.presentAlert('Data Diri Belum Lengkap', 'Anda hanya akan bisa melapor apabila data diri anda sudah lengkap');
                this.navCtrl.navigateRoot('app/tabs/profile');
            }
            else {
                this.loading.dismiss();
                this.getKategori();
            }
        });
    }
};
LaporKategoriPage = tslib_1.__decorate([
    Component({
        selector: 'app-lapor-kategori',
        templateUrl: './lapor-kategori.page.html',
        styleUrls: ['./lapor-kategori.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        Router,
        ActivatedRoute,
        SharedService,
        AuthService,
        LoadingController,
        AlertService,
        CallNumber])
], LaporKategoriPage);
export { LaporKategoriPage };
//# sourceMappingURL=lapor-kategori.page.js.map