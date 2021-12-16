import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import axios from 'axios';
import { ExitosaComponent } from '../exitosa/exitosa.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  show: boolean;
  constructor(private router:Router, private snackBar: MatSnackBar, private matDialogRef: MatDialogRef<RegistroComponent>, private matDialog: MatDialog) { 
    this.show = false;
  }

  ngOnInit(): void {
  }
  viewPassword(){
      this.show = !this.show;
    }
    registrar(){
      var nombre = (document.getElementById("nombre") as HTMLInputElement).value
      var username = (document.getElementById("username") as HTMLInputElement).value
      var password = (document.getElementById("password") as HTMLInputElement).value
      var correo = (document.getElementById("correo") as HTMLInputElement).value
      axios.post("https://authapp22.herokuapp.com/user/", {
        "username": username,
        "password": password,
        "name": nombre,
        "email": correo
    }).then(res =>{
         this.matDialogRef.close()
         this.matDialog.open(ExitosaComponent)
       }).then().catch((error)=>{
        var status = error.response.status
        if(status == 400){
          console.log(error.response)
          this.snackBar.open("Por favor ingrese los datos correctamente", "Cerrar")
        }else if(status == 409){
          this.snackBar.open("El usuario ya existe", "Cerrar")
        }else if(status == 404){
          this.snackBar.open("Erorr con la conexión, por favor intente más tarde", "Cerrar")
        }else if(status == 502){
          this.snackBar.open("Erorr con la conexión, por favor intente más tarde", "Cerrar")
        }else if(status == 500){
          this.snackBar.open("Erorr con la conexión, por favor intente más tarde", "Cerrar")
        }
        }) 
    }
}
