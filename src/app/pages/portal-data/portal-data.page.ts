import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController, Platform } from '@ionic/angular';
import { SharedService } from 'src/app/services/shared/shared.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portal-data',
  templateUrl: './portal-data.page.html',
  styleUrls: ['./portal-data.page.scss'],
})
export class PortalDataPage implements OnInit {

  page_title        : any;
  url               : any;
  trusted_site      : any;
  loading           : any;
  sanitized_site    : any;
  backbutton        : Subscription = new Subscription();

  constructor( public route         : ActivatedRoute,
               public domSanitize   : DomSanitizer,
               public platform      : Platform,
               public alertService  : AlertService,
               public loadingCtrl   : LoadingController,
               public sharedService : SharedService) { }

  ngOnInit(){
    this.page_title = this.route.snapshot.paramMap.get('title');
    this.url = this.route.snapshot.paramMap.get('url')+'?random='+(new Date()).getTime();

    this.trusted_site = this.domSanitize.bypassSecurityTrustResourceUrl(this.url);
    this.showLoading();
  }

  ionViewWillEnter(){
    this.handleHardwareBackButton();
  }

  ionViewWillLeave(){
    this.backbutton.unsubscribe();
  }

  async showLoading(){
    this.loading = await this.loadingCtrl.create(this.sharedService.loadingOption);

    await this.loading.present();
  }

  async onLoad(){
    await this.loading.dismiss();
  }

  async onError(){
   await this.loading.dismiss();
   await this.alertService.presentAlert('Something Went Wrong', 'Cannot Proceed The Request');
  }

  handleHardwareBackButton(){
    this.backbutton = this.platform.backButton.subscribe(() => {
      window.history.back();
    })
  }

}
