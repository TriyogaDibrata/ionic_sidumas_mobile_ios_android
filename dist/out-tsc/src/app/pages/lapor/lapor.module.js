import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LaporPage } from './lapor.page';
import { MaterialModule } from '../../material.module';
const routes = [
    {
        path: '',
        component: LaporPage
    }
];
let LaporPageModule = class LaporPageModule {
};
LaporPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ReactiveFormsModule,
            MaterialModule,
            RouterModule.forChild(routes)
        ],
        declarations: [LaporPage]
    })
], LaporPageModule);
export { LaporPageModule };
//# sourceMappingURL=lapor.module.js.map