import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LokasiPage } from './lokasi.page';
const routes = [
    {
        path: '',
        component: LokasiPage
    }
];
let LokasiPageModule = class LokasiPageModule {
};
LokasiPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [LokasiPage]
    })
], LokasiPageModule);
export { LokasiPageModule };
//# sourceMappingURL=lokasi.module.js.map