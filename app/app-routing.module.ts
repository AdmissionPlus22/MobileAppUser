import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'otp/:myid/:myid1/:myid2/:myid3',
    loadChildren: () => import('./pages/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'userdetailsform',
    loadChildren: () => import('./pages/userdetailsform/userdetailsform.module').then( m => m.UserdetailsformPageModule)
  },
  {
    path: 'homemain',
    loadChildren: () => import('./pages/homemain/homemain.module').then( m => m.HomemainPageModule)
  },
  {
    path: 'searchinstitutionlist',
    loadChildren: () => import('./pages/searchinstitutionlist/searchinstitutionlist.module').then( m => m.SearchinstitutionlistPageModule)
  },
  {
    path: 'institutiondetails',
    loadChildren: () => import('./pages/institutiondetails/institutiondetails.module').then( m => m.InstitutiondetailsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'schoollist',
    loadChildren: () => import('./pages/dashboard/school/schoollist/schoollist.module').then( m => m.SchoollistPageModule)
  },
  {
    path: 'schooldetail/:myid',
    loadChildren: () => import('./pages/dashboard/school/schooldetail/schooldetail.module').then( m => m.SchooldetailPageModule)
  },
  {
    path: 'collegelist',
    loadChildren: () => import('./pages/dashboard/college/collegelist/collegelist.module').then( m => m.CollegelistPageModule)
  },
  {
    path: 'collegedetail/:myid',
    loadChildren: () => import('./pages/dashboard/college/collegedetail/collegedetail.module').then( m => m.CollegedetailPageModule)
  },
  {
    path: 'universitylist',
    loadChildren: () => import('./pages/dashboard/university/universitylist/universitylist.module').then( m => m.UniversitylistPageModule)
  },
  {
    path: 'universitydetail/:myid',
    loadChildren: () => import('./pages/dashboard/university/universitydetail/universitydetail.module').then( m => m.UniversitydetailPageModule)
  },
  {
    path: 'admission/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/school/admission/admission.module').then( m => m.AdmissionPageModule)
  },
  {
    path: 'admissiondocuments/:myid',
    loadChildren: () => import('./pages/dashboard/school/admissiondocuments/admissiondocuments.module').then( m => m.AdmissiondocumentsPageModule)
  },
  {
    path: 'myapplications',
    loadChildren: () => import('./pages/dashboard/school/myapplications/myapplications.module').then( m => m.MyapplicationsPageModule)
  },
  {
    path: 'admissiondoc2/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/school/admissiondoc2/admissiondoc2.module').then( m => m.Admissiondoc2PageModule)
  },
  {
    path: 'admissiondoc3/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/school/admissiondoc3/admissiondoc3.module').then( m => m.Admissiondoc3PageModule)
  },
  {
    path: 'admissiondoc4/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/school/admissiondoc4/admissiondoc4.module').then( m => m.Admissiondoc4PageModule)
  },
  {
    path: 'thankyou',
    loadChildren: () => import('./pages/dashboard/school/thankyou/thankyou.module').then( m => m.ThankyouPageModule)
  },
  {
    path: 'admissiondoc5/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/school/admissiondoc5/admissiondoc5.module').then( m => m.Admissiondoc5PageModule)
  },  
  
  {
    path: 'collegeadmission/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/college/admission/admission.module').then( m => m.AdmissionPageModule)
  },
  {
    path: 'admissiondoc6/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/school/admissiondoc6/admissiondoc6.module').then( m => m.Admissiondoc6PageModule)
  },
  {
    path: 'collegeadmissiondoc1/:myid',
    loadChildren: () => import('./pages/dashboard/college/admissiondoc1/admissiondoc1.module').then( m => m.Admissiondoc1PageModule)
  },
  {
    path: 'collegeadmissiondoc2/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/college/admissiondoc2/admissiondoc2.module').then( m => m.Admissiondoc2PageModule)
  },
  {
    path: 'collegeadmissiondoc3/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/college/admissiondoc3/admissiondoc3.module').then( m => m.Admissiondoc3PageModule)
  },
  {
    path: 'collegeadmissiondoc4/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/college/admissiondoc4/admissiondoc4.module').then( m => m.Admissiondoc4PageModule)
  },
  {
    path: 'collegeadmissiondoc5/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/college/admissiondoc5/admissiondoc5.module').then( m => m.Admissiondoc5PageModule)
  },
  {
    path: 'collegeadmissiondoc6/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/college/admissiondoc6/admissiondoc6.module').then( m => m.Admissiondoc6PageModule)
  },
  {
    path: 'universityadmission/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/university/admission/admission.module').then( m => m.AdmissionPageModule)
  },
  {
    path: 'universityadmissiondoc1/:myid',
    loadChildren: () => import('./pages/dashboard/university/admissiondoc1/admissiondoc1.module').then( m => m.Admissiondoc1PageModule)
  },
  {
    path: 'universityadmissiondoc2/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/university/admissiondoc2/admissiondoc2.module').then( m => m.Admissiondoc2PageModule)
  },
  {
    path: 'universityadmissiondoc3/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/university/admissiondoc3/admissiondoc3.module').then( m => m.Admissiondoc3PageModule)
  },
 
  {
    path: 'universityadmissiondoc4/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/university/admissiondoc4/admissiondoc4.module').then( m => m.Admissiondoc4PageModule)
  },
  {
    path: 'universityadmissiondoc5/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/university/admissiondoc5/admissiondoc5.module').then( m => m.Admissiondoc5PageModule)
  },
  {
    path: 'universityadmissiondoc6/:myid/:myid1',
    loadChildren: () => import('./pages/dashboard/university/admissiondoc6/admissiondoc6.module').then( m => m.Admissiondoc6PageModule)
  },
  {
    path: 'vendorlist',
    loadChildren: () => import('./pages/dashboard/vendorlist/vendorlist.module').then( m => m.VendorlistPageModule)
  },
  {
    path: 'tutorlist',
    loadChildren: () => import('./pages/dashboard/tutorlist/tutorlist.module').then( m => m.TutorlistPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
