import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';
import { AuthService } from 'src/app/services/auht/auth.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-lapor-kategori',
  templateUrl: './lapor-kategori.page.html',
  styleUrls: ['./lapor-kategori.page.scss'],
})
export class LaporKategoriPage implements OnInit {

  kategori  : any;
  user      : any;
  loading   : any;
  allowed_user : boolean = false;

  constructor(public navCtrl      : NavController,
              public router       : Router,
              public route        : ActivatedRoute,
              public sharedService: SharedService,
              private authService : AuthService,
              public loadingCtrl  : LoadingController,
              public alertService : AlertService,
              private callNumber  : CallNumber,
              ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.checkUser();
    this.getKategori();
  }

  async showLoading(){
    this.loading = await this.loadingCtrl.create(this.sharedService.loadingOption);

    await this.loading.present();
  }

  goToLapor(id, event){
    if(event){
      let event_detail = event.split(',');
      if(event_detail[0] == 'call_number'){
        this.callNumber.callNumber(event_detail[1], true)
        .then(res => console.log('Launched Dialer', res))
        .catch(err => this.alertService.presentAlert('Terjadi Kesalahan', err))
      } else if (event_detail[0] == 'open_page') {
        this.navCtrl.navigateForward([event_detail[1], event_detail[3], event_detail[2]]);
      } else {
        console.log('no event');
      }
    } else {
      if(this.allowed_user){
        this.navCtrl.navigateForward(['/lapor', id]);
      } else {
        this.alertService.presentAlert('Data Diri Belum Lengkap', 'Anda hanya akan bisa melapor apabila data diri anda sudah lengkap');
        this.navCtrl.navigateRoot('app/tabs/profile');
      }
    }
  }

  getKategori(){
    this.sharedService.getKategori()
    .subscribe(data => {
      this.kategori = data;
    });
  }

  checkUser() : void {
    this.user = this.sharedService.getUserCache();
    this.showLoading();
    this.sharedService.checkUser(this.user['id'])
    .subscribe(data => {
      if(!data['success']){
        this.loading.dismiss();
        return this.allowed_user = false;
      } else {
        this.loading.dismiss();
        return this.allowed_user = true;
      }
    });
  }


}
