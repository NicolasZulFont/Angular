import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
  constructor(private route: Router){}
  status: number = 0;
  respuesta: boolean = false;
  redireccionar(validar: boolean){
    if(validar == false){
      this.route.navigate(['home'])
    }
  }
  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var refresh = localStorage.getItem("refresh")
      if(refresh !== ""){
        var token;
        axios.post("https://authapp22.herokuapp.com/refresh/", {
          "refresh": refresh
        }).then(res=>{
          token = res.data.access
          axios.post("https://authapp22.herokuapp.com/verifyToken/",{
            "token": token
          }).then(res =>{
            this.respuesta = true
          })
        })
      }
      this.redireccionar(this.respuesta)
      return this.respuesta
  }
  
}
