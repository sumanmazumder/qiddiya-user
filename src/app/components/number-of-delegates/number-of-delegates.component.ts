import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-number-of-delegates',
  templateUrl: './number-of-delegates.component.html',
  styleUrls: ['./number-of-delegates.component.scss']
})
export class NumberOfDelegatesComponent implements OnInit {
  public usernumber: number;
  public des01: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  receivedNumber(e){
    this.usernumber = e.target.value;
    console.log(this.usernumber)
  }
  
  // underFinteen(){
  //   this.router.navigate(['registerMemberUnderFifteen'])
  // }
  // aboveFifteen(){
  //   this.router.navigate(['registerMemberAboveFifteen'])
  // }
  next(){
    if(this.usernumber <= 15){
      this.router.navigate(['registerMemberUnderFifteen'])
    }else{
      this.router.navigate(['registerMemberAboveFifteen'])
    }
    
  }
  back(){
    this.router.navigate(['LeadDelegate'])
  }
}
