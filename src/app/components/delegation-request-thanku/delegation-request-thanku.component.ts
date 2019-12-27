import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delegation-request-thanku',
  templateUrl: './delegation-request-thanku.component.html',
  styleUrls: ['./delegation-request-thanku.component.scss']
})
export class DelegationRequestThankuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  home(){
    this.router.navigate([''])
  }
}
