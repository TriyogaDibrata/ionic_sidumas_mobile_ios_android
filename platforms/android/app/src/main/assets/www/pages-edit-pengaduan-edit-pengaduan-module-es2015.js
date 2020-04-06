(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-pengaduan-edit-pengaduan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/edit-pengaduan/edit-pengaduan.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/edit-pengaduan/edit-pengaduan.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Pengaduan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n\n  <ion-row class=\"ion-justify-content-center ion-padding\">\n    <ion-col size=\"12\" size-md=\"6\" size-xl=\"6\" class=\"ion-no-padding\">\n\n      <ion-item class=\"ion-no-padding\">\n        <ion-label position=\"stacked\">Kategori</ion-label>\n        <ion-select [(ngModel)]=\"detail.kategori_id\" [selectedText]=\"detail.kategori_name\">\n          <ion-select-option *ngFor=\"let cat of categories\" value=\"{{ cat.id }}\">{{ cat.kategori_name }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item class=\"ion-no-padding\">\n        <ion-label position=\"stacked\">Topik Pengaduan</ion-label>\n        <ion-textarea [(ngModel)]=\"detail.topik\"></ion-textarea>\n      </ion-item>\n\n      <ion-item class=\"ion-no-padding\">\n        <ion-label position=\"stacked\">Uraian Pengaduan</ion-label>\n        <ion-textarea [(ngModel)]=\"detail.uraian\" auto-grow></ion-textarea>\n      </ion-item>\n\n      <ion-item class=\"ion-no-padding\">\n        <ion-label>Rahasiakan Identitas</ion-label>\n        <ion-checkbox slot=\"end\" [(ngModel)]=\"detail.hide_id\"></ion-checkbox>\n      </ion-item>\n\n      <ion-item class=\"ion-no-padding\">\n        <ion-label>Rahasiakan Identitas</ion-label>\n        <ion-checkbox slot=\"end\" [(ngModel)]=\"detail.hide_pgn\"></ion-checkbox>\n      </ion-item>\n\n\n      <ion-row class=\"ion-align-items-center ion-no-padding\">\n        <ion-col size=\"9\">\n          <ion-item class=\"ion-no-padding\">\n            <ion-label position=\"stacked\">Lokasi</ion-label>\n            <ion-textarea [(ngModel)]=\"address\" auto-grow></ion-textarea>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-chip class=\"ion-text-center\" (click)=\"chooseLocation()\"><ion-icon name=\"pin\" color=\"danger\"></ion-icon><ion-label>Ubah Lokasi</ion-label></ion-chip>\n        </ion-col>\n      </ion-row>\n\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col size=\"4\" *ngFor=\"let file of files; let id = index\">\n            <ion-card class=\"block\">\n              <ion-icon name=\"close-circle\" class=\"deleteIcon\" (click)=\"deleteFiles(file.id, detail.id, id)\"></ion-icon>\n              <img [src]=\"file.fullpath\"/>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"4\" *ngFor=\"let photo of photos; let id = index\">\n            <ion-card class=\"block\">\n              <ion-icon name=\"close-circle\" class=\"deleteIcon\" (click)=\"deletePhoto(id)\">\n                <img [src]=\"photo\" *ngIf=\"photo\"/>\n              </ion-icon> \n            </ion-card>\n          </ion-col>\n          <ion-col size=\"4\" class=\"ion-text-center fw500\" (click)=\"selectPhoto()\">\n            <img src=\"assets/icon/ico-addimage.jpg\" />\n            <ion-label>Tambah Gambar</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"block\" color=\"danger\" size=\"medium\" (click)=\"save()\">Simpan</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/edit-pengaduan/edit-pengaduan.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/edit-pengaduan/edit-pengaduan.module.ts ***!
  \***************************************************************/
/*! exports provided: EditPengaduanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPengaduanPageModule", function() { return EditPengaduanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_pengaduan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-pengaduan.page */ "./src/app/pages/edit-pengaduan/edit-pengaduan.page.ts");







const routes = [
    {
        path: '',
        component: _edit_pengaduan_page__WEBPACK_IMPORTED_MODULE_6__["EditPengaduanPage"]
    }
];
let EditPengaduanPageModule = class EditPengaduanPageModule {
};
EditPengaduanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_edit_pengaduan_page__WEBPACK_IMPORTED_MODULE_6__["EditPengaduanPage"]]
    })
], EditPengaduanPageModule);



