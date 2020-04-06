import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController, Platform } from '@ionic/angular';
import { SharedService } from 'src/app/services/shared/shared.service';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-bantuan',
  templateUrl: './bantuan.page.html',
  styleUrls: ['./bantuan.page.scss'],
})
export class BantuanPage implements OnInit {

  trusted_url       : any;
  loading           : any;
  backbutton       : any;

  constructor(public domSanitize        : DomSanitizer,
              public platform           : Platform,
              public alertService       : AlertService,
              public sharedService      : SharedService,
              public loadingCtrl        : LoadingController) { }

  ngOnInit() {
    this.trusted_url = this.domSanitize.bypassSecurityTrustResourceUrl('https://sidumas.badungkab.go.id/bantuan');
    this.showLoading();
    let frame = document.querySelector("iframe");
    let header = frame.contentDocument.querySelector("header");
    header.remove();
    let footer = frame.contentDocument.querySelector("footer");
    footer.remove();
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
