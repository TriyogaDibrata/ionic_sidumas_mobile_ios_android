import { Component, OnInit } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController, Platform } from '@ionic/angular';
import { SharedService } from 'src/app/services/shared/shared.service';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  AppName           : string;
  PackageName       : string;
  VersionCode       : string|number;
  VersionNumber     : string;
  loading           : any;
  backbutton        : any;
  trusted_url       : any;

  constructor(
    private appVersion          : AppVersion,
    public domSanitize          : DomSanitizer,
    public loadingCtrl          : LoadingController,
    public sharedService        : SharedService,
    public platform             : Platform,
    public alertService         : AlertService,
  ) { }

  ngOnInit() {
    this.appVersion.getAppName().then(value => {
      this.AppName = value;
    }).catch(err => {
      console.log(err);
    });
    this.appVersion.getPackageName().then(value => {
      this.PackageName = value;
    }).catch(err => {
      console.log(err);
    });
    this.appVersion.getVersionCode().then(value => {
      this.VersionCode = value;
    }).catch(err => {
      console.log(err);
    });
    this.appVersion.getVersionNumber().then(value => {
      this.VersionNumber = value;
    }).catch(err => {
      console.log(err);
    });

    this.trusted_url = this.domSanitize.bypassSecurityTrustResourceUrl('https://sidumas.badungkab.go.id/kontak');
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