/***/ }),

/***/ "./src/app/pages/edit-pengaduan/edit-pengaduan.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/edit-pengaduan/edit-pengaduan.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #eeeeee;\n  font-family: Lato-Regular;\n  --ion-font-family: Lato-Regular;\n}\n\n.block .deleteIcon {\n  position: absolute !important;\n  color: #ffffff !important;\n  margin-left: 85% !important;\n}\n\n.block .deleteIcon:before {\n  font-size: 40px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC9wYWdlcy9lZGl0LXBlbmdhZHVhbi9lZGl0LXBlbmdhZHVhbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXQtcGVuZ2FkdWFuL2VkaXQtcGVuZ2FkdWFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREdJO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDQU47O0FERUk7RUFDRSwwQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC1wZW5nYWR1YW4vZWRpdC1wZW5nYWR1YW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZCA6ICNlZWVlZWU7XG4gIGZvbnQtZmFtaWx5IDogTGF0by1SZWd1bGFyO1xuICAtLWlvbi1mb250LWZhbWlseSA6IExhdG8tUmVndWxhcjtcbn1cblxuLmJsb2NrIHtcbiAgICAuZGVsZXRlSWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tbGVmdDogODUlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kZWxldGVJY29uOmJlZm9yZSB7XG4gICAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcbiAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG59XG5cbi5ibG9jayAuZGVsZXRlSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogODUlICFpbXBvcnRhbnQ7XG59XG4uYmxvY2sgLmRlbGV0ZUljb246YmVmb3JlIHtcbiAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/edit-pengaduan/edit-pengaduan.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/edit-pengaduan/edit-pengaduan.page.ts ***!
  \*************************************************************/
/*! exports provided: EditPengaduanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPengaduanPage", function() { return EditPengaduanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var src_app_modal_places_modal_places_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modal-places/modal-places.page */ "./src/app/modal-places/modal-places.page.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");









