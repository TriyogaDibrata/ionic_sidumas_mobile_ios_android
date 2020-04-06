import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { NavController, AlertController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { ActivatedRoute, Router } from '@angular/router';
let LaporFilePage = class LaporFilePage {
    constructor(commonService, cameraPreview, navCtrl, alertCtrl, camera, route, router) {
        this.commonService = commonService;
        this.cameraPreview = cameraPreview;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.route = route;
        this.router = router;
        this.screenHeight = window.screen.height / 2;
        this.dataObj = {};
        // this.openCamera();
    }
    ionViewWillEnter() {
        this.openCamera();
    }
    ngOnInit() {
        this.dataRec = this.route.snapshot.paramMap.get('dataObj');
        this.photos = [];
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.cameraPreview.stopCamera();
    }
    ionViewWillLeave() {
        this.cameraPreview.stopCamera();
    }
    goTo(page) {
        this.commonService.goTo(page);
    }
    goForward(page) {
        this.commonService.goForward(page);
    }
    goBack(page) {
        this.commonService.goForward(page);
    }
    back() {
        this.navCtrl.back();
    }
    openCamera() {
        const cameraPreviewOpts = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: this.screenHeight,
            camera: this.cameraPreview.CAMERA_DIRECTION.BACK,
            tapPhoto: true,
            previewDrag: false,
            toBack: true,
            alpha: 1
        };
        this.cameraPreview.startCamera(cameraPreviewOpts);
    }
    // take a picture
    takePicture() {
        const pictureOpts = {
            width: 1280,
            height: 1280
        };
        this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
            this.photos.push(this.base64Image);
            this.photos.reverse();
        }, (err) => {
            console.log(err);
            // this.picture = 'assets/img/test.jpg';
        });
    }
    deletePhoto(index) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const confirm = yield this.alertCtrl.create({
                header: 'Sure you want to delete this photo? There is NO undo!',
                message: '',
                buttons: [
                    {
                        text: 'No',
                        handler: () => {
                            console.log('Disagree clicked');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            console.log('Agree clicked');
                            this.photos.splice(index, 1);
                        }
                    }
                ]
            });
            yield confirm.present();
        });
    }
    openGallery() {
        const options = {
            quality: 100,
            targetHeight: 600,
            targetWidth: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photos.push(this.base64Image);
            this.photos.reverse();
        }, (err) => {
            console.log(err);
        });
    }
    toTinjau() {
        let combineObj = {
            'data': this.dataRec,
            'files': this.photos,
        };
        let dataString = JSON.stringify(combineObj);
        this.navCtrl.navigateForward(['lapor-tinjau', dataString]);
    }
};
LaporFilePage = tslib_1.__decorate([
    Component({
        selector: 'app-lapor-file',
        templateUrl: './lapor-file.page.html',
        styleUrls: ['./lapor-file.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [CommonService,
        CameraPreview,
        NavController,
        AlertController,
        Camera,
        ActivatedRoute,
        Router])
], LaporFilePage);
export { LaporFilePage };
//# sourceMappingURL=lapor-file.page.js.map