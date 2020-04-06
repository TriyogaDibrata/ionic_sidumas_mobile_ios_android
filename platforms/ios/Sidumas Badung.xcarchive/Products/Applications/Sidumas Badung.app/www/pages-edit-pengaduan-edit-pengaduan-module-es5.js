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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_pengaduan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-pengaduan.page */ "./src/app/pages/edit-pengaduan/edit-pengaduan.page.ts");







var routes = [
    {
        path: '',
        component: _edit_pengaduan_page__WEBPACK_IMPORTED_MODULE_6__["EditPengaduanPage"]
    }
];
var EditPengaduanPageModule = /** @class */ (function () {
    function EditPengaduanPageModule() {
    }
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
    return EditPengaduanPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var src_app_modal_places_modal_places_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modal-places/modal-places.page */ "./src/app/modal-places/modal-places.page.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");









var EditPengaduanPage = /** @class */ (function () {
    function EditPengaduanPage(route, Router, sharedService, alertService, loadingCtrl, alertCtrl, nativeGeocoder, modalCtrl, actionSheetCtrl, camera, navCtrl) {
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
    EditPengaduanPage.prototype.ngOnInit = function () {
        this.pengaduan_id = this.route.snapshot.paramMap.get('id');
        this.photos = [];
    };
    EditPengaduanPage.prototype.ionViewWillEnter = function () {
        this.getDetail();
        this.getKategori();
    };
    EditPengaduanPage.prototype.getDetail = function () {
        var _this = this;
        this.showLoading();
        this.sharedService.getDetailPengaduan(this.pengaduan_id)
            .subscribe(function (data) {
            _this.detail = data['data'];
            _this.geocoder(_this.detail.koordinat_lat, _this.detail.koordinat_lng);
            console.log(_this.detail.hide_identitas);
            _this.files = _this.detail['files'];
            _this.getDesa(_this.detail.koordinat_lat, _this.detail.koordinat_lng);
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
        });
    };
    EditPengaduanPage.prototype.getKategori = function () {
        var _this = this;
        this.sharedService.getAllCategory()
            .subscribe(function (data) {
            _this.categories = data;
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    EditPengaduanPage.prototype.hide_id = function () {
        if (this.detail.hide_identitas == 1) {
            this.alertService.presentAlert('Rahasiakan Identitas', 'Dengan mengaktifkan fitur ini maka identitas anda akan di rahasiakan');
        }
        else {
        }
    };
    EditPengaduanPage.prototype.hide_rp = function () {
        if (this.detail.hide_pengaduan == 1) {
            this.alertService.presentAlert('Rahasiakan Pengaduan', 'Dengan mengaktifkan fitur ini maka pengaduan anda akan di rahasiakan');
        }
        else {
        }
    };
    EditPengaduanPage.prototype.showLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create(this.sharedService.loadingOption)];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPengaduanPage.prototype.deleteFiles = function (file_id, pengaduan_id, index) {
        var _this = this;
        console.log(file_id, pengaduan_id);
        this.sharedService.deleteFile(file_id, pengaduan_id)
            .subscribe(function (data) {
            console.log(data);
            _this.files.splice(index, 1);
        }, function (err) {
            console.log(err);
        });
    };
    EditPengaduanPage.prototype.deleteFilesConfirm = function (file_id, pengaduan_id, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Perhatian!',
                            message: 'Apakah anda yakin untuk menghapus foto ini ?',
                            buttons: [
                                {
                                    text: 'Tidak',
                                    handler: function () {
                                        console.log('Disagree clicked');
                                    }
                                }, {
                                    text: 'Iya',
                                    handler: function () {
                                        console.log('Agree clicked');
                                        _this.deleteFiles(file_id, pengaduan_id, index);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPengaduanPage.prototype.geocoder = function (lat, lng) {
        var _this = this;
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lat, lng, options)
            .then(function (result) {
            _this.loading.dismiss();
            _this.address = _this.generateAddress(result[0]);
        }).catch(function (error) {
            return _this.loading.dismiss();
        });
    };
    EditPengaduanPage.prototype.generateAddress = function (addressObj) {
        var obj = [];
        var address = "";
        for (var key in addressObj) {
            obj.push(addressObj[key]);
        }
        obj.reverse();
        for (var val in obj) {
            if (obj[val].length)
                address += obj[val] + ', ';
        }
        return address.slice(0, -2);
    };
    EditPengaduanPage.prototype.chooseLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_modal_places_modal_places_page__WEBPACK_IMPORTED_MODULE_7__["ModalPlacesPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.detail.koordinat_lat = data['data']['lat'];
                            _this.detail.koordinat_lng = data['data']['lng'];
                            _this.geocoder(_this.detail.koordinat_lat, _this.detail.koordinat_lng);
                            _this.getDesa(_this.detail.koordinat_lat, _this.detail.koordinat_lng);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditPengaduanPage.prototype.selectPhoto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: 'Upload Gambar',
                            buttons: [{
                                    text: 'Pilih Dari Gallery',
                                    icon: 'photos',
                                    handler: function () {
                                        _this.takePhoto(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                }, {
                                    text: 'Ambil Gamber',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.takePhoto(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Batal',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPengaduanPage.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            targetHeight: 600,
            targetWidth: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
        }, function (err) {
            console.log(err);
        });
    };
    EditPengaduanPage.prototype.deletePhoto = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Perhatiaan',
                            message: 'Apakah anda yakin untuk menghapus foto ini ?',
                            buttons: [
                                {
                                    text: 'Tidak',
                                    handler: function () {
                                        console.log('Disagree clicked');
                                    }
                                }, {
                                    text: 'Iya',
                                    handler: function () {
                                        console.log('Agree clicked');
                                        _this.photos.splice(index, 1);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPengaduanPage.prototype.getDesa = function (lat, lng) {
        var _this = this;
        this.sharedService.getDesaID(lat, lng).subscribe(function (data) {
            console.log(data);
            _this.desa = data;
            _this.loading.dismiss();
        }, function (err) {
            console.log(err);
        });
    };
    EditPengaduanPage.prototype.save = function () {
        var _this = this;
        var data = {
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
            .subscribe(function (data) {
            if (data['success']) {
                _this.loading.dismiss();
                _this.navCtrl.navigateRoot('app/tabs/search');
                _this.alertService.presentToast('Pengaduan Berhasil Disimpan');
            }
            else {
                _this.loading.dismiss();
                _this.alertService.presentAlert('Gagal menyimpan data', 'Terjadi kesalahan saat menyimpan data');
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.alertService.presentAlert('Gagal menyimpan data', 'Terjadi kesalahan saat menyimpan data');
        });
    };
    EditPengaduanPage.ctorParameters = function () { return [
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
    ]; };
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
    return EditPengaduanPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-pengaduan-edit-pengaduan-module-es5.js.map