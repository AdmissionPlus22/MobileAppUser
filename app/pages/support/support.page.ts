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
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  Site_url: string

  SupportId: string
  Name : string 
  Email: string
  Phone: string
  Query : string
  Subject: string
  ReturnString: any
  ContactInfo: any = "";

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
    this.Initilize_DataIntoStorage()
  }
  async Initilize_DataIntoStorage() {
    const loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 200
    });
    await loading.present();
    
    this.http.get(this.Site_url + 'ContactApi').subscribe(data => {
      this.storage.set('Contact', data);
      this.storage.get('Contact').then((val) => {
        console.log('Contact is', val);
        this.ContactInfo = val
      });
    })
  }

  async Save() {

    if ((this.Name == '' || this.Name == null) ||
      (this.Email == '' || this.Email == null) ||
      (this.Phone == '' || this.Phone == null) ||
      (this.Query == '' || this.Query == null)) {
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
        "Name": this.Name,
        "Email": this.Email,
        "Phone": this.Phone,
        "Subject": this.Subject,
        "Query": this.Query
      };

      this.restApiService.InsertSupport(dataToSend).subscribe(dataReturnFromService => {
        this.ReturnString = JSON.parse(JSON.stringify(dataReturnFromService))
        console.log(dataReturnFromService)
        if (dataReturnFromService == "Not Submitted") {
          this.showError('Ooops..! Something went wrong')
          // loading.dismiss()
        }
        else {
          
          this.router.navigate(['/support']);

          this.showError('Message sent. We will contact with you as soon as possible.')
          // loading.dismiss()
        }
      })


    }
    // this.http.get(this.Site_url + 'ContactApi').subscribe(data => {
    //   this.ContactInfo = data
    //   console.log('Contact List' + this.ContactInfo)
     
    // })

  }

  async showError(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
    });
    toast.present();
  }
  async Home() {
    this.router.navigate(['/homemain']);
  }

  ngOnInit() {
  }

}

