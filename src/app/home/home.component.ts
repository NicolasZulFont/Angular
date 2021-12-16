import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private matDialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }
  onOpenRegistro(){
    this.matDialog.open(RegistroComponent);
  }
}
