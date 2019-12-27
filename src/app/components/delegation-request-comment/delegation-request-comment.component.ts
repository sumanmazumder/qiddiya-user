import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delegation-request-comment',
  templateUrl: './delegation-request-comment.component.html',
  styleUrls: ['./delegation-request-comment.component.scss']
})
export class DelegationRequestCommentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  send(){
    this.router.navigate(['DelegationRequestThanku']);
  }
}
