import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ActivarComponent } from './componentes/activar/activar.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';

export const routes: Routes = [
    {path:"", component:HomeComponent, pathMatch:"full"},
    {path:"home", component:HomeComponent, pathMatch:"full"},
    {path:"registro", component:RegistroComponent, pathMatch:"full"},
    {path:"activar/:email/:codigo", component:ActivarComponent,pathMatch:"full"},
    {path:"login", component:LoginComponent,pathMatch:"full"},
    {path:"contactenos", component:ContactenosComponent, pathMatch:"full"}
];
