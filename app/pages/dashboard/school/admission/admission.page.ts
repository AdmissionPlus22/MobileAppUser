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
  selector: 'app-admission',
  templateUrl: './admission.page.html',
  styleUrls: ['./admission.page.scss'],
})
export class AdmissionPage implements OnInit {
  Site_url: string
  SchoolId: string
  ClassId: string

  ApplicationId: string
  ApplicantName : string 
  Gender: string
  DOB: string
  Phone : string
  Fathername: string
  MotherName : string
  State : string
  City : string
  Pin : string
  ReturnString: any
  UserId: string
  // SchoolDetails: any = "";
  // SchoolAdmissionList: any = "";

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
    this.SchoolId = this.activatedRoute.snapshot.paramMap.get('myid');
    this.ClassId = this.activatedRoute.snapshot.paramMap.get('myid1');

    this.platform.ready().then(() => {
      this.storage.get('UserId').then((id) => {
        if (id) {
          this.UserId = id
        }
        else {
          this.storage.get('UserId').then((id) => {
            this.UserId = id
          })
        }
      })
   
    
    })
  }

  async Save() {

    if ((this.ApplicantName == '' || this.ApplicantName == null) ||
      (this.Gender == '' || this.Gender == null) ||
      (this.DOB == '' || this.DOB == null) ||
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
        "ApplicantName": this.ApplicantName,
        "ApplicantGender": this.Gender,
        "DOB": this.DOB,
        "Phone": this.Phone,
        "Fathername": this.Fathername,
        "MotherName": this.MotherName,
        "State": this.State,
        "City": this.City,
        "Pin": this.Pin,
        "InstituteId": this.SchoolId,
        "ClassId":this.ClassId,
        "AppliedById":this.UserId,
        "UserLoginStatus":true
      };

      this.restApiService.InsertAdmission(dataToSend).subscribe(dataReturnFromService => {
        this.ReturnString = JSON.parse(JSON.stringify(dataReturnFromService))
        console.log(dataReturnFromService)
        if (dataReturnFromService == "Not Submitted") {
          this.showError('Ooops..! Something went wrong')
          loading.dismiss()
        }
        else {
          // this.UserId = JSON.parse(JSON.stringify(dataReturnFromService)).UserId

          this.ApplicationId = JSON.parse(JSON.stringify(dataReturnFromService))
       
          // this.router.navigate(['/admissiondocuments/' + this.ApplicationId]);

          this.router.navigate(['/admissiondocuments/' + this.ApplicationId]);

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
