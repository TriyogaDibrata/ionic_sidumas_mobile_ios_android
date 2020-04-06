import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';
import * as moment from 'moment';
import { AlertService } from 'src/app/services/alert/alert.service';
import { IonContent } from '@ionic/angular';
let DetailLaporanPage = class DetailLaporanPage {
    constructor(route, router, sharedService, alertService) {
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.alertService = alertService;
        this.hide_info = false;
        this.showTanggapans = false;
        this.tanggapan_color = "medium";
        this.showKomentars = false;
        this.komentar_color = "medium";
        this.user = {};
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() {
        this.pengaduan_id = this.route.snapshot.paramMap.get('id');
        this.getUser();
        this.getDetail();
        this.getComments();
        this.getTanggapans();
        this.getUser();
    }
    ionViewWillEnter() {
        // this.getUser();
        // this.getDetail();
        // this.getComments();
        // this.getTanggapans();
        // this.getUser();
        // this.checkVoted();
        // console.log('will enter')
    }
    getDetail() {
        this.sharedService.getDetailPengaduan(this.pengaduan_id)
            .subscribe(data => {
            if (data) {
                this.data = data['data'];
                this.count_tanggapans = this.data['tanggapans']['length'];
                this.count_komentars = this.data['comments']['length'];
                this.count_dukungans = this.data['likes']['length'];
                this.files = this.data['files'];
                this.statusShow = this.data['statusshow'];
            }
        }, err => {
            console.log(err);
        });
    }
    getComments() {
        this.sharedService.getComments(this.pengaduan_id)
            .subscribe(data => {
            this.komentars = data['data'];
        });
    }
    getTanggapans() {
        this.sharedService.getTanggapans(this.pengaduan_id)
            .subscribe(data => {
            console.log(data);
            this.tanggapans = data['data'];
        });
    }
    converTime(time) {
        moment.locale('id');
        // let local_time = moment(time).format('dddd, DD-MM-YYYY');
        let local_time = moment(time).fromNow();
        return local_time;
    }
    displayTanggapans() {
        this.showKomentars = false;
        this.komentar_color = "medium";
        this.showTanggapans = !this.showTanggapans;
        if (this.showTanggapans == true) {
            this.tanggapan_color = "danger";
        }
        else {
            this.tanggapan_color = "medium";
        }
    }
    displayKomentars() {
        this.showTanggapans = false;
        this.tanggapan_color = "medium";
        this.showKomentars = !this.showKomentars;
        if (this.showKomentars == true) {
            this.komentar_color = "danger";
        }
        else {
            this.komentar_color = "medium";
        }
    }
    getUser() {
        this.sharedService.getUser()
            .subscribe(data => {
            console.log(data);
            this.user = data;
            this.checkVoted(this.user.id);
        });
    }
    addKomentar() {
        let data = {
            'user_id': this.user['id'],
            'pengaduan_id': this.pengaduan_id,
            'komentar': this.komentar_user
        };
        this.sharedService.postKomentar(data)
            .subscribe(data => {
            if (data['success']) {
                this.alertService.presentToast(data['message']);
                this.komentar_user = '';
                this.ionViewWillEnter();
                this.content.scrollToBottom(0);
            }
            else {
                this.alertService.presentAlert('Perhatian', data['message']);
            }
        }, err => {
            console.log(err);
        });
    }
    addVote() {
        let data = {
            'user_id': this.user['id'],
            'pengaduan_id': this.pengaduan_id,
        };
        this.sharedService.addVote(data)
            .subscribe(data => {
            if (data['success']) {
                this.ngOnInit();
            }
            else {
                this.alertService.presentAlert('Gagal Menyimpan Data', 'Terjadi kesalahan saat menyimpan data');
            }
        }, err => {
            this.alertService.presentAlert('Gagal Menyimpan Data', 'Terjadi kesalahan saat menyimpan data');
        });
    }
    closeTag() {
        this.hide_info = true;
    }
    checkVoted(user_id) {
        this.sharedService.checkVoted(user_id, this.pengaduan_id)
            .subscribe(data => {
            console.log(data);
            if (data['status']) {
                this.color_vote = "danger";
            }
            else {
                this.color_vote = "none";
            }
        });
    }
};
tslib_1.__decorate([
    ViewChild(IonContent, { static: false }),
    tslib_1.__metadata("design:type", IonContent)
], DetailLaporanPage.prototype, "content", void 0);
DetailLaporanPage = tslib_1.__decorate([
    Component({
        selector: 'app-detail-laporan',
        templateUrl: './detail-laporan.page.html',
        styleUrls: ['./detail-laporan.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        Router,
        SharedService,
        AlertService])
], DetailLaporanPage);
export { DetailLaporanPage };
//# sourceMappingURL=detail-laporan.page.js.map