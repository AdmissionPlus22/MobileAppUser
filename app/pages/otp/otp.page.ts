import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service'
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { SetbaseurlService } from 'src/app/services/setbaseurl.service';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  Site_url: string
  UserId: string = "";
  // UserType: string = "";
  FullName: string = "";
  OTP: string =""
  Phone: string = ""
  ReturnString: string = "";
  
  Otp1: string = ""
  Otp2: string = ""
  Otp3: string = ""
  Otp4: string = ""
  OTPStr: string = ""
  

  myId = null;
  myId1 = null;
  myId2 = null;
  myId3 = null;
  myId4 = null;

  
  constructor(private router: Router,
    private baseurl: SetbaseurlService,
    private storage: Storage,
    public restApiService: RestApiService,
    private alertCtrl: AlertController,
    private http: HttpClient,
    public loadingController: LoadingController,
    private toastController: ToastController,
    private platform: Platform,
    private activatedRoute: ActivatedRoute) {
    
      this.Site_url = this.baseurl.Set_base_url
     
      this.UserId = this.activatedRoute.snapshot.paramMap.get('myid');
      this.FullName = this.activatedRoute.snapshot.paramMap.get('myid1');
      this.Phone = this.activatedRoute.snapshot.paramMap.get('myid2');
      // this.otp = this.activatedRoute.snapshot.paramMap.get('myid3');
  
      console.log(this.UserId + ' '+ this.FullName + ' '+this.OTP +' '+this.Phone)
   
      this.platform.ready().then(() => {
      this.storage.get('OTP').then((id) => {
        if (id) {
          this.OTP = id
        }
        else {
          this.storage.get('OTP').then((id) => {
            this.OTP = id
          })
        }
      })
    })

  }

  async gotoNextField(event, next, prev) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus()
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      return 0;
    }
  }

    async ResendOtp() {
        const loading = await this.loadingController.create({
          message: 'Please wait',
          duration: 10000
        });
        await loading.present();
        this.http.get(this.Site_url + 'ReferralDoctorLogin' + '/' + this.Phone).subscribe(dataReturnFromService => {
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
            console.log('User ID ' + this.UserId+' '+'UserType ' + 'Full Name ' + this.FullName+' otp '+this.OTP)
            loading.dismiss();
            this.storage.set('OTP', this.OTP);

  
            // this.storage.ready().then(() => {
            //   this.storage.set('OTP', this.OTP);
            // }).catch((error: Error) => {
            //     console.error(error);
            //     return;
            //     })
                // this.router.navigate(['/enterotp/'+this.UserId+'/'+this.HospitalId+'/'+this.FullName+'/'+this.Phone]);
                loading.dismiss()
          }
  
        });
      
    }

    async Login() {
      // alert(this.UserId)
      this.OTPStr = this.Otp1 + this.Otp2 + this.Otp3 + this.Otp4
      if (this.OTPStr == '' || this.OTPStr == null) {
        this.showError('Pleaase enter OTP')
      }
      else {
        if (this.OTPStr == this.OTP) {
          this.showError('Welcome ' + this.FullName)
          this.storage.set('UserId', this.UserId);
          // this.storage.set('UserType', this.UserType);
          this.storage.set('FullName', this.FullName);
          this.storage.set('OTP', this.OTP);
          this.storage.set('Phone', this.Phone);

          this.router.navigate(['/homemain']);

            // this.storage.ready().then(() => {
            //   this.storage.set('UserId', this.UserId);
            //   this.storage.set('UserType', this.UserType);
            //   this.storage.set('FullName', this.FullName);
            //   this.storage.set('OTP', this.OTP);
            //   this.storage.set('Phone', this.Phone);
            // }).catch((error: Error) => {
            //     console.error(error);
            //     return;
            //     })
                // if(this.UserType=='User'){
                //   this.router.navigate(['/newsfeed']);
  
                //   // this.router.navigate(['/patientdashboard']);
                // }
                // else if(this.UserType =='Directory'){
                //   this.showError('Try again later')
                //   // this.router.navigate(['/advisordashboard']);            
                // }
        }
        else {
          this.showError('Please enter valid OTP')
          this.OTPStr = ''
  
          
        }
  
      }
    }
    async showError(message: string) {
      const toast = await this.toastController.create({
        message: message,
        duration: 3000,
      });
      toast.present();
  
    }
  async redirectTonext() {
    this.router.navigate(['/userdetailsform']);
  }

  ngOnInit() {
  }

}
