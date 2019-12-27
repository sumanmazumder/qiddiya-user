import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-added',
  templateUrl: './member-added.component.html',
  styleUrls: ['./member-added.component.scss']
})
export class MemberAddedComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  home(){
    this.router.navigate(['']);
  }

}
