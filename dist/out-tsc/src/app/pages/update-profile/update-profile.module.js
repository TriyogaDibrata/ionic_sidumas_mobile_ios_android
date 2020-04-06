import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdateProfilePage } from './update-profile.page';
const routes = [
    {
        path: '',
        component: UpdateProfilePage
    }
];
let UpdateProfilePageModule = class UpdateProfilePageModule {
};
UpdateProfilePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [UpdateProfilePage]
    })
], UpdateProfilePageModule);
export { UpdateProfilePageModule };
//# sourceMappingURL=update-profile.module.js.map