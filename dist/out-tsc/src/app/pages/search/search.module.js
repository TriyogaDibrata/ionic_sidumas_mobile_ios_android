import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SearchPage } from './search.page';
const routes = [
    {
        path: '',
        component: SearchPage
    }
];
let SearchPageModule = class SearchPageModule {
};
SearchPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SearchPage]
    })
], SearchPageModule);
export { SearchPageModule };
//# sourceMappingURL=search.module.js.map