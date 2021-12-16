import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { HomeComponent } from './home/home.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ExitosaComponent } from './exitosa/exitosa.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  {path: "",component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "lugares", component: LugaresComponent, canActivate:[VigilanteGuard]},
  {path: "pruebas", component: ExitosaComponent, canActivate:[VigilanteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
