import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delegation-req-register-member-above-fifteen',
  templateUrl: './delegation-req-register-member-above-fifteen.component.html',
  styleUrls: ['./delegation-req-register-member-above-fifteen.component.scss']
})
export class DelegationReqRegisterMemberAboveFifteenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  register(){
    this.router.navigate(['AddMembers']);
  }
  skip(){
    this.router.navigate(['PreferredTimes']);
  }
}
