import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LaporKategoriPage } from './lapor-kategori.page';
const routes = [
    {
        path: '',
        component: LaporKategoriPage
    }
];
let LaporKategoriPageModule = class LaporKategoriPageModule {
};
LaporKategoriPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [LaporKategoriPage]
    })
], LaporKategoriPageModule);
export { LaporKategoriPageModule };
//# sourceMappingURL=lapor-kategori.module.js.map