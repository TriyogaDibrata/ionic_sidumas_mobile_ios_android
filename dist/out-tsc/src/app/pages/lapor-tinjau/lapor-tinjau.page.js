import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';
import { AlertService } from 'src/app/services/alert/alert.service';
let LaporTinjauPage = class LaporTinjauPage {
    constructor(commonService, navCtrl, route, router, sharedService, alertService, loadingCtrl) {
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.dataObj = {};
        this.dataUraian = {};
        this.dataFiles = {};
        this.user = {};
    }
    ngOnInit() {
        this.dataRec = this.route.snapshot.paramMap.get('dataObj');
        this.dataObj = JSON.parse(this.dataRec);
        this.dataUraian = JSON.parse(this.dataObj['data']);
        this.dataFiles = this.dataObj['files'];
        console.log(this.dataUraian);
        console.log(this.dataFiles);
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
    goTo(page) {
        this.commonService.goTo(page);
    }
    goBack(page) {
        this.commonService.goBack(page);
    }
    goForward(page) {
        this.commonService.goForward(page);
    }
    back() {
        this.navCtrl.back();
    }
    getUser() {
        this.sharedService.getUser()
            .subscribe(data => {
            this.user = data;
        });
    }
    sendData() {
        this.showLoading();
        let data = {
            'user_id': this.user['id'],
            'atas_nama': this.user['name'],
            'topik': this.dataUraian['topik'],
            'uraian': this.dataUraian['uraian'],
            'lat': this.dataUraian['lat'],
            'lng': this.dataUraian['lng'],
            'alamat': this.dataUraian['alamat'],
            'hide_identitas': this.dataUraian['hide_identity'],
            'hide_pengaduan': this.dataUraian['hide_report'],
            'email': this.user['email'],
            'kategori_id': this.dataUraian['kategori_id'],
            'files': this.dataFiles
        };
        console.log(data);
        this.sharedService.addPengaduan(data)
            .subscribe(data => {
            if (data['success']) {
                this.loading.dismiss();
                this.navCtrl.navigateRoot('app/tabs/home');
                this.alertService.presentToast('Pengaduan Berhasil Disimpan');
            }
            else {
                this.loading.dismiss();
                this.alertService.presentAlert('Gagal menyimpan data', 'Terjadi kesalahan saat menyimpan data');
            }
        }, err => {
            this.loading.dismiss();
            this.alertService.presentAlert('Gagal menyimpan data', 'Terjadi kesalahan saat menyimpan data');
        });
    }
};
LaporTinjauPage = tslib_1.__decorate([
    Component({
        selector: 'app-lapor-tinjau',
        templateUrl: './lapor-tinjau.page.html',
        styleUrls: ['./lapor-tinjau.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [CommonService,
        NavController,
        ActivatedRoute,
        Router,
        SharedService,
        AlertService,
        LoadingController])
], LaporTinjauPage);
export { LaporTinjauPage };
//# sourceMappingURL=lapor-tinjau.page.js.map