import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';


const routes:  Routes = [
    {
      // se definira en el app.module
      path: '',
     children:[
       {
        path: 'registro',
       component: RegistroComponent
      },
      {
        path: 'login',
       component: LoginComponent
      },
      {
        path: '**', redirectTo: 'registro'
      }
     ]
    },
   
  ]
  



  @NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)]
  })
export class ValidacionModule { }
