(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-update-profile-update-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/update-profile/update-profile.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/update-profile/update-profile.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Perbarui Profil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"12\" size-md=\"6\" size-xl=\"6\" class=\"ion-no-padding\">\n      <ion-item-divider color=\"medium\">\n        <ion-label>Informasi Publik</ion-label>\n      </ion-item-divider>\n      <ion-list class=\"ion-padding\">\n        <ion-item class=\"ion-no-padding\">\n          <ion-label position=\"stacked\">Nama</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.name\"></ion-input>\n        </ion-item>\n        <ion-item class=\"ion-no-padding\">\n          <ion-label position=\"stacked\">Email</ion-label>\n          <ion-input type=\"email\" [(ngModel)]=\"user.email\"></ion-input>\n        </ion-item>\n        <ion-item class=\"ion-no-padding\">\n          <ion-label position=\"stacked\">Bio</ion-label>\n          <ion-textarea type=\"text\" [(ngModel)]=\"user.description\"></ion-textarea>\n        </ion-item>\n      </ion-list>\n\n      <ion-item-divider color=\"medium\">\n        <ion-label>Informasi Pribadi</ion-label>\n      </ion-item-divider>\n      <ion-list class=\"ion-padding\">\n        <ion-list class=\"ion-no-padding\">\n          <ion-radio-group [(ngModel)]=\"user.sex\" class=\"ion-no-padding\">\n            <ion-list-header class=\"ion-no-padding\">\n              <ion-label>Jenis Kelamin</ion-label>\n            </ion-list-header>\n\n            <ion-item class=\"ion-no-padding\">\n              <ion-label>Laki-Laki</ion-label>\n              <ion-radio slot=\"start\" value=\"1\"></ion-radio>\n            </ion-item>\n\n            <ion-item class=\"ion-no-padding\">\n              <ion-label>Perempuan</ion-label>\n              <ion-radio slot=\"start\" value=\"0\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n        <ion-item class=\"ion-no-padding\">\n          <ion-label position=\"stacked\">No. HP</ion-label>\n          <ion-input type=\"tel\" [(ngModel)]=\"user.no_hp\"></ion-input>\n        </ion-item>\n        <ion-item class=\"ion-no-padding\">\n          <ion-label color=\"dark\" position=\"stacked\">Tanggal Lahir<ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-datetime [hidden]=\"user.status==1\" [monthNames]=\"customMonthNames\" [readonly]=\"user.status==1\" display-format=\"DD MMMM YYYY\" [(ngModel)]=\"user.tgl_lahir\"></ion-datetime>\n          <ion-input *ngIf=\"user.status==1\" [readonly]=\"user.status==1\" type=\"text\" [value]=\"notEditableDate()\" (click)=\"checkChange()\"></ion-input>\n        </ion-item>\n        <ion-item class=\"ion-no-padding\">\n          <ion-label position=\"stacked\">NIK<ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-input [readonly]=\"user.status==1\" type=\"number\" [(ngModel)]=\"user.nik\" (click)=\"checkChange()\"></ion-input>\n        </ion-item>\n        <ion-row>\n          <ion-col class=\"ion-margin ion-text-center\" (click)=\"selectImage('user_photo')\">\n            <ion-img [src]=\"user.verified_foto\" *ngIf=\"user.verified_foto\"></ion-img>\n            <ion-chip [hidden]=\"user.verified_foto\"><ion-icon name=\"contact\"></ion-icon> <ion-label>Upload Foto</ion-label></ion-chip>\n            <ion-label [hidden]=\"!user.verified_foto\">Foto Pengguna<ion-text color=\"danger\">*</ion-text></ion-label>\n          </ion-col>\n          <ion-col class=\"ion-margin ion-text-center\" (click)=\"selectImage('id_photo')\">\n            <ion-img [src]=\"user.ktp\" *ngIf=\"user.ktp\"></ion-img>\n            <ion-chip [hidden]=\"user.ktp\"><ion-icon name=\"card\"></ion-icon> <ion-label>Upload Foto Ktp</ion-label></ion-chip>\n            <ion-label [hidden]=\"!user.ktp\">Foto KTP<ion-text color=\"danger\">*</ion-text></ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-no-padding info\">\n          <ion-col>\n            <ion-text color=\"danger\">*</ion-text><ion-text class=\"text-info\">Digunakan untuk keperluan verifikasi</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-padding\">\n  <ion-button expand=\"full\" size=\"large\" color=\"danger\" (click)=\"updateProfile()\">Simpan</ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/update-profile/update-profile.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/update-profile/update-profile.module.ts ***!
  \***************************************************************/
/*! exports provided: UpdateProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfilePageModule", function() { return UpdateProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-profile.page */ "./src/app/pages/update-profile/update-profile.page.ts");







