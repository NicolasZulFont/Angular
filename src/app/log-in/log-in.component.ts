import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  show: boolean;
  constructor(private router:Router, private snackBar: MatSnackBar, private matDialogRef: MatDialogRef<LogInComponent>) {this.show = false;}

  ngOnInit(): void {
  }
  
  logIn(){
    var username = (document.getElementById("username") as HTMLInputElement).value
    var password = (document.getElementById("password") as HTMLInputElement).value
    localStorage.setItem("username", username)
    axios.post("https://authapp22.herokuapp.com/login/", {
       "username": username,
       "password": password
     }).then(res =>{
       console.log(res.data)
       localStorage.setItem("refresh", res.data["refresh"])
       localStorage.setItem("access", res.data["access"])
       this.router.navigate(["lugares"])
       this.matDialogRef.close()
     }).then().catch((error)=>{
      var status = error.response.status
      if(status == 401){
        this.snackBar.open("El usuario/contraseña es incorrecta", "Cerrar")
      }else if(status == 400){
        this.snackBar.open("El usuario/contraseña es incorrecta", "Cerrar")
      }else if(status == 404){
        this.snackBar.open("Erorr con la conexión, por favor intente más tarde", "Cerrar")
      }else if(status == 502 && status == 500){
        this.snackBar.open("Erorr con la conexión, por favor intente más tarde", "Cerrar")
      }else if(status == 500){
        this.snackBar.open("Erorr con la conexión, por favor intente más tarde", "Cerrar")
      }
      })
      var token = localStorage.getItem("refresh")
      axios.post("https://authapp22.herokuapp.com/refresh/", {
      "refresh": token
  })
  }
  viewPassword(){
    this.show = !this.show;
  }
}
