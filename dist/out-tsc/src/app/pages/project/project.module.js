import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProjectPage } from './project.page';
const routes = [
    {
        path: '',
        component: ProjectPage
    }
];
let ProjectPageModule = class ProjectPageModule {
};
ProjectPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProjectPage]
    })
], ProjectPageModule);
export { ProjectPageModule };
//# sourceMappingURL=project.module.js.map