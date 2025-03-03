import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PeticionService } from '../../servicios/peticion.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
declare var $: any
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

constructor(private peticion:PeticionService, private router:Router){}

ngOnInit(): void {
  this.cargarEstado()
}

datos:any= {
  nombre:"Cargando...",
  perfil:"Cargando..."
}

  cargarEstado(){
    let post = {
      host:this.peticion.urlHost,
      path:"/usuarios/estado",
      payload:{
      }
    }
    this.peticion.post(post.host + post.path, post.payload).then((respuesta:any) =>{
      if(respuesta.nombre == undefined || respuesta.nombre == "" || respuesta.nombre == null ){
        this.router.navigate(["/login"])
      }
      this.datos.nombre = respuesta.nombre
      this.datos.perfil = respuesta.perfil
  })
  }

  logout(){
    let post = {
      host:this.peticion.urlHost,
      path:"/usuarios/logout",
      payload:{
      }
    }
    this.peticion.post(post.host + post.path, post.payload).then((respuesta:any) =>{  
      if(respuesta.state == true){
               //Redirección
               this.router.navigate(["/login"])
               Swal.fire({
                 title: '¡Que bien!',
                 text: respuesta.mensaje,
                 icon: 'success',
               })
             }
  })
  }


}
