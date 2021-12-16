//Librerias
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//Componentes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistroComponent } from './registro/registro.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ExitosaComponent } from './exitosa/exitosa.component';
import { NavUserComponent } from './nav-user/nav-user.component';

//Pipe
import {KeyPipe} from './pipes/key.pipe';
import { EditLugaresComponent } from './edit-lugares/edit-lugares.component';

//Apollo
import { APOLLO_OPTIONS } from 'apollo-angular' ;   
import { HttpLink } from 'apollo-angular/http' ;   
import { InMemoryCache } from '@apollo/client/core' ;
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavHomeComponent,
    LogInComponent,
    RegistroComponent,
    LugaresComponent,
    ExitosaComponent,
    NavUserComponent,
    KeyPipe,
    EditLugaresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  entryComponents:[
    LogInComponent,
    RegistroComponent,
    EditLugaresComponent,
    ExitosaComponent
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://appapolloserver1.herokuapp.com/',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
