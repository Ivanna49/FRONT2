import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia.component';
import { NewexperienciaComponent } from './components/experiencia/newexperiencia.component';
import { EditAcercaDeComponent  }  from  './components/acerca-de/edit-acerca-de.component' ;

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent  },
  { path: 'editexp/:id', component: EditexperienciaComponent  },
  { path: 'newexp', component: NewexperienciaComponent  },
  { path: 'nuevaedu', component: NeweducacionComponent  },
  { path: 'editedu/:id', component: EditeducacionComponent  },
  { path: 'newskill', component: NewSkillComponent  },
  { path: 'editskill/:id', component: EditSkillComponent  },
  { path :'editacercade/:id', component: EditAcercaDeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
