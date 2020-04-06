import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LaporTinjauPage } from './lapor-tinjau.page';
const routes = [
    {
        path: '',
        component: LaporTinjauPage
    }
];
let LaporTinjauPageModule = class LaporTinjauPageModule {
};
LaporTinjauPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [LaporTinjauPage]
    })
], LaporTinjauPageModule);
export { LaporTinjauPageModule };
//# sourceMappingURL=lapor-tinjau.module.js.map