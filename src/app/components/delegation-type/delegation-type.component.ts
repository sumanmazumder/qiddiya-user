import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delegation-type',
  templateUrl: './delegation-type.component.html',
  styleUrls: ['./delegation-type.component.scss']
})
export class DelegationTypeComponent implements OnInit {
  status: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  gevernment(){
    this.status = !this.status; 
  }
  next(){
    this.router.navigate(['LeadDelegate'])
  }
  corporate(){

  }
  media(){

  }
  individual(){
    
  }
}
