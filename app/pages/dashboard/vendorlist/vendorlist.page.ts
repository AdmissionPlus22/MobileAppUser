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
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.page.html',
  styleUrls: ['./vendorlist.page.scss'],
})
export class VendorlistPage implements OnInit {
  Site_url: string
  VendorList : any
  Latitude: any = ""
  Longitude: any = ""
  Distance: any = 20

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
      this.Initilize_DataIntoStorage()

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

    async Initilize_DataIntoStorage() {
      const loading = await this.loadingController.create({
        message: 'Please wait',
        duration: 20000
      });
      await loading.present();
  
      this.http.get(this.Site_url + 'VendorListApi' ).subscribe(data => {
        this.storage.set('VendorList', data);
        this.storage.get('VendorList').then((val) => {
          console.log('VendorList is', val);
          this.VendorList = val
        });
      })

      var dataToSend =
      {
        "Latitude": this.Latitude,
        "Longitude": this.Longitude,
        "Distance": this.Distance
      };
  
      this.restApiService.GetVendorData(dataToSend).subscribe(dataReturnFromService => {
        console.log(dataReturnFromService)
        this.VendorList = dataReturnFromService
  
      })
  
      loading.dismiss();
  
    }
    
    async GetDropdowndata($event) {
      var a = $event.target.value
      this.Distance = a
      this.Initilize_DataIntoStorage()
    }
    
    async Detail(id) {
      this.router.navigate(['/vendordetail/' + id]);
    }
  ngOnInit() {
  }

}