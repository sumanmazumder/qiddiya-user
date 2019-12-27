import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delegation-urn',
  templateUrl: './delegation-urn.component.html',
  styleUrls: ['./delegation-urn.component.scss']
})
export class DelegationUrnComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  next(){
    this.router.navigate(['DelegationDetails']);
  }
}
