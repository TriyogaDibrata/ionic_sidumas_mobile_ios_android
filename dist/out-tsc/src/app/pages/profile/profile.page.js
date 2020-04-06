import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';
import { AuthService } from 'src/app/services/auht/auth.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { NavController, AlertController } from '@ionic/angular';
let ProfilePage = class ProfilePage {
    constructor(commonService, authService, sharedService, navCtrl, alertCtrl) {
        this.commonService = commonService;
        this.authService = authService;
        this.sharedService = sharedService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.statuses = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getUser();
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
            this.user = data;
            this.user_name = data['name'];
            this.user_email = data['email'];
            this.user_id = data['id'];
            console.log(data);
            this.lihatUserStatus(this.user_id);
        });
    }
    update_profile(id) {
        this.navCtrl.navigateForward(['/update-profile', id]);
    }
    update_password(id) {
        this.navCtrl.navigateForward(['/update-password', id]);
    }
    lihatUserStatus(user_id) {
        this.sharedService.seeUserStatus(user_id)
            .subscribe(data => {
            console.log(data);
            this.statuses = data;
        });
    }
};
ProfilePage = tslib_1.__decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.page.html',
        styleUrls: ['./profile.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [CommonService,
        AuthService,
        SharedService,
        NavController,
        AlertController])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map