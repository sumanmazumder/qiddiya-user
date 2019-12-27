import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delegation-details',
  templateUrl: './delegation-details.component.html',
  styleUrls: ['./delegation-details.component.scss']
})
export class DelegationDetailsComponent implements OnInit {
  private Approval: boolean = true;
  private Requests: boolean = false;
  public buttonName:any = 'Show';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  edit(){
    this.router.navigate(['EditMember']);
  }
  add(){
    this.router.navigate(['AddMember']);
  }

  approval(){
    this.Approval = !this.Approval;
    this.Requests = false;
    // if(this.Approval){
    //   this.buttonName = "Hide";
    // }
    // else{
    //   this.buttonName = "Show";
    // }
      
  }
  pending(){
    this.Requests = !this.Requests;
    this.Approval = false;
  }
}
