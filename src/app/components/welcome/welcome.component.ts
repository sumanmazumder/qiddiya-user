import { Component, OnInit } from '@angular/core';
import { DelegationTypeComponent } from '../delegation-type/delegation-type.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  bookANewVisit(){
    this.router.navigate(['DelegationType'])
  }
  manageExistingBooking(){
    this.router.navigate(['urn'])
  }
}
