import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
let AlertService = class AlertService {
    constructor(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    presentAlert(header, msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: header,
                message: msg,
                buttons: ['Ok']
            });
            yield alert.present();
        });
    }
    presentToast(msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
                position: 'top'
            });
            yield toast.present();
        });
    }
};
AlertService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AlertController,
        ToastController])
], AlertService);
export { AlertService };
//# sourceMappingURL=alert.service.js.map