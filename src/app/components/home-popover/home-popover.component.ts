import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-home-popover',
  templateUrl: './home-popover.component.html',
  styleUrls: ['./home-popover.component.scss'],
})
export class HomePopoverComponent implements OnInit {

  url: any = null;
  bgcolor: any = '#fff';
  textcolor: any = '#000';
  link : any = null;

  constructor(
    public popoverCtrl      : PopoverController,
    private sharedService   : SharedService,
    public navCtrl          : NavController,
  ) { }

  ngOnInit() {
    this.getBanners();
  }

  bannerClicked(link){
    this.popoverCtrl.dismiss();
    this.navCtrl.navigateForward(link);
  }

  closeHomePopover() {
    this.popoverCtrl.dismiss();
  }

  getBanners(){
    if(this.sharedService.banners.get == 0){
      this.sharedService.getBanners()
      .subscribe(data => {
        this.sharedService.banners.get = 1;
        this.sharedService.banners = data;

        this.url = this.sharedService.banners.popover.url;
        this.bgcolor = this.sharedService.banners.popover.bgcolor;
        this.textcolor = this.sharedService.banners.popover.textcolor;
        this.link = this.sharedService.banners.popover.link;
      });
    }else{
      this.url = this.sharedService.banners.popover.url;
      this.bgcolor = this.sharedService.banners.popover.bgcolor;
      this.textcolor = this.sharedService.banners.popover.textcolor;
      this.link = this.sharedService.banners.popover.link;
    }
  }

  
}
