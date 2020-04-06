import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { SharedService } from 'src/app/services/shared/shared.service';
import { LoadingController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert/alert.service';
let UpdateProfilePage = class UpdateProfilePage {
    constructor(camera, sharedService, loadingCtrl, navCtrl, alertService) {
        this.camera = camera;
        this.sharedService = sharedService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getUserInformation();
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
    takePhoto(type) {
        const options = {
            quality: 100,
            targetHeight: 120,
            targetWidth: 120,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            sourceType: this.camera.PictureSourceType.CAMERA,
        };
        this.camera.getPicture(options).then((imageData) => {
            if (type === "user_photo") {
                this.verified_foto = "data:image/jpeg;base64," + imageData;
            }
            else {
                this.ktp = "data:image/jpeg;base64," + imageData;
            }
        }, (err) => {
            console.log(err);
        });
    }
    getUserInformation() {
        this.sharedService.getUser()
            .subscribe(data => {
            console.log(data);
            this.user = data;
            this.user_id = data['id'];
            this.name = data['name'];
            this.email = data['email'];
            this.bio = data['description'];
            this.no_hp = data['no_hp'];
            this.birthday = data['tgl_lahir'];
            this.nik = data['nik'];
            this.ktp = data['ktp'];
            this.verified_foto = data['verified_foto'];
            this.path_ktp = data['path_ktp'];
            this.path_verified_foto = data['path_verified_foto'];
            this.sex = data['sex'];
        });
    }
    updateProfile() {
        this.showLoading();
        let data = {
            'id': this.user_id,
            'name': this.name,
            'description': this.bio,
            'sex': this.sex,
            'no_hp': this.no_hp,
            'tgl_lahir': this.birthday,
            'nik': this.nik,
            'ktp': this.ktp,
            'foto': this.verified_foto
        };
        // return console.log(data);
        this.sharedService.updateProfileUser(data)
            .subscribe(data => {
            if (data['success']) {
                this.loading.dismiss();
                this.navCtrl.navigateRoot('/app/tabs/profile');
                this.alertService.presentToast('Informasi berhasil diperbaharui');
            }
        }, err => {
            this.loading.dismiss();
            this.alertService.presentAlert('Oooops', err);
            console.log(err);
        });
    }
};
UpdateProfilePage = tslib_1.__decorate([
    Component({
        selector: 'app-update-profile',
        templateUrl: './update-profile.page.html',
        styleUrls: ['./update-profile.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Camera,
        SharedService,
        LoadingController,
        NavController,
        AlertService])
], UpdateProfilePage);
export { UpdateProfilePage };
//# sourceMappingURL=update-profile.page.js.map