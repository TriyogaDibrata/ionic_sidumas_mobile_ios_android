import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { SharedService } from 'src/app/services/shared/shared.service';
import { LoadingController, NavController, ActionSheetController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert/alert.service';
import * as moment from 'moment';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {

  base64Image: any;
  photos: any;
  user_id: any;
  user: any = {};
  name: any;
  email: any;
  bio: any;
  no_hp: any;
  birthday: any;
  nik: any;
  ktp: any;
  verified_foto: any;
  path_ktp: any;
  path_verified_foto: any;
  sex: any;
  status: any;
  loading: any;

  customMonthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  croppedImagepath = "";
  isLoading = false;

  constructor(private camera: Camera,
    private sharedService: SharedService,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public alertService: AlertService,
    private crop: Crop,
    public actionSheet: ActionSheetController,
    private file: File,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getUserInformation();
  }

  async showLoading(){
    this.loading = await this.loadingCtrl.create(this.sharedService.loadingOption);

    await this.loading.present();
  }

  checkChange() {
    if (this.user.status == 1) {
      this.alertService.presentAlert('Sudah Terverifikasi', 'Informasi ini tidak dapat diubah kembali.');
      return false;
    }
    return true;
  }

  notEditableDate() {
    moment.locale('id');
    return moment(this.user.tgl_lahir).format('DD MMMM YYYY');
  }

  async selectImage(imageType) {
    const actionSheet = await this.actionSheet.create({
      header: "Pilih sumber gambar",
      buttons: [{
        text: 'Pilih Dari Galeri',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, imageType);
        }
      },
      {
        text: 'Ambil Gambar',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA, imageType);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  pickImage(sourceType, imageType) {
    if (this.user.status == 1) {
      this.alertService.presentAlert('Sudah Terverifikasi', 'Informasi ini tidak dapat diubah kembali.');
      return false;
    }

    const options: CameraOptions = {
      quality: 100, // picture quality
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      sourceType: sourceType,
    }
    this.camera.getPicture(options).then((imageData) => {
      this.cropImage(imageData, imageType);
    }, (err) => {
      console.log(err);
    });
  }

  cropImage(fileUrl, imageType) {
    this.crop.crop(fileUrl, { quality: 50 })
      .then(
        newPath => {
          this.showCroppedImage(newPath.split('?')[0], imageType)
        },
        error => {
          alert('Error cropping image' + error);
        }
      );
  }

  showCroppedImage(ImagePath, imageType) {
    this.isLoading = true;
    var copyPath = ImagePath;
    var splitPath = copyPath.split('/');
    var imageName = splitPath[splitPath.length - 1];
    var filePath = ImagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath, imageName).then(base64 => {
      if(imageType === "user_photo"){
        this.user.verified_foto = base64;
        this.isLoading = false;
      } else {
        this.user.ktp = base64;
        this.isLoading = false;
      }
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }

  getUserInformation() {
    this.user = this.sharedService.getUserCache();
  }

  updateProfile() {
    this.showLoading();

    let data = {
      'id': this.user.id,
      'name': this.user.name,
      'description': this.user.description,
      'sex': this.user.sex,
      'no_hp': this.user.no_hp,
      'tgl_lahir': this.user.tgl_lahir,
      'nik': this.user.nik,
      'ktp': this.user.ktp,
      'foto': this.user.verified_foto
    }

    this.sharedService.updateProfileUser(data)
      .subscribe(data => {
        if (data['success']) {
          this.loading.dismiss();
          this.navCtrl.navigateRoot('/app/tabs/profile');
          this.alertService.presentToast('Informasi berhasil diperbaharui');
          this.sharedService.getUserCache(true);
        }
      }, err => {
        this.loading.dismiss();
        this.alertService.presentAlert('Oooops', JSON.stringify(err));
        this.alertService.presentAlert('Gagal menyimpan data', 'Terdapat kesalahan saat menyimpan data');
      });
  }
}
