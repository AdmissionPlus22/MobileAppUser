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
  selector: 'app-homemain',
  templateUrl: './homemain.page.html',
  styleUrls: ['./homemain.page.scss'],
})
export class HomemainPage implements OnInit {
  Site_url: string
  SchoolBannerList: any = "";

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
       
    this.http.get(this.Site_url + 'SchoolBannerApi').subscribe(data => {
      this.SchoolBannerList = data
      console.log('SchoolBanner List' + this.SchoolBannerList)
     
    })

  }
     

  async redirectTonext() {
    this.router.navigate(['/searchinstitutionlist']);
  }

  async SchoolList() {
    this.router.navigate(['/schoollist']);
  }

  async CollegeList() {
    this.router.navigate(['/collegelist']);
  }

  async UniversityList() {
    this.router.navigate(['/universitylist']);
  }
  async TutorList() {
    this.router.navigate(['/tutorlist']);
  }
  async VendorList() {
    this.router.navigate(['/vendorlist']);
  }
  async Detail(id) {
    this.router.navigate(['/schooldetail/' + id]);
  }
  ngOnInit() {
  }

}
