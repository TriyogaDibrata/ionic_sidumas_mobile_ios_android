import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { EnvService } from 'src/app/services/env/env.service';
import { AuthService } from 'src/app/services/auht/auth.service';
import * as moment from 'moment';
import { CommonService } from 'src/app/services/common/common.service';
import { AlertController } from '@ionic/angular';
let HomePage = class HomePage {
    constructor(sharedService, env, authService, commonService, alertCtrl) {
        this.sharedService = sharedService;
        this.env = env;
        this.authService = authService;
        this.commonService = commonService;
        this.alertCtrl = alertCtrl;
        this.user = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getListPengaduan();
        this.getUser();
    }
    seeDetail(id) {
        this.commonService.goForward(['detail-laporan/', id]);
    }
    getListPengaduan() {
        this.sharedService.getListPengaduan()
            .subscribe(data => {
            console.log(data['data']);
            this.lists = data['data'];
        });
    }
    converTime(time) {
        moment.locale('id');
        let local_time = moment(time).fromNow();
        return local_time;
    }
    presentAlertConfirm() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Perhatian!',
                message: 'Apakah anda yakin ingin keluar ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            this.logout();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    logout() {
        this.authService.logout();
    }
    getUser() {
        this.sharedService.getUser()
            .subscribe(data => {
            console.log(data);
            this.user = data;
        }, err => {
            console.log(err);
        });
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.page.html',
        styleUrls: ['./home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [SharedService,
        EnvService,
        AuthService,
        CommonService,
        AlertController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map