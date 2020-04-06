import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailProjectPage } from './detail-project.page';
const routes = [
    {
        path: '',
        component: DetailProjectPage
    }
];
let DetailProjectPageModule = class DetailProjectPageModule {
};
DetailProjectPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DetailProjectPage]
    })
], DetailProjectPageModule);
export { DetailProjectPageModule };
//# sourceMappingURL=detail-project.module.js.map