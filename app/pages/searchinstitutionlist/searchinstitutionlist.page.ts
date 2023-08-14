import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-searchinstitutionlist',
  templateUrl: './searchinstitutionlist.page.html',
  styleUrls: ['./searchinstitutionlist.page.scss'],
})
export class SearchinstitutionlistPage implements OnInit {

  constructor(private router: Router) { }

  async redirectTonext() {
    this.router.navigate(['/institutiondetails']);
  }

  ngOnInit() {
  }

}
