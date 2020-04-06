import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let SearchPage = class SearchPage {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
};
SearchPage = tslib_1.__decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.page.html',
        styleUrls: ['./search.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], SearchPage);
export { SearchPage };
//# sourceMappingURL=search.page.js.map