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
  selector: 'app-schooldetail',
  templateUrl: './schooldetail.page.html',
  styleUrls: ['./schooldetail.page.scss'],
})
export class SchooldetailPage implements OnInit {
  segment = 'first';
  Site_url: string
  SchoolId: string
  SchoolDetails: any = "";
  SchoolAdmissionList: any = "";
  SchoolEligibilityList: any = "";
  SchoolInfraFacilityList: any="";
  SchoolExtraCurriFacilityList: any="";
  SchoolSportFacilityList: any="";
  SchoolAcademicPerformanceDetails: any="";
  SchoolClassList: any="";

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

    this.Initilize_DataIntoStorage()
  }
  async Initilize_DataIntoStorage() {
    const loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 20000
    });
    await loading.present();

    this.http.get(this.Site_url + 'SchoolListApi/' + this.SchoolId).subscribe(data => {
      this.storage.set('SchoolList', data);
      this.storage.get('SchoolList').then((val) => {
        console.log('SchoolList is', val);
        this.SchoolDetails = val
      });
    })
    
    this.http.get(this.Site_url + 'FetchAllAdmissionData/' + this.SchoolId).subscribe(data => {
      this.SchoolAdmissionList = data
      console.log('Admission List' + this.SchoolAdmissionList)

      // this.storage.set('SchoolList', data);
      // this.storage.get('SchoolList').then((val) => {
      //   console.log('SchoolList is', val);
      // });
    })

    
    this.http.get(this.Site_url + 'SchoolEligibilityCreteriaApi/' + this.SchoolId).subscribe(data => {
      this.SchoolEligibilityList = data
      console.log('SchoolEligibility List' + this.SchoolEligibilityList)
     
    })

    this.http.get(this.Site_url + 'SchoolInfraFacilityApi/' + this.SchoolId).subscribe(data => {
      this.SchoolInfraFacilityList = data
      console.log('SchoolInfraFacility List' + this.SchoolInfraFacilityList)
     
    })

    this.http.get(this.Site_url + 'SchoolExtraCurriFacilityApi/' + this.SchoolId).subscribe(data => {
      this.SchoolExtraCurriFacilityList = data
      console.log('SchoolExtraCurriFacility List' + this.SchoolExtraCurriFacilityList)
     
    })

    this.http.get(this.Site_url + 'SchoolSportFacilityApi/' + this.SchoolId).subscribe(data => {
      this.SchoolSportFacilityList = data
      console.log('SchoolSportFacility List' + this.SchoolSportFacilityList)
     
    })

     this.http.get(this.Site_url + 'SchoolAcademicPerformanceApi/' + this.SchoolId).subscribe(data => {
       this.SchoolAcademicPerformanceDetails = data
     console.log('SchoolAcademicPerformance List' + this.SchoolAcademicPerformanceDetails)
     
     })

     this.http.get(this.Site_url + 'ApiMasterSchoolClass/' + this.SchoolId).subscribe(data => {
      this.SchoolClassList = data
    console.log('SchoolClass List' + this.SchoolClassList)
    
    })
    
    loading.dismiss();


  }

  async ApplyForAdmission(id, id1) {
    // alert(id)
    // alert(id1)
    this.router.navigate(['/admission/' + id + '/' + id1]);
  }
  async Home() {
    this.router.navigate(['/homemain']);
  }
  ngOnInit() {
  }

}
