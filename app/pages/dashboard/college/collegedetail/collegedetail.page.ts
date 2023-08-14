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
  selector: 'app-collegedetail',
  templateUrl: './collegedetail.page.html',
  styleUrls: ['./collegedetail.page.scss'],
})
export class CollegedetailPage implements OnInit {
  segment = 'first';
  Site_url: string
  CollegeId: string
  CollegeDetails: any = "";
  CollegeAdmissionList: any = "";
  CollegeEligibilityList: any = "";
  CollegeInfraFacilityList: any="";
  CollegeExtraCurriFacilityList: any="";
  CollegeSportFacilityList: any="";
  CollegeAcademicPerformanceDetails: any="";

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
    this.CollegeId = this.activatedRoute.snapshot.paramMap.get('myid');

    this.Initilize_DataIntoStorage()
  }
  async Initilize_DataIntoStorage() {
    const loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 20000
    });
    await loading.present();

    this.http.get(this.Site_url + 'CollegeListApiController/' + this.CollegeId).subscribe(data => {
      this.storage.set('CollegeList', data);
      this.storage.get('CollegeList').then((val) => {
        console.log('CollegeList is', val);
        this.CollegeDetails = val
      });
    })
    
    this.http.get(this.Site_url + 'FetchAllCollegeAdmissionApi/' + this.CollegeId).subscribe(data => {
      this.CollegeAdmissionList = data
      console.log('Admission List' + this.CollegeAdmissionList)

      // this.storage.set('CollegeList', data);
      // this.storage.get('CollegeList').then((val) => {
      //   console.log('CollegeList is', val);
      // });
    })

    
    this.http.get(this.Site_url + 'CollegeEligibilityCreteriaApi/' + this.CollegeId).subscribe(data => {
      this.CollegeEligibilityList = data
      console.log('CollegeEligibility List' + this.CollegeEligibilityList)
     
    })

    this.http.get(this.Site_url + 'CollegeInfraFacilityApi/' + this.CollegeId).subscribe(data => {
      this.CollegeInfraFacilityList = data
      console.log('CollegeInfraFacility List' + this.CollegeInfraFacilityList)
     
    })

    this.http.get(this.Site_url + 'CollegeExtraCurriFacilityApi/' + this.CollegeId).subscribe(data => {
      this.CollegeExtraCurriFacilityList = data
      console.log('CollegeExtraCurriFacility List' + this.CollegeExtraCurriFacilityList)
     
    })

    this.http.get(this.Site_url + 'CollegeSportFacilityApi/' + this.CollegeId).subscribe(data => {
      this.CollegeSportFacilityList = data
      console.log('CollegeSportFacility List' + this.CollegeSportFacilityList)
     
    })

     this.http.get(this.Site_url + 'CollegeAcademicPerformanceApi/' + this.CollegeId).subscribe(data => {
       this.CollegeAcademicPerformanceDetails = data
     console.log('CollegeAcademicPerformance List' + this.CollegeAcademicPerformanceDetails)
     
     })
    
    loading.dismiss();


  }

  async ApplyForAdmission(id, id1) {
    // alert(id)
    // alert(id1)
    this.router.navigate(['/collegeadmission/' + id + '/' + id1]);
  }
  async Home() {
    this.router.navigate(['/homemain']);
  }
  ngOnInit() {
  }

}
