import { Component } from '@angular/core';
import { DelegaTaFormComponent } from './components/delega-ta-form/delega-ta-form.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private open: MatDialog, private router: Router){}
  title = 'qiddiya';
  delegaTaForm(){
    this.open.open(DelegaTaFormComponent,{
      width:'500px'
    })
  }
  home(){
    this.router.navigate(['']);
  }
}
