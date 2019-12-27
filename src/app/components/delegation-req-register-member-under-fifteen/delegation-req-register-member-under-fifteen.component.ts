import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delegation-req-register-member-under-fifteen',
  templateUrl: './delegation-req-register-member-under-fifteen.component.html',
  styleUrls: ['./delegation-req-register-member-under-fifteen.component.scss']
})
export class DelegationReqRegisterMemberUnderFifteenComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  yes(){
    this.route.navigate(['DelegationRequestComment']);
  }
}
