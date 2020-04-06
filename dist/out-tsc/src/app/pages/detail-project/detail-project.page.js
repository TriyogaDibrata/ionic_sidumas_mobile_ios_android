import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';
let DetailProjectPage = class DetailProjectPage {
    constructor(sharedService, route, navCtrl) {
        this.sharedService = sharedService;
        this.route = route;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.project_id = this.route.snapshot.paramMap.get('id');
    }
    ionViewWillEnter() {
        this.getUser();
        this.getDetailProject();
    }
    getUser() {
        this.sharedService.getUser()
            .subscribe(data => {
            this.user = data;
        });
    }
    getDetailProject() {
        this.sharedService.detailProject(this.project_id)
            .subscribe(data => {
            console.log(data);
            this.lists = data['data'];
        });
    }
    converTime(time) {
        moment.locale('id');
        let local_time = moment(time).fromNow();
        return local_time;
    }
    seeDetail(id) {
        this.navCtrl.navigateForward(['detail-laporan', id]);
    }
};
DetailProjectPage = tslib_1.__decorate([
    Component({
        selector: 'app-detail-project',
        templateUrl: './detail-project.page.html',
        styleUrls: ['./detail-project.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [SharedService,
        ActivatedRoute,
        NavController])
], DetailProjectPage);
export { DetailProjectPage };
//# sourceMappingURL=detail-project.page.js.map