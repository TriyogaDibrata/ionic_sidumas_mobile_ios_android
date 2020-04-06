(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lokasi-lokasi-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/lokasi/lokasi.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/lokasi/lokasi.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Lokasi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"map_canvas\" id=\"map_canvas\" style=\"height: 100%;\"></div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/lokasi/lokasi.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/lokasi/lokasi.module.ts ***!
  \***********************************************/
/*! exports provided: LokasiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LokasiPageModule", function() { return LokasiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lokasi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lokasi.page */ "./src/app/pages/lokasi/lokasi.page.ts");







const routes = [
    {
        path: '',
        component: _lokasi_page__WEBPACK_IMPORTED_MODULE_6__["LokasiPage"]
    }
];
let LokasiPageModule = class LokasiPageModule {
};
LokasiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_lokasi_page__WEBPACK_IMPORTED_MODULE_6__["LokasiPage"]]
    })
], LokasiPageModule);



/***/ }),

/***/ "./src/app/pages/lokasi/lokasi.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/lokasi/lokasi.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xva2FzaS9sb2thc2kucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/lokasi/lokasi.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/lokasi/lokasi.page.ts ***!
  \*********************************************/
/*! exports provided: LokasiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LokasiPage", function() { return LokasiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-maps/ngx */ "./node_modules/@ionic-native/google-maps/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");






let LokasiPage = class LokasiPage {
    constructor(route, nativeGeocoder, alertService) {
        this.route = route;
        this.nativeGeocoder = nativeGeocoder;
        this.alertService = alertService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.lat = this.route.snapshot.paramMap.get('lat');
            this.lng = this.route.snapshot.paramMap.get('lng');
            this.geocoder(this.lat, this.lng);
        });
    }
    ionViewWillEnter() {
        this.initMap();
    }
    geocoder(lat, lng) {
        let options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lat, lng, options)
            .then((result) => {
            this.address = this.generateAddress(result[0]);
        }).catch((error) => console.log(error));
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
    initMap() {
        let mapOptions = {
            camera: {
                target: {
                    lat: this.lat,
                    lng: this.lng
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_2__["GoogleMaps"].create('map_canvas', mapOptions);
        let marker = this.map.addMarkerSync({
            title: this.address,
            icon: 'red',
            animation: 'DROP',
            position: {
                lat: this.lat,
                lng: this.lng
            }
        });
        // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        //   this.alertService.presentAlert('Lokasi', this.address);
        // });
    }
};
LokasiPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"] },
    { type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
LokasiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lokasi',
        template: __webpack_require__(/*! raw-loader!./lokasi.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/lokasi/lokasi.page.html"),
        styles: [__webpack_require__(/*! ./lokasi.page.scss */ "./src/app/pages/lokasi/lokasi.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"],
        src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], LokasiPage);



/***/ })

}]);
//# sourceMappingURL=pages-lokasi-lokasi-module-es2015.js.map