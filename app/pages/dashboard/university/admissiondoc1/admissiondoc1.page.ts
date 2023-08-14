import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { SetbaseurlService } from 'src/app/services/setbaseurl.service';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admissiondoc1',
  templateUrl: './admissiondoc1.page.html',
  styleUrls: ['./admissiondoc1.page.scss'],
})
export class Admissiondoc1Page implements OnInit {
  Site_url: string
  UserId: string = "";
  ApplicationId: string = "";

  ShowInitialImg: string = "";

  uploadForm: FormGroup;
  Doc1: string = "";
  DocId: any = "";

  constructor(private formBuilder: FormBuilder,
    private router: Router,
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
    this.ApplicationId = this.activatedRoute.snapshot.paramMap.get('myid');

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

  async onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('Doc1').setValue(file);
      this.ImagePreview(event)
      if (this.uploadForm.get('Doc1').value != "" && this.uploadForm.get('Doc1').value != null) {
        const loading = await this.loadingController.create({
          message: 'Please wait',
          duration: 10000
        });
        await loading.present();
        const formData = new FormData();
        formData.append('Doc1', this.uploadForm.get('Doc1').value);
        formData.append('UserId', this.UserId);
        formData.append('ApplicationId', this.ApplicationId);       
        this.http.post<any>(this.Site_url + '/UniversityDoc1Api', formData).subscribe( dataReturnFromService =>{
   
          this.DocId = dataReturnFromService
          console.log(dataReturnFromService)
          this.router.navigate(['/universityadmissiondoc2/' + this.ApplicationId + '/' + this.DocId ]);

          this.showError('Passport Photo saved successfully.')
          loading.dismiss()
        }
 
        );
     
      }
      else {
        this.showError('Please select image before submitting.')
      }
    }
  }
  async ImagePreview(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.ShowInitialImg = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
    let fileList: FileList = event.target.files;
  }
  Deleteimage() {
    this.ShowInitialImg = null
  }
  async Next() {

    this.showError('Registration successfully completed.')
    this.router.navigate(['/universityadmissiondoc2/' + this.ApplicationId + '/' + this.DocId ]);

  }

  async showError(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
    });
    toast.present();

  }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      Doc1: ['']
    });
  }
}
