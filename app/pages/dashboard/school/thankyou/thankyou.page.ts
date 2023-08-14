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
  selector: 'app-thankyou',
  templateUrl: './thankyou.page.html',
  styleUrls: ['./thankyou.page.scss'],
})
export class ThankyouPage implements OnInit {
  Site_url: string
  SchoolList: any
  Latitude: any = ""
  Longitude: any = ""
 
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
      this.storage.get('Latitude').then((id) => {
        if (id) {
          this.Latitude = id
        }
        else {
          this.storage.get('Latitude').then((id) => {
            this.Latitude = id
          })
        }
      })


    })

    this.platform.ready().then(() => {
      this.storage.get('Longitude').then((id) => {
        if (id) {
          this.Longitude = id
        }
        else {
          this.storage.get('Longitude').then((id) => {
            this.Longitude = id
          })
        }
      })


    })
  }

  async Redirect(){
    this.router.navigate(['/homemain']);

  }
  ngOnInit() {
  }

}
