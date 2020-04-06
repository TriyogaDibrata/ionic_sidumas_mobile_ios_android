(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-project-detail-project-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/detail-project/detail-project.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/detail-project/detail-project.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detail Project</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\" size-md=\"6\" size-xl=\"6\">\n          <ion-list *ngFor=\"let list of lists\">\n            <ion-card>\n              <ion-card-header>\n                <ion-row>\n                  <ion-col no-padding>\n                    <ion-card-subtitle class=\"category\">{{ list['kategori_name'] }} - {{ list['subkategori_name'] }}\n                    </ion-card-subtitle>\n                  </ion-col>\n                  <ion-col no-padding>\n                    <ion-card-subtitle class=\"ion-text-right\">\n                      <ion-chip [style.background]=\"list['color']\">{{ list['status_pengaduan'] }}</ion-chip>\n                    </ion-card-subtitle>\n                  </ion-col>\n                </ion-row>\n              </ion-card-header>\n              <ion-card-content (click)=\"seeDetail(list.id)\">\n                <div class=\"user-avatar\">\n                  <ion-avatar item-left>\n                    <img *ngIf=\"list['avatar'] != null\" [src]=\"list['avatar']\" />\n                    <img *ngIf=\"list['avatar'] == null\" src=\"assets/icon/favicon.png\" />\n                  </ion-avatar>\n                  <div class=\"user-name\">\n                    <h3>{{ list['pelapor'] }}</h3>\n                    <ion-label>{{ converTime(list.tanggal) }}</ion-label>\n                  </div>\n                </div>\n    \n                <ion-card-title>{{ list['topik'] }}</ion-card-title>\n    \n                <div class=\"uraian\">\n                  <ion-row>\n                    <ion-col no-padding class=\"ion-text-wrap\">\n                      <p>{{ list['uraian'] | slice:0:180 }} ...</p>\n                    </ion-col>\n                    <ion-col *ngIf=\"list['file']\" size=\"4\">\n                      <img [src]=\"list['file']['fullpath']\" />\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </ion-card-content>\n              <div class=\"button-group\">\n                <ion-row>\n                  <ion-col class=\"ion-text-center ion-activatable\">\n                    <ion-ripple-effect></ion-ripple-effect>\n                    <span>\n                      <ion-icon name=\"swap\"></ion-icon>\n                      {{ list['tanggapans']['length'] }} Tindak Lanjut\n                    </span>\n                  </ion-col>\n                  <ion-col class=\"ion-text-center ion-activatable\">\n                    <ion-ripple-effect></ion-ripple-effect>\n                    <span>\n                      <ion-icon name=\"chatbubbles\"></ion-icon>\n                      {{ list['comments']['length'] }} Komentar\n                    </span>\n                  </ion-col>\n                  <ion-col class=\"ion-text-center ion-activatable\">\n                    <ion-ripple-effect></ion-ripple-effect>\n                    <span>\n                      <ion-icon name=\"thumbs-up\"></ion-icon>\n                      {{ list['likes']['length'] }} Dukungan\n                    </span>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-card>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/detail-project/detail-project.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/detail-project/detail-project.module.ts ***!
  \***************************************************************/
/*! exports provided: DetailProjectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailProjectPageModule", function() { return DetailProjectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_project_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-project.page */ "./src/app/pages/detail-project/detail-project.page.ts");







const routes = [
    {
        path: '',
        component: _detail_project_page__WEBPACK_IMPORTED_MODULE_6__["DetailProjectPage"]
    }
];
let DetailProjectPageModule = class DetailProjectPageModule {
};
DetailProjectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_detail_project_page__WEBPACK_IMPORTED_MODULE_6__["DetailProjectPage"]]
    })
], DetailProjectPageModule);



/***/ }),

