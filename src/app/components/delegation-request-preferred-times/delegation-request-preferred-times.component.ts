import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delegation-request-preferred-times',
  templateUrl: './delegation-request-preferred-times.component.html',
  styleUrls: ['./delegation-request-preferred-times.component.scss']
})
export class DelegationRequestPreferredTimesComponent implements OnInit {
  calender:any;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.calender);
  }
  next(){
    this.router.navigate(['DelegationRequestThanku'])
  }
}
