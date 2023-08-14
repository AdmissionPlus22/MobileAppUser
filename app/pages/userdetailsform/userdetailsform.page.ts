import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-userdetailsform',
  templateUrl: './userdetailsform.page.html',
  styleUrls: ['./userdetailsform.page.scss'],
})
export class UserdetailsformPage implements OnInit {

  constructor(private router: Router) { }

  async redirectTonext() {
    this.router.navigate(['/homemain']);
  }

  ngOnInit() {
  }

}
