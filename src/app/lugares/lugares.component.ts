import { Component, Inject, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { MatDialog} from '@angular/material/dialog' 
import axios from 'axios';
import { EditLugaresComponent } from '../edit-lugares/edit-lugares.component';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  datos:any=[]
  
  constructor(private snackBar:MatSnackBar, private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  listarLugar(){
    var nameT;
    axios.get("https://turismopuntosapp.herokuapp.com/LugaresList/").then(
      res=>{
        this.datos = res.data
        console.log(this.datos)
      }
    ).catch((error)=>{
      this.snackBar.open("No se pueden listar los datos", "Cerrar")
    })

  }
  crearLugar(){
    var nombre = (document.getElementById("name") as HTMLInputElement).value
    var tipoLugar = (document.getElementById("tipoLugar") as HTMLInputElement).value
    var precio = (document.getElementById("precio") as HTMLInputElement).value
    var rEdad = (document.getElementById("rEdad") as HTMLInputElement).value
    var distancia = (document.getElementById("distancia") as HTMLInputElement).value
    var tiempoEstancia = (document.getElementById("tiempoEstancia") as HTMLInputElement).value
    if(nombre=="" && tipoLugar == "" && precio=="" && rEdad=="" && distancia=="" && tiempoEstancia==""){
      this.snackBar.open("Por favor ingrese datos", "Cerrar")
    }else{
      axios.post("https://turismopuntosapp.herokuapp.com/LugaresCreated/",  {
      "nombre": nombre,
      "tipoLugar": tipoLugar,
      "precio": precio,
      "restriccionEdad": rEdad,
      "distancia": distancia,
      "tiempoEstancia": tiempoEstancia
      }).then(resp =>{
      this.snackBar.open("El lugar a sido creado exitosamente.", "Cerrar")
      }).catch((error)=>{
        var status = error.response.status
        if(status == 400){
          this.snackBar.open("Por favor ingrese los datos correctamente.", "Cerrar")
        }
      })
    }
    this.listarLugar()
  
  }
  editarLugar(){
    this.matDialog.open(EditLugaresComponent)
  }
  borrarLugar(){
    var id = (document.getElementById("search") as HTMLInputElement).value
    axios.delete("https://turismopuntosapp.herokuapp.com/LugaresDelete/" +id+ "/")
  }
  
}
