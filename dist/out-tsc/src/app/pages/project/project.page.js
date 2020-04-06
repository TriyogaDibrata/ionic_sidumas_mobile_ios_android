import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { NavController } from '@ionic/angular';
let ProjectPage = class ProjectPage {
    constructor(sharedService, navCtrl) {
        this.sharedService = sharedService;
        this.navCtrl = navCtrl;
        this.user = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getUser();
    }
    getUser() {
        this.sharedService.getUser()
            .subscribe(data => {
            this.user = data;
            this.getProject(this.user['opd_id']);
        });
    }
    getProject(opd_id) {
        this.sharedService.getProject(opd_id)
            .subscribe(data => {
            console.log(data['data']);
            this.project = data['data'];
        });
    }
    detailProject(id) {
        this.navCtrl.navigateForward(['detail-project', id]);
    }
};
ProjectPage = tslib_1.__decorate([
    Component({
        selector: 'app-project',
        templateUrl: './project.page.html',
        styleUrls: ['./project.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [SharedService,
        NavController])
], ProjectPage);
export { ProjectPage };
//# sourceMappingURL=project.page.js.map