var routes = [
    {
        path: '',
        component: _update_profile_page__WEBPACK_IMPORTED_MODULE_6__["UpdateProfilePage"]
    }
];
var UpdateProfilePageModule = /** @class */ (function () {
    function UpdateProfilePageModule() {
    }
    UpdateProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_update_profile_page__WEBPACK_IMPORTED_MODULE_6__["UpdateProfilePage"]]
        })
    ], UpdateProfilePageModule);
    return UpdateProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/update-profile/update-profile.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/update-profile/update-profile.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  font-family: Lato-Regular;\n  --ion-font-family: Lato-Regular;\n}\n\nion-img {\n  width: 100%;\n  height: 120px;\n}\n\n.text-info {\n  font-size: 0.7em;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC9wYWdlcy91cGRhdGUtcHJvZmlsZS91cGRhdGUtcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VwZGF0ZS1wcm9maWxlL3VwZGF0ZS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91cGRhdGUtcHJvZmlsZS91cGRhdGUtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgZm9udC1mYW1pbHkgOiBMYXRvLVJlZ3VsYXI7XG4gIC0taW9uLWZvbnQtZmFtaWx5IDogTGF0by1SZWd1bGFyO1xufVxuXG5pb24taW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTIwcHg7XG59XG4udGV4dC1pbmZve1xuICBmb250LXNpemU6IDAuN2VtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4iLCJpb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG59XG5cbmlvbi1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLnRleHQtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/update-profile/update-profile.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/update-profile/update-profile.page.ts ***!
  \*************************************************************/
/*! exports provided: UpdateProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfilePage", function() { return UpdateProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");









var UpdateProfilePage = /** @class */ (function () {
    function UpdateProfilePage(camera, sharedService, loadingCtrl, navCtrl, alertService, crop, actionSheet, file) {
        this.camera = camera;
        this.sharedService = sharedService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.crop = crop;
        this.actionSheet = actionSheet;
        this.file = file;
        this.user = {};
        this.customMonthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        this.croppedImagepath = "";
        this.isLoading = false;
    }
    UpdateProfilePage.prototype.ngOnInit = function () {
    };
    UpdateProfilePage.prototype.ionViewWillEnter = function () {
        this.getUserInformation();
    };
    UpdateProfilePage.prototype.showLoading = function () {
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
    UpdateProfilePage.prototype.checkChange = function () {
        if (this.user.status == 1) {
            this.alertService.presentAlert('Sudah Terverifikasi', 'Informasi ini tidak dapat diubah kembali.');
            return false;
        }
        return true;
    };
    UpdateProfilePage.prototype.notEditableDate = function () {
        moment__WEBPACK_IMPORTED_MODULE_6__["locale"]('id');
        return moment__WEBPACK_IMPORTED_MODULE_6__(this.user.tgl_lahir).format('DD MMMM YYYY');
    };
    UpdateProfilePage.prototype.selectImage = function (imageType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheet.create({
                            header: "Pilih sumber gambar",
                            buttons: [{
                                    text: 'Pilih Dari Galeri',
                                    handler: function () {
                                        _this.pickImage(_this.camera.PictureSourceType.PHOTOLIBRARY, imageType);
                                    }
                                },
                                {
                                    text: 'Ambil Gambar',
                                    handler: function () {
                                        _this.pickImage(_this.camera.PictureSourceType.CAMERA, imageType);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
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
    UpdateProfilePage.prototype.pickImage = function (sourceType, imageType) {
        var _this = this;
        console.log(sourceType, imageType);
        if (this.user.status == 1) {
            this.alertService.presentAlert('Sudah Terverifikasi', 'Informasi ini tidak dapat diubah kembali.');
            return false;
        }
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: false,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // if(imageType === "user_photo"){
            //   this.user.verified_foto = "data:image/jpeg;base64," + imageData;
            // } else {
            //   this.user.ktp = "data:image/jpeg;base64," + imageData;
            // }
            _this.cropImage(imageData, imageType);
        }, function (err) {
            //this.alertService.presentAlert('Gagal membuka kamera', 'Terdapat kesalahan saat membuka kamera');
            console.log(err);
        });
    };
    UpdateProfilePage.prototype.cropImage = function (fileUrl, imageType) {
        var _this = this;
        this.crop.crop(fileUrl, { quality: 50 })
            .then(function (newPath) {
            _this.showCroppedImage(newPath.split('?')[0], imageType);
        }, function (error) {
            alert('Error cropping image' + error);
        });
    };
    UpdateProfilePage.prototype.showCroppedImage = function (ImagePath, imageType) {
        var _this = this;
        this.isLoading = true;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];
        this.file.readAsDataURL(filePath, imageName).then(function (base64) {
            if (imageType === "user_photo") {
                _this.user.verified_foto = base64;
                _this.isLoading = false;
            }
            else {
                _this.user.ktp = base64;
                _this.isLoading = false;
            }
        }, function (error) {
            alert('Error in showing image' + error);
            _this.isLoading = false;
        });
    };
    UpdateProfilePage.prototype.getUserInformation = function () {
        this.user = this.sharedService.getUserCache();
        console.log(this.user);
    };
    UpdateProfilePage.prototype.updateProfile = function () {
        var _this = this;
        this.showLoading();
        var data = {
            'id': this.user.id,
            'name': this.user.name,
            'description': this.user.description,
            'sex': this.user.sex,
            'no_hp': this.user.no_hp,
            'tgl_lahir': this.user.tgl_lahir,
            'nik': this.user.nik,
            'ktp': this.user.ktp,
            'foto': this.user.verified_foto
        };
        this.sharedService.updateProfileUser(data)
            .subscribe(function (data) {
            if (data['success']) {
                _this.loading.dismiss();
                _this.navCtrl.navigateRoot('/app/tabs/profile');
                _this.alertService.presentToast('Informasi berhasil diperbaharui');
                _this.sharedService.getUserCache(true);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.alertService.presentAlert('Oooops', JSON.stringify(err));
            _this.alertService.presentAlert('Gagal menyimpan data', 'Terdapat kesalahan saat menyimpan data');
        });
    };
    UpdateProfilePage.ctorParameters = function () { return [
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
        { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__["Crop"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] }
    ]; };
    UpdateProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-profile',
            template: __webpack_require__(/*! raw-loader!./update-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/update-profile/update-profile.page.html"),
            styles: [__webpack_require__(/*! ./update-profile.page.scss */ "./src/app/pages/update-profile/update-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__["Crop"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"]])
    ], UpdateProfilePage);
    return UpdateProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-update-profile-update-profile-module-es5.js.map