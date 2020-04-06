(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-project-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/project/project.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/project/project.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Project</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list *ngFor=\"let p of project\">\n        <ion-card>\n          <ion-card-content>\n            <ion-item no-padding>\n              <ion-row>\n                <ion-title>\n                  {{p.nama}}\n                </ion-title>\n              </ion-row>\n            </ion-item>\n    \n            <ion-row>\n              <ion-col size=\"6\">\n                Jumlah Pengaduan\n              </ion-col>\n              <ion-col size=\"1\">\n                :\n              </ion-col>\n              <ion-col size=\"5\">\n                {{p.jumlah_pengaduan}}\n              </ion-col>\n            </ion-row>\n    \n            <ion-row>\n              <ion-col size=\"6\">\n                Tanggal Mulai\n              </ion-col>\n              <ion-col size=\"1\">\n                :\n              </ion-col>\n              <ion-col size=\"5\">\n                {{p.start_date}}\n              </ion-col>\n            </ion-row>\n    \n            <ion-row>\n              <ion-col size=\"6\">\n                Tanggal Berakhir\n              </ion-col>\n              <ion-col size=\"1\">\n                :\n              </ion-col>\n              <ion-col size=\"5\">\n                {{p.end_date}}\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n          <ion-card-content no-padding>\n            <ion-button color=\"secondary\" class=\"ion-float-right ion-margin\" (click)=\"detailProject(p.id)\">\n              <ion-icon name=\"eye\"></ion-icon>\n              Detail\n            </ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/project/project.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/project/project.module.ts ***!
  \*************************************************/
/*! exports provided: ProjectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageModule", function() { return ProjectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _project_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project.page */ "./src/app/pages/project/project.page.ts");







var routes = [
    {
        path: '',
        component: _project_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPage"]
    }
];
var ProjectPageModule = /** @class */ (function () {
    function ProjectPageModule() {
    }
    ProjectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_project_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPage"]]
        })
    ], ProjectPageModule);
    return ProjectPageModule;
}());



/***/ }),

/***/ "./src/app/pages/project/project.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/project/project.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3QvcHJvamVjdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/project/project.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/project/project.page.ts ***!
  \***********************************************/
/*! exports provided: ProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPage", function() { return ProjectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ProjectPage = /** @class */ (function () {
    function ProjectPage(sharedService, navCtrl) {
        this.sharedService = sharedService;
        this.navCtrl = navCtrl;
        this.user = {};
    }
    ProjectPage.prototype.ngOnInit = function () {
    };
    ProjectPage.prototype.ionViewWillEnter = function () {
        this.getUser();
    };
    ProjectPage.prototype.getUser = function () {
        this.user = this.sharedService.getUserCache();
        this.getProject(this.user['opd_id']);
    };
    ProjectPage.prototype.getProject = function (opd_id) {
        var _this = this;
        this.sharedService.getProject(opd_id)
            .subscribe(function (data) {
            console.log(data['data']);
            _this.project = data['data'];
        });
    };
    ProjectPage.prototype.detailProject = function (id) {
        this.navCtrl.navigateForward(['detail-project', id]);
    };
    ProjectPage.ctorParameters = function () { return [
        { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    ProjectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! raw-loader!./project.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/project/project.page.html"),
            styles: [__webpack_require__(/*! ./project.page.scss */ "./src/app/pages/project/project.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], ProjectPage);
    return ProjectPage;
}());



/***/ })

}]);
//# sourceMappingURL=project-project-module-es5.js.map