import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

//new added
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;
  UserId: string = ""
  UserType: string = ""

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private router: Router,
    public loadingController: LoadingController,
    public navCtrl: NavController,
  ) {
    this.storage.create();
    this.initializeApp();
    this.sideMenu()
  }
  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.storage.get('UserType').then((id) => {
  //       if(id)
  //       {
  //         if(id=='School'){
  //           this.navCtrl.navigateRoot('/dashboard');
  //         }
  //         else if(id=='College'){
  //           this.navCtrl.navigateRoot('/patientdashboard');
  //         }
  //       }
  //       else
  //       {
  //         this.router.navigate(['']); 
  //       }
  //     })
  //   });
  // }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.navigate =
      [
        {
          title: "Home",
          url: "/homemain",
          icon: "home"
        },
      
        {
          title: "Schools",
          url: "/schoollist",
          icon: "add-circle"
        },
        {
          title: "Colleges",
          url: "/collegelist",
          icon: "add-circle"
        },
        {
          title: "Universities",
          url: "/universitylist",
          icon: "add-circle"
        },
        
        {
          title: "Tutors",
          url: "/tutorlist",
          icon: "add-circle"
        },
        {
          title: "Vendors",
          url: "/vendorlist",
          icon: "add-circle"
        },
        {
          title: "Support",
          url: "/support",
          icon: "add-circle"
        },
        {
          title: "My Account",
          url: "/myapplications",
          icon: "add-circle"
        },

        
        

        

      ]
  }

}
