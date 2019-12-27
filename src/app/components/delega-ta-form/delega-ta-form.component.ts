import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-delega-ta-form',
  templateUrl: './delega-ta-form.component.html',
  styleUrls: ['./delega-ta-form.component.scss']
})
export class DelegaTaFormComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 6000,
      verticalPosition: 'top',
      panelClass: ['blue-snackbar']
    });
  }
}
