import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ActivarComponent } from './componentes/activar/activar.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { DetalladoComponent } from './componentes/detallado/detallado.component';
import { ConocenosComponent } from './componentes/conocenos/conocenos.component';
import { PlantasComponent } from './componentes/plantas/plantas.component';
import { ProductosPlantasComponent } from './componentes/productos-plantas/productos-plantas.component';
import { ProductosMacetasComponent } from './componentes/productos-macetas/productos-macetas.component';
import { MacetasComponent } from './componentes/macetas/macetas.component';

export const routes: Routes = [
    {path:"", component:HomeComponent, pathMatch:"full"},
    {path:"home", component:HomeComponent, pathMatch:"full"},
    {path:"detallado/:nombre/:_id", component:DetalladoComponent, pathMatch:"full"},
    {path:"registro", component:RegistroComponent, pathMatch:"full"},
    {path:"activar/:email/:codigo", component:ActivarComponent,pathMatch:"full"},
    {path:"login", component:LoginComponent,pathMatch:"full"},
    {path:"contactenos", component:ContactenosComponent, pathMatch:"full"},
    {path:"usuarios", component:UsuariosComponent, pathMatch:"full"},
    {path:"servicios", component:ServiciosComponent, pathMatch:"full"},
    {path:"categorias", component:CategoriasComponent, pathMatch:"full"},
    {path:"productos", component:ProductosComponent, pathMatch:"full"},
    {path:"productos-plantas", component:ProductosPlantasComponent, pathMatch:"full"},
    {path:"productos-macetas", component:ProductosMacetasComponent, pathMatch:"full"},
    {path:"plantas", component:PlantasComponent, pathMatch:"full"},
    {path:"macetas", component:MacetasComponent, pathMatch:"full"},
    {path:"conocenos", component:ConocenosComponent, pathMatch:"full"},
    {path:"dashboard", component:DashboardComponent, pathMatch:"full"}
];
