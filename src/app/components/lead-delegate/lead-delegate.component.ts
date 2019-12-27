import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lead-delegate',
  templateUrl: './lead-delegate.component.html',
  styleUrls: ['./lead-delegate.component.scss']
})
export class LeadDelegateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  next(){
    this.router.navigate(['typeOfDelegation'])
  }
}
