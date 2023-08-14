import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  // base_url = 'http://localhost:58570/api/';
  base_url = 'https://rightadmissionplus.com/api/';

  constructor(public http: HttpClient) { }

  SaveUserReg(dataToSend){
    let url = this.base_url + 'RegistrationApi';
    return this.http.post(url, dataToSend,
      {
        headers: new HttpHeaders(
        {'content-Type': 'application/json'}
        )
      }
      );

  }
  InsertAdmission(dataToSend){
    let url = this.base_url + 'InsertAdmissionApi';
    return this.http.post(url, dataToSend,
      {
        headers: new HttpHeaders(
        {'content-Type': 'application/json'}
        )
      }
      );

  }
  InsertCollegeAdmission(dataToSend){
    let url = this.base_url + 'InsertCollegeAdmissionApi';
    return this.http.post(url, dataToSend,
      {
        headers: new HttpHeaders(
        {'content-Type': 'application/json'}
        )
      }
      );
  }
  InsertUniversityAdmission(dataToSend){
    let url = this.base_url + 'InsertUniversityAdmissionApi';
    return this.http.post(url, dataToSend,
      {
        headers: new HttpHeaders(
        {'content-Type': 'application/json'}
        )
      }
      );

  }

  InsertSupport(dataToSend){
    let url = this.base_url + 'SupportApi';
    return this.http.post(url, dataToSend,
      {
        headers: new HttpHeaders(
        {'content-Type': 'application/json'}
        )
      }
      );

  }

  GetSchoolData(dataToSend){
    let url = this.base_url + 'SchoolListApi';
    return this.http.post(url, dataToSend,
      {
        headers: new HttpHeaders(
        {'content-Type': 'application/json'}
        )
      }
      );

  }
  GetUniversityData(dataToSend){
    let url = this.base_url + 'UniversityListApiController';
    return this.http.post(url, dataToSend,
      {
        headers: new HttpHeaders(
        {'content-Type': 'application/json'}
        )
      }
      );

  }
  GetCollegeData(dataToSend){
    let url = this.base_url + 'CollegeListApiController';
    return this.http.post(url, dataToSend,
      {
        headers: new HttpHeaders(
        {'content-Type': 'application/json'}
        )
      }
      );

  }
  GetVendorData(dataToSend){
    let url = this.base_url + 'VendorListApi';
    return this.http.post(url, dataToSend,
      {
        headers: new HttpHeaders(
        {'content-Type': 'application/json'}
        )
      }
      );

  }
}
