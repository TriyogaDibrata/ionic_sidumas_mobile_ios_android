import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LaporFilePage } from './lapor-file.page';
const routes = [
    {
        path: '',
        component: LaporFilePage
    }
];
let LaporFilePageModule = class LaporFilePageModule {
};
LaporFilePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [LaporFilePage]
    })
], LaporFilePageModule);
export { LaporFilePageModule };
//# sourceMappingURL=lapor-file.module.js.map