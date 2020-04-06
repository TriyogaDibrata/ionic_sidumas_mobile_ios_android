import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
let TabsPage = class TabsPage {
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
    ionViewWillEnter() {
        this.getUser();
    }
    getUser() {
        this.sharedService.getUser()
            .subscribe(data => {
            this.user_type = data['tipe'];
        });
    }
};
TabsPage = tslib_1.__decorate([
    Component({
        selector: 'app-tabs',
        templateUrl: 'tabs.page.html',
        styleUrls: ['tabs.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [SharedService])
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map