let EditPengaduanPage = class EditPengaduanPage {
    constructor(route, Router, sharedService, alertService, loadingCtrl, alertCtrl, nativeGeocoder, modalCtrl, actionSheetCtrl, camera, navCtrl) {
        this.route = route;
        this.Router = Router;
        this.sharedService = sharedService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.detail = {};
        this.files = [];
        this.hide_identitas = false;
        this.hide_pengaduan = false;
        this.files = [];
        this.photos = [];
    }
    ngOnInit() {
        this.pengaduan_id = this.route.snapshot.paramMap.get('id');
        this.photos = [];
    }
    ionViewWillEnter() {
        this.getDetail();
        this.getKategori();
    }
    getDetail() {
        this.showLoading();
        this.sharedService.getDetailPengaduan(this.pengaduan_id)
            .subscribe(data => {
            this.detail = data['data'];
            this.geocoder(this.detail.koordinat_lat, this.detail.koordinat_lng);
            console.log(this.detail.hide_identitas);
            this.files = this.detail['files'];
            this.getDesa(this.detail.koordinat_lat, this.detail.koordinat_lng);
            this.loading.dismiss();
        }, err => {
            this.loading.dismiss();
            console.log(err);
        });
    }
    getKategori() {
        this.sharedService.getAllCategory()
            .subscribe(data => {
            this.categories = data;
            console.log(data);
        }, err => {
            console.log(err);
        });
    }
    hide_id() {
        if (this.detail.hide_identitas == 1) {
            this.alertService.presentAlert('Rahasiakan Identitas', 'Dengan mengaktifkan fitur ini maka identitas anda akan di rahasiakan');
        }
        else {
        }
    }
    hide_rp() {
        if (this.detail.hide_pengaduan == 1) {
            this.alertService.presentAlert('Rahasiakan Pengaduan', 'Dengan mengaktifkan fitur ini maka pengaduan anda akan di rahasiakan');
        }
        else {
        }
    }
    showLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create(this.sharedService.loadingOption);
            yield this.loading.present();
        });
    }
    deleteFiles(file_id, pengaduan_id, index) {
        console.log(file_id, pengaduan_id);
        this.sharedService.deleteFile(file_id, pengaduan_id)
            .subscribe(data => {
            console.log(data);
            this.files.splice(index, 1);
        }, err => {
            console.log(err);
        });
    }
    deleteFilesConfirm(file_id, pengaduan_id, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const confirm = yield this.alertCtrl.create({
                header: 'Perhatian!',
                message: 'Apakah anda yakin untuk menghapus foto ini ?',
                buttons: [
                    {
                        text: 'Tidak',
                        handler: () => {
                            console.log('Disagree clicked');
                        }
                    }, {
                        text: 'Iya',
                        handler: () => {
                            console.log('Agree clicked');
                            this.deleteFiles(file_id, pengaduan_id, index);
                        }
                    }
                ]
            });
            yield confirm.present();
        });
    }
    geocoder(lat, lng) {
        let options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lat, lng, options)
            .then((result) => {
            this.loading.dismiss();
            this.address = this.generateAddress(result[0]);
        }).catch((error) => this.loading.dismiss());
    }
    generateAddress(addressObj) {
        let obj = [];
        let address = "";
        for (let key in addressObj) {
            obj.push(addressObj[key]);
        }
        obj.reverse();
        for (let val in obj) {
            if (obj[val].length)
                address += obj[val] + ', ';
        }
        return address.slice(0, -2);
    }
    chooseLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_modal_places_modal_places_page__WEBPACK_IMPORTED_MODULE_7__["ModalPlacesPage"],
            });
            modal.onDidDismiss().then(data => {
                this.detail.koordinat_lat = data['data']['lat'];
                this.detail.koordinat_lng = data['data']['lng'];
                this.geocoder(this.detail.koordinat_lat, this.detail.koordinat_lng);
                this.getDesa(this.detail.koordinat_lat, this.detail.koordinat_lng);
            });
            return yield modal.present();
        });
    }
    selectPhoto() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Upload Gambar',
                buttons: [{
                        text: 'Pilih Dari Gallery',
                        icon: 'photos',
                        handler: () => {
                            this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    }, {
                        text: 'Ambil Gamber',
                        icon: 'camera',
                        handler: () => {
                            this.takePhoto(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Batal',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    takePhoto(sourceType) {
        const options = {
            quality: 100,
            targetHeight: 600,
            targetWidth: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photos.push(this.base64Image);
            this.photos.reverse();
        }, (err) => {
            console.log(err);
        });
    }
    deletePhoto(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const confirm = yield this.alertCtrl.create({
                header: 'Perhatiaan',
                message: 'Apakah anda yakin untuk menghapus foto ini ?',
                buttons: [
                    {
                        text: 'Tidak',
                        handler: () => {
                            console.log('Disagree clicked');
                        }
                    }, {
                        text: 'Iya',
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
    getDesa(lat, lng) {
        this.sharedService.getDesaID(lat, lng).subscribe(data => {
            console.log(data);
            this.desa = data;
            this.loading.dismiss();
        }, err => {
            console.log(err);
        });
    }
    save() {
        let data = {
            'id': this.detail.id,
            'topik': this.detail.topik,
            'uraian': this.detail.uraian,
            'lat': this.detail.koordinat_lat,
            'lng': this.detail.koordinat_lng,
            'alamat': this.address,
            'hide_identitas': this.detail.hide_id,
            'hide_pengaduan': this.detail.hide_pgn,
            'kategori_id': this.detail.kategori_id,
            'files': this.photos,
            'opd_id': this.desa.opd_id,
        };
        this.showLoading();
        this.sharedService.updatePengaduan(data)
            .subscribe(data => {
            if (data['success']) {
                this.loading.dismiss();
                this.navCtrl.navigateRoot('app/tabs/search');
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
EditPengaduanPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
EditPengaduanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-pengaduan',
        template: __webpack_require__(/*! raw-loader!./edit-pengaduan.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/edit-pengaduan/edit-pengaduan.page.html"),
        styles: [__webpack_require__(/*! ./edit-pengaduan.page.scss */ "./src/app/pages/edit-pengaduan/edit-pengaduan.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], EditPengaduanPage);



/***/ })

}]);
//# sourceMappingURL=pages-edit-pengaduan-edit-pengaduan-module-es2015.js.map