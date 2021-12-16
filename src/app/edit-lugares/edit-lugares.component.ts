import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { MatDialogRef } from '@angular/material/dialog';
import axios from 'axios';
@Component({
  selector: 'app-edit-lugares',
  templateUrl: './edit-lugares.component.html',
  styleUrls: ['./edit-lugares.component.css']
})
export class EditLugaresComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,private matDialogRef: MatDialogRef<EditLugaresComponent>) { }

  ngOnInit(): void {
  }
  editLugar(){
    var id = (document.getElementById("id1") as HTMLInputElement).value
    var name = (document.getElementById("name1") as HTMLInputElement).value
    var tipoLugar = (document.getElementById("tipoLugar1") as HTMLInputElement).value
    var precio = (document.getElementById("precio1") as HTMLInputElement).value
    var rEdad = (document.getElementById("rEdad1") as HTMLInputElement).value
    var distancia = (document.getElementById("distancia1") as HTMLInputElement).value
    var tiempoEstancia = (document.getElementById("tiempoEstancia1") as HTMLInputElement).value
    axios.put("https://turismopuntosapp.herokuapp.com/LugaresUpdate/"+id+"/", {
      "nombre": name,
      "tipoLugar": tipoLugar,
      "precio": precio,
      "restriccionEdad": rEdad,
      "distancia": distancia,
      "tiempoEstancia": tiempoEstancia
  }).then(rep =>{
    this.snackBar.open("Lugar editado correctamente.", "Cerrar")
    this.matDialogRef.close()
  }).catch((error)=>{
    var status = error.response.status
    if(status == 404){
      this.snackBar.open("Por favor llene todos los campos.", "Cerrar")
    }
  })
  }
}
