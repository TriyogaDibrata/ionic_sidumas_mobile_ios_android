import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailLaporanPage } from './detail-laporan.page';
const routes = [
    {
        path: '',
        component: DetailLaporanPage
    }
];
let DetailLaporanPageModule = class DetailLaporanPageModule {
};
DetailLaporanPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DetailLaporanPage]
    })
], DetailLaporanPageModule);
export { DetailLaporanPageModule };
//# sourceMappingURL=detail-laporan.module.js.map