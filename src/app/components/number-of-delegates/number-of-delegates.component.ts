import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-number-of-delegates',
  templateUrl: './number-of-delegates.component.html',
  styleUrls: ['./number-of-delegates.component.scss']
})
export class NumberOfDelegatesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  underFinteen(){
    this.router.navigate(['registerMemberUnderFifteen'])
  }
  aboveFifteen(){
    this.router.navigate(['registerMemberAboveFifteen'])
  }
}
