(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lapor-tinjau-lapor-tinjau-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/lapor-tinjau/lapor-tinjau.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/lapor-tinjau/lapor-tinjau.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button> -->\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Pratinjau</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n      \n  <ion-row class=\"ion-justify-content-center\" no-padding>\n    <ion-col size=\"12\" size-md=\"6\" size-xl=\"6\" no-padding>\n\n      <ion-item-divider color=\"primary\" *ngIf=\"dataUraian.hide_identity && dataUraian.hide_report\"><ion-icon name=\"information-circle\"></ion-icon> Laporan ini bersifat rahasia dan identitas anda akan disembunyikan</ion-item-divider>\n      <ion-item-divider color=\"primary\" *ngIf=\"dataUraian.hide_identity && !dataUraian.hide_report\"><ion-icon name=\"information-circle\"></ion-icon> Identitas anda pada laporan ini di rahasiakan</ion-item-divider>\n      <ion-item-divider color=\"primary\" *ngIf=\"!dataUraian.hide_identity && dataUraian.hide_report\"><ion-icon name=\"information-circle\"></ion-icon> Laporan bersifat rahasia</ion-item-divider>\n\n      <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let photo of dataFiles\">\n          <img [src]=\"photo\"/>\n        </ion-slide>\n      </ion-slides>\n\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"bold text12\">Kategori</ion-label>\n        <br/>\n        <ion-input type=\"text\" [(ngModel)]=\"nama_kategori\" readonly></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"bold text12\">Judul</ion-label>\n        <br/>\n        <ion-textarea type=\"text\" [(ngModel)]=\"dataUraian.topik\" readonly></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"text-bold\">Uraian</ion-label>\n        <br/>\n        <ion-textarea type=\"text\" [(ngModel)]=\"dataUraian.uraian\" auto-grow readonly></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"text-bold\">Lokasi</ion-label>\n        <br/>\n        <ion-textarea type=\"text\" [(ngModel)]=\"dataUraian.alamat\" readonly autoGrow></ion-textarea>\n      </ion-item>\n\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"ion-text-center ion-activatable\" (click)=\"sendData()\">\n    <ion-ripple-effect></ion-ripple-effect>\n    <ion-title>Kirim Laporan</ion-title>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/lapor-tinjau/lapor-tinjau.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/lapor-tinjau/lapor-tinjau.module.ts ***!
  \***********************************************************/
/*! exports provided: LaporTinjauPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaporTinjauPageModule", function() { return LaporTinjauPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lapor_tinjau_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lapor-tinjau.page */ "./src/app/pages/lapor-tinjau/lapor-tinjau.page.ts");







const routes = [
    {
        path: '',
        component: _lapor_tinjau_page__WEBPACK_IMPORTED_MODULE_6__["LaporTinjauPage"]
    }
];
let LaporTinjauPageModule = class LaporTinjauPageModule {
};
LaporTinjauPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_lapor_tinjau_page__WEBPACK_IMPORTED_MODULE_6__["LaporTinjauPage"]]
    })
], LaporTinjauPageModule);



/***/ }),

/***/ "./src/app/pages/lapor-tinjau/lapor-tinjau.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/lapor-tinjau/lapor-tinjau.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #eeeeee;\n  font-family: Lato-Regular;\n  --ion-font-family: Lato-Regular;\n}\n\n.info-badge {\n  background-color: #eed91d;\n  color: #000;\n}\n\nion-slides img {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC9wYWdlcy9sYXBvci10aW5qYXUvbGFwb3ItdGluamF1LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFwb3ItdGluamF1L2xhcG9yLXRpbmphdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREdJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYXBvci10aW5qYXUvbGFwb3ItdGluamF1LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZCA6ICNlZWVlZWU7XG4gICAgZm9udC1mYW1pbHkgOiBMYXRvLVJlZ3VsYXI7XG4gICAgLS1pb24tZm9udC1mYW1pbHkgOiBMYXRvLVJlZ3VsYXI7XG59XG5cbi5pbmZvLWJhZGdle1xuICAgIGJhY2tncm91bmQtY29sb3IgOiAjZWVkOTFkO1xuICAgIGNvbG9yIDogIzAwMDtcbn1cblxuaW9uLXNsaWRlc3tcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAtLWlvbi1mb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuXG4uaW5mby1iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWQ5MWQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5pb24tc2xpZGVzIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/lapor-tinjau/lapor-tinjau.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/lapor-tinjau/lapor-tinjau.page.ts ***!
  \*********************************************************/
