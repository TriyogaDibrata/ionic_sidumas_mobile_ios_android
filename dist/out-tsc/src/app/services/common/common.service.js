import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
let CommonService = class CommonService {
    constructor(navCtrl, toast, alert) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.alert = alert;
    }
    goTo(page) {
        this.navCtrl.navigateRoot(page);
    }
    goForward(page) {
        this.navCtrl.navigateForward(page);
    }
    goBack(page) {
        this.navCtrl.navigateBack(page);
    }
    presentToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 2000,
                position: 'top',
                color: 'dark'
            });
            toast.present();
        });
    }
    presentAlert(header, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: header,
                message: message,
                buttons: ['OK']
            });
            alert.present();
        });
    }
};
CommonService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        ToastController,
        AlertController])
], CommonService);
export { CommonService };
//# sourceMappingURL=common.service.js.map