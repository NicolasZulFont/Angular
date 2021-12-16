import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exitosa',
  templateUrl: './exitosa.component.html',
  styleUrls: ['./exitosa.component.css']
})
export class ExitosaComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<ExitosaComponent>, 
    private router: Router) { }

  ngOnInit(): void {
  }
  cerrarBtn(){
    this.router.navigate(["lugares"])
    this.matDialogRef.close()
  }
}