/***/ "./src/app/pages/detail-project/detail-project.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/detail-project/detail-project.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  font-family: Lato-Regular;\n  --ion-font-family: Lato-Regular;\n}\n\n.category {\n  margin-top: 12px;\n}\n\n.user-avatar {\n  display: -webkit-box;\n  display: flex;\n}\n\n.user-avatar ion-avatar {\n  height: 48px;\n  width: 48px;\n  margin-bottom: 20px;\n}\n\n.user-avatar .user-name {\n  margin-left: 8px;\n}\n\n.user-avatar .user-name h3 {\n  font-size: 1rem;\n  font-weight: bolder;\n}\n\nion-card-title {\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.button-group {\n  margin-left: 14px;\n  margin-right: 14px;\n  font-size: 0.8rem;\n  margin: 14px 0 14px 5px;\n}\n\nion-chip {\n  color: #ffffff;\n}\n\n.alertStyle {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cml5b2dhZGlicmF0YS9Eb2N1bWVudHMvbXlfcHJvamVjdC9tb2JpbGVfc2lkdW1hc19pb3Mvc3JjL2FwcC9wYWdlcy9kZXRhaWwtcHJvamVjdC9kZXRhaWwtcHJvamVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldGFpbC1wcm9qZWN0L2RldGFpbC1wcm9qZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNDSjs7QURDSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDUjs7QURFSTtFQUNJLGdCQUFBO0FDQVI7O0FERVE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNBWjs7QURLQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhaWwtcHJvamVjdC9kZXRhaWwtcHJvamVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICBmb250LWZhbWlseSA6IExhdG8tUmVndWxhcjtcbiAgICAtLWlvbi1mb250LWZhbWlseSA6IExhdG8tUmVndWxhcjtcbiAgfVxuXG4uY2F0ZWdvcnkge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi51c2VyLWF2YXRhciB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC51c2VyLW5hbWUge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJ1dHRvbi1ncm91cCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbjogMTRweCAwIDE0cHggNXB4O1xufVxuXG5pb24tY2hpcCB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5hbGVydFN0eWxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufSIsImlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgLS1pb24tZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbn1cblxuLmNhdGVnb3J5IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLnVzZXItYXZhdGFyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi51c2VyLWF2YXRhciBpb24tYXZhdGFyIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi51c2VyLWF2YXRhciAudXNlci1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi51c2VyLWF2YXRhciAudXNlci1uYW1lIGgzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJ1dHRvbi1ncm91cCB7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW46IDE0cHggMCAxNHB4IDVweDtcbn1cblxuaW9uLWNoaXAge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmFsZXJ0U3R5bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/detail-project/detail-project.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/detail-project/detail-project.page.ts ***!
  \*************************************************************/
/*! exports provided: DetailProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailProjectPage", function() { return DetailProjectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let DetailProjectPage = class DetailProjectPage {
    constructor(sharedService, route, navCtrl) {
        this.sharedService = sharedService;
        this.route = route;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.project_id = this.route.snapshot.paramMap.get('id');
    }
    ionViewWillEnter() {
        this.getUser();
        this.getDetailProject();
    }
    getUser() {
        this.user = this.sharedService.getUserCache();
    }
    getDetailProject() {
        this.sharedService.detailProject(this.project_id)
            .subscribe(data => {
            console.log(data);
            this.lists = data['data'];
        });
    }
    converTime(time) {
        moment__WEBPACK_IMPORTED_MODULE_4__["locale"]('id');
        let local_time = moment__WEBPACK_IMPORTED_MODULE_4__(time).fromNow();
        return local_time;
    }
    seeDetail(id) {
        this.navCtrl.navigateForward(['detail-laporan', id]);
    }
};
DetailProjectPage.ctorParameters = () => [
    { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
DetailProjectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-project',
        template: __webpack_require__(/*! raw-loader!./detail-project.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/detail-project/detail-project.page.html"),
        styles: [__webpack_require__(/*! ./detail-project.page.scss */ "./src/app/pages/detail-project/detail-project.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], DetailProjectPage);



/***/ })

}]);
//# sourceMappingURL=pages-detail-project-detail-project-module-es2015.js.map