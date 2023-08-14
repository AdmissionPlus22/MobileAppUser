import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service'
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { SetbaseurlService } from 'src/app/services/setbaseurl.service';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-myapplications',
  templateUrl: './myapplications.page.html',
  styleUrls: ['./myapplications.page.scss'],
})
export class MyapplicationsPage implements OnInit {

  Site_url: string
  ApplicationList: any
  UserId: string

  constructor(private router: Router,
    private baseurl: SetbaseurlService,
    private storage: Storage,
    public restApiService: RestApiService,
    private alertCtrl: AlertController,
    private http: HttpClient,
    public loadingController: LoadingController,
    private toastController: ToastController,
    private platform: Platform) {
    this.Site_url = this.baseurl.Set_base_url


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
    this.Initilize_DataIntoStorage()
  }

  async Initilize_DataIntoStorage() {
    const loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 20000
    });
    await loading.present();

    this.http.get(this.Site_url + 'MyApplicationListApi/' + this.UserId).subscribe(data => {
      this.ApplicationList = data
    })

    loading.dismiss();
  }

  async Pay() {
    alert("Pay")
  }

  async VideoCall() {
    // 
  }

  async Home() {
    this.router.navigate(['/homemain']);
  }
  ngOnInit() {
  }

}
