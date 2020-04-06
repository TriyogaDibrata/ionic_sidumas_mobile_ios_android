import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdatePasswordPage } from './update-password.page';
const routes = [
    {
        path: '',
        component: UpdatePasswordPage
    }
];
let UpdatePasswordPageModule = class UpdatePasswordPageModule {
};
UpdatePasswordPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [UpdatePasswordPage]
    })
], UpdatePasswordPageModule);
export { UpdatePasswordPageModule };
//# sourceMappingURL=update-password.module.js.map