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
  selector: 'app-universitydetail',
  templateUrl: './universitydetail.page.html',
  styleUrls: ['./universitydetail.page.scss'],
})
export class UniversitydetailPage implements OnInit {
  segment = 'first';
  Site_url: string
  UniversityId: string
  UniversityDetails: any = "";
  UniversityAdmissionList: any = "";
  UniversityEligibilityList: any = "";
  UniversityInfraFacilityList: any="";
  UniversityExtraCurriFacilityList: any="";
  UniversitySportFacilityList: any="";
  UniversityAcademicPerformanceDetails: any="";

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
    this.UniversityId = this.activatedRoute.snapshot.paramMap.get('myid');

    this.Initilize_DataIntoStorage()
  }
  async Initilize_DataIntoStorage() {
    const loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 20000
    });
    await loading.present();

    this.http.get(this.Site_url + 'UniversityListApiController/' + this.UniversityId).subscribe(data => {
      this.storage.set('UniversityList', data);
      this.storage.get('UniversityList').then((val) => {
        console.log('UniversityList is', val);
        this.UniversityDetails = val
      });
    })
    
    this.http.get(this.Site_url + 'FetchAllUniversityAdmissionApi/' + this.UniversityId).subscribe(data => {
      this.UniversityAdmissionList = data
      console.log('Admission List' + this.UniversityAdmissionList)

      // this.storage.set('UniversityList', data);
      // this.storage.get('UniversityList').then((val) => {
      //   console.log('UniversityList is', val);
      // });
    })

    
    this.http.get(this.Site_url + 'UniversityEligibilityCreteriaApi/' + this.UniversityId).subscribe(data => {
      this.UniversityEligibilityList = data
      console.log('UniversityEligibility List' + this.UniversityEligibilityList)
     
    })

    this.http.get(this.Site_url + 'UniversityInfraFacilityApi/' + this.UniversityId).subscribe(data => {
      this.UniversityInfraFacilityList = data
      console.log('UniversityInfraFacility List' + this.UniversityInfraFacilityList)
     
    })

    this.http.get(this.Site_url + 'UniversityExtraCurriFacilityApi/' + this.UniversityId).subscribe(data => {
      this.UniversityExtraCurriFacilityList = data
      console.log('UniversityExtraCurriFacility List' + this.UniversityExtraCurriFacilityList)
     
    })

    this.http.get(this.Site_url + 'UniversitySportFacilityApi/' + this.UniversityId).subscribe(data => {
      this.UniversitySportFacilityList = data
      console.log('UniversitySportFacility List' + this.UniversitySportFacilityList)
     
    })

     this.http.get(this.Site_url + 'UniversityAcademicPerformanceApi/' + this.UniversityId).subscribe(data => {
       this.UniversityAcademicPerformanceDetails = data
     console.log('UniversityAcademicPerformance List' + this.UniversityAcademicPerformanceDetails)
     
     })
    
    loading.dismiss();


  }

  async ApplyForAdmission(id, id1) {
    // alert(id)
    // alert(id1)
    this.router.navigate(['/universityadmission/' + id + '/' + id1]);
  }
  async Home() {
    this.router.navigate(['/homemain']);
  }
  ngOnInit() {
  }

}