/*! exports provided: LaporTinjauPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaporTinjauPage", function() { return LaporTinjauPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ "./src/app/services/common/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");







let LaporTinjauPage = class LaporTinjauPage {
    constructor(commonService, navCtrl, route, router, sharedService, alertService, loadingCtrl) {
        this.commonService = commonService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.dataObj = {};
        this.dataUraian = {};
        this.dataFiles = {};
        this.user = {};
        this.desa = {};
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
        this.requireds = [
            'user_id',
            'atas_nama',
            'topik',
            'uraian',
            'lat',
            'lng',
            'email',
            'kategori_id',
            'opd_id'
        ];
        this.hide_info = false;
    }
    ngOnInit() {
        this.showLoading();
        this.dataRec = this.route.snapshot.paramMap.get('dataObj');
        this.dataObj = JSON.parse(this.dataRec);
        this.dataUraian = JSON.parse(this.dataObj['data']);
        this.dataFiles = this.dataObj['files'];
        this.lat = this.dataUraian['lat'];
        this.lng = this.dataUraian['lng'];
        this.getCategoryName(this.dataUraian['kategori_id']);
        this.getDesa(this.lat, this.lng);
    }
    closeTag() {
        this.hide_info = true;
    }
    ionViewWillEnter() {
        this.getUser();
    }
    showLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create(this.sharedService.loadingOption);
            yield this.loading.present();
        });
    }
    goTo(page) {
        this.commonService.goTo(page);
    }
    goBack(page) {
        this.commonService.goBack(page);
    }
    goForward(page) {
        this.commonService.goForward(page);
    }
    back() {
        this.navCtrl.back();
    }
    getUser() {
        this.user = this.sharedService.getUserCache();
    }
    getCategoryName(id) {
        this.sharedService.getKategoriName(id)
            .subscribe(data => {
            this.nama_kategori = data['kategori_name'];
        }, err => {
            console.log(err);
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
    sendData() {
        let data = {
            'user_id': this.user['id'],
            'atas_nama': this.user['name'],
            'topik': this.dataUraian['topik'],
            'uraian': this.dataUraian['uraian'],
            'lat': this.dataUraian['lat'],
            'lng': this.dataUraian['lng'],
            'alamat': this.dataUraian['alamat'],
            'hide_identitas': this.dataUraian['hide_identity'],
            'hide_pengaduan': this.dataUraian['hide_report'],
            'email': this.user['email'],
            'kategori_id': this.dataUraian['kategori_id'],
            'files': this.dataFiles,
            'opd_id': this.desa.opd_id,
        };
        let valid = 1;
        this.requireds.forEach((required) => {
            if (typeof data[required] === 'undefined' || data[required] == '' || data[required] == null) {
                valid = 0;
            }
        });
        if (valid === 0) {
            this.alertService.presentAlert('Gagal Menyimpan Pengaduan', 'Terjadi kesalahan saat membuat pengaduan, mohon ulangi menyimpan / ulangi proses pengaduan.');
            return false;
        }
        this.showLoading();
        this.sharedService.addPengaduan(data)
            .subscribe(data => {
            if (data['success']) {
                this.loading.dismiss();
                this.navCtrl.navigateRoot('app/tabs/home');
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
LaporTinjauPage.ctorParameters = () => [
    { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
LaporTinjauPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lapor-tinjau',
        template: __webpack_require__(/*! raw-loader!./lapor-tinjau.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/lapor-tinjau/lapor-tinjau.page.html"),
        styles: [__webpack_require__(/*! ./lapor-tinjau.page.scss */ "./src/app/pages/lapor-tinjau/lapor-tinjau.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], LaporTinjauPage);



/***/ })

}]);
//# sourceMappingURL=pages-lapor-tinjau-lapor-tinjau-module-es2015.js.map