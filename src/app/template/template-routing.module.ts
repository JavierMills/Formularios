import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { appendFile } from 'fs';

const routes:  Routes = [
  {
    // se definira en el path principal de app.module
    path: '',
   children:[
     {
       path: 'basicos',
      component: BasicosComponent
     },
     {
      path: 'dinamicos',
     component: DinamicosComponent
    },
    {
      path: 'switches',
     component: SwitchesComponent
    },
    {
      path: '**',
     component: BasicosComponent
    }
   ]
  },
 
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class TemplateRoutingModule { }
