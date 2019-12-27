import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['./member-update.component.scss']
})
export class MemberUpdateComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  home(){
    this.router.navigate(['']);
  }
}
