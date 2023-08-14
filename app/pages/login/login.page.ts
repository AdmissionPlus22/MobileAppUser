import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service'
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { SetbaseurlService } from 'src/app/services/setbaseurl.service';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Segment Active
  segment = 'first';
  Site_url: string

  UserId: string = "";
  FullName: string = "";
  EmailId: string = "";
  Password: string = "";
  Location: string = "";
  Latitude: any = ""
  Longitude: any = ""
  Phone: string = "";
  ReturnString: string = "";
  OTP: string = "";

  constructor(private router: Router,
    private baseurl: SetbaseurlService,
    private storage: Storage,
    public restApiService: RestApiService,
    private alertCtrl: AlertController,
    private http: HttpClient,
    public loadingController: LoadingController,
    private toastController: ToastController,
    private platform: Platform,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) {
      this.Site_url = this.baseurl.Set_base_url

    this.geolocation.getCurrentPosition().then((resp) => {
      this.Latitude = resp.coords.latitude
      console.log('Lat ' + this.Latitude)
      this.Longitude = resp.coords.longitude
      console.log('Lng ' + this.Longitude)


      this.storage.set('Latitude', this.Latitude);
      this.storage.set('Longitude', this.Longitude);

    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
  }

  async redirectTonext() {
    this.router.navigate(['/signup']);
  }

async SignIn(){
  if (this.Phone == '' || this.Phone == null) {
    this.showError('Please enter registered phone number')
  }
  else{
    const loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 10000
    });
    await loading.present();
    this.http.get(this.Site_url + 'RegistrationApi' + '/' + this.Phone).subscribe(dataReturnFromService => {
      this.ReturnString = JSON.parse(JSON.stringify(dataReturnFromService)).ReturnString
      console.log(this.ReturnString );
      if(this.ReturnString=='Invalid')
      {
        this.showError('Please enter registered phone number.')
        this.Phone = null
        loading.dismiss();
      }
      else{
        this.UserId = JSON.parse(JSON.stringify(dataReturnFromService)).UserId
        // this.UserType = JSON.parse(JSON.stringify(dataReturnFromService)).UserType
        this.FullName = JSON.parse(JSON.stringify(dataReturnFromService)).FullName
        this.OTP = JSON.parse(JSON.stringify(dataReturnFromService)).OTP
        console.log('User ID ' + this.UserId+' '+'FullName ' + this.FullName+' '+'Phone ' + this.Phone+' otp '+this.OTP)
        loading.dismiss();
        this.storage.set('OTP', this.OTP);


        // this.storage.ready().then(() => {
        //   this.storage.set('OTP', this.OTP);
        // }).catch((error: Error) => {
        //     console.error(error);
        //     return;
        //     })
            this.router.navigate(['/otp/'+this.UserId+'/'+this.FullName+'/'+this.Phone+'/'+this.OTP]);
            loading.dismiss()
      }

    });
  }
}

  async Save() {

    if ((this.FullName == '' || this.FullName == null) ||
      (this.EmailId == '' || this.EmailId == null) ||
      (this.Password == '' || this.Password == null) ||
      (this.Phone == '' || this.Phone == null)) {
      this.showError('Please enter the mandatory details')
    }
    else {

      const loading = await this.loadingController.create({
        message: 'Please wait',
        duration: 7000
      });
      await loading.present();
      var dataToSend =
      {
        "FullName": this.FullName,
        "EmailId": this.EmailId,
        "Password": this.Password,
        "Phone": this.Phone,
        "Latitude": this.Latitude,
        "Longitude": this.Longitude,
      };

      this.restApiService.SaveUserReg(dataToSend).subscribe(dataReturnFromService => {
        this.ReturnString = JSON.parse(JSON.stringify(dataReturnFromService)).ReturnString
        console.log(dataReturnFromService)
        if (dataReturnFromService == "Not Submitted") {
          this.showError('Ooops..! Something went wrong')
          loading.dismiss()
        }
        else {
          this.UserId = JSON.parse(JSON.stringify(dataReturnFromService)).UserId

          this.OTP = JSON.parse(JSON.stringify(dataReturnFromService)).OTP
          console.log('User ID ' + this.UserId + ' ' + 'Full Name ' + this.FullName + 'Phone ' + this.Phone + ' otp ' + this.OTP)
          loading.dismiss();
          this.storage.set('OTP', this.OTP);
          this.storage.set('UserId', this.UserId);

      
          this.router.navigate(['/otp/' + this.UserId + '/' + this.FullName + '/' + this.Phone + '/' + this.OTP]);

          this.showError('Data submitted')
          loading.dismiss()
        }
      })


    }

  }


  async showError(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
    });
    toast.present();
  }

  ngOnInit() {
  }

}
