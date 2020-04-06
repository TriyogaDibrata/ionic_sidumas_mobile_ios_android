(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lapor-lapor-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/lapor/lapor.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/lapor/lapor.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Buat Pengaduan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n  <ion-row class=\"ion-justify-content-center ion-no-padding\">\n    <ion-col size=\"12\" size-md=\"6\" size-xl=\"6\" class=\"ion-no-padding\">\n\n      <ion-item>\n        <ion-textarea [(ngModel)]=\"topik\" placeholder=\"Judul Pengaduan\" rows=\"3\" autocapitalize></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-textarea placeholder=\"Deskripsi Pengaduan\" [(ngModel)]=\"uraian\" rows=\"10\" auto-grow autocapitalize>\n        </ion-textarea>\n      </ion-item>\n\n      <ion-item class=\"ion-no-padding\">\n        <ion-label class=\"toggle-label\">Rahasiakan Identitas</ion-label>\n        <ion-toggle [(ngModel)]=\"hide_identity\" (ngModelChange)=\"hide_id()\"></ion-toggle>\n      </ion-item>\n\n      <ion-item class=\"ion-no-padding\">\n        <ion-label class=\"toggle-label\">Rahasiakan Pengaduan</ion-label>\n        <ion-toggle [(ngModel)]=\"hide_report\" (ngModelChange)=\"hide_rp()\"></ion-toggle>\n      </ion-item>\n\n      <ion-item (click)=\"chooseLocation()\">\n        <ion-label position=\"stacked\">\n          <ion-chip>\n            <ion-icon name=\"pin\" color=\"danger\"></ion-icon>\n            <ion-text>Pilih Lokasi</ion-text>\n          </ion-chip>\n        </ion-label>\n        <ion-textarea [(ngModel)]=\"address\" readonly auto-grow></ion-textarea>\n      </ion-item>\n\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"ion-text-center ion-no-padding\" color=\"none\">\n    <ion-button expand=\"full\" size=\"large\" (click)=\"check()\" color=\"danger\">Lanjutkan</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/lapor/lapor.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/lapor/lapor.module.ts ***!
  \*********************************************/
/*! exports provided: LaporPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaporPageModule", function() { return LaporPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lapor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lapor.page */ "./src/app/pages/lapor/lapor.page.ts");







const routes = [
    {
        path: '',
        component: _lapor_page__WEBPACK_IMPORTED_MODULE_6__["LaporPage"]
    }
];
let LaporPageModule = class LaporPageModule {
};
LaporPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_lapor_page__WEBPACK_IMPORTED_MODULE_6__["LaporPage"]]
    })
], LaporPageModule);



/***/ }),

/***/ "./src/app/pages/lapor/lapor.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/lapor/lapor.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  font-family: Lato-Regular;\n  --ion-font-family: Lato-Regular;\n}\n\n.toggle-label {\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC9wYWdlcy9sYXBvci9sYXBvci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhcG9yL2xhcG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYXBvci9sYXBvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICBmb250LWZhbWlseSA6IExhdG8tUmVndWxhcjtcbiAgICAtLWlvbi1mb250LWZhbWlseSA6IExhdG8tUmVndWxhcjtcbn1cblxuLnRvZ2dsZS1sYWJlbHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbn0iLCJpb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG59XG5cbi50b2dnbGUtbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/lapor/lapor.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/lapor/lapor.page.ts ***!
  \*******************************************/
/*! exports provided: LaporPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaporPage", function() { return LaporPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ "./src/app/services/common/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modal_places_modal_places_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modal-places/modal-places.page */ "./src/app/modal-places/modal-places.page.ts");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");











let LaporPage = class LaporPage {
    constructor(formBuilder, commonService, navCtrl, geolocation, alertService, nativeGeocoder, route, router, modalCtrl, loadingCtrl, platform, sharedService) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.alertService = alertService;
        this.nativeGeocoder = nativeGeocoder;
        this.route = route;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.sharedService = sharedService;
        this.hide_identity = false;
        this.hide_report = false;
        this.backButtonEvent();
    }
    ngOnInit() {
        this.laporForm = this.formBuilder.group({
            'topik': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'uraian': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])]
        });
        this.kategori_id = this.route.snapshot.paramMap.get('kategori_id');
        console.log(this.kategori_id);
    }
    ionViewWillEnter() {
        this.showLoading();
        this.getLocation();
    }
    getLocation() {
        this.geolocation.getCurrentPosition()
            .then((resp) => {
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
            console.log(this.lat, this.lng);
            this.geocoder(this.lat, this.lng);
            this.loading.dismiss();
        }, err => {
            this.loading.dismiss();
            this.alertService.presentAlert('Tidak dapat menemukan lokasi', 'Terjadi kesalahan saat mendapatkan lokasi');
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
    //Return Comma saperated address
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
    check() {
        if (!this.topik || !this.uraian) {
            this.alertService.presentAlert('Lengkapi laporan anda', 'Silahkan lengkapi laporan anda untuk dapat melanjutkan');
        }
        else {
            this.toFile();
        }
    }
    toFile() {
        let dataObj = {
            'kategori_id': this.kategori_id,
            'topik': this.topik,
            'uraian': this.uraian,
            'alamat': this.address,
            'lat': this.lat,
            'lng': this.lng,
            'hide_identity': this.hide_identity,
            'hide_report': this.hide_report,
        };
        let dataString = JSON.stringify(dataObj);
        this.navCtrl.navigateForward(['lapor-file', dataString]);
    }
    goTo(page) {
        this.commonService.goTo(page);
    }
    goForward(page) {
        this.commonService.goForward(page);
    }
    back() {
        this.navCtrl.back();
    }
    hide_id() {
        if (this.hide_identity == true) {
            this.alertService.presentAlert('Rahasiakan Identitas', 'Dengan mengaktifkan fitur ini maka identitas anda akan di rahasiakan');
        }
    }
    hide_rp() {
        if (this.hide_report == true) {
            this.alertService.presentAlert('Rahasiakan Pengaduan', 'Dengan mengaktifkan fitur ini maka pengaduan anda akan di rahasiakan');
        }
    }
    chooseLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_places_modal_places_page__WEBPACK_IMPORTED_MODULE_9__["ModalPlacesPage"],
            });
            modal.onDidDismiss().then(data => {
                this.lat = data['data']['lat'];
                this.lng = data['data']['lng'];
                this.geocoder(this.lat, this.lng);
            });
            return yield modal.present();
        });
    }
    showLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create(this.sharedService.loadingOption);
            yield this.loading.present();
        });
    }
    backButtonEvent() {
        this.platform.backButton.subscribe(data => {
            this.modalCtrl.dismiss();
        });
    }
};
LaporPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] }
];
LaporPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lapor',
        template: __webpack_require__(/*! raw-loader!./lapor.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/lapor/lapor.page.html"),
        styles: [__webpack_require__(/*! ./lapor.page.scss */ "./src/app/pages/lapor/lapor.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
        src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
], LaporPage);



/***/ })

}]);
//# sourceMappingURL=pages-lapor-lapor-module-es2015.js.map