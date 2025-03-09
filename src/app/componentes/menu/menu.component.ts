import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PeticionService } from '../../servicios/peticion.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { DatosUsuarioService } from '../../servicios/datos-usuario.service';
declare var $: any
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

constructor(public peticion:PeticionService, private router:Router, private usuario:DatosUsuarioService){}

ngOnInit(): void {
  this.cargarEstado()
}

datos:any= {
  nombre:"Cargando...",
  perfil:"Cargando...",
  _id:""
}

  cargarEstado(){
    let post = {
      host:this.peticion.urlHost,
      path:"/usuarios/estado",
      payload:{
      }
    }
    this.peticion.post(post.host + post.path, post.payload).then((respuesta:any) =>{
      this.usuario = respuesta
      if(respuesta.nombre == undefined || respuesta.nombre == "" || respuesta.nombre == null ){
        this.router.navigate(["/login"])
      }
      this.datos.nombre = respuesta.nombre
      this.datos.perfil = respuesta.perfil
      this.datos._id = respuesta._id
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

    selectedFile!:File
    selectedPortada!:File
  
    seleccionarImagen(event:any){
      this.selectedFile = event.target.files[0];
      this.cargarImagen()
    }
  
    numRandom:number = 0
    numRandom2:number = 0
    
    Random(){
      this.numRandom = Math.floor(Math.random() * (9999 - 1000) + 1000);
      this.numRandom2 = Math.floor(Math.random() * (9999 - 1000) + 1000);
    }
    
    cargarImagen(){
      var post = {
        host:this.peticion.urlHost,
        path:"/avatar/" + this.datos._id
      }
      this.peticion.uploadFile(this.selectedFile, post.host + post.path).subscribe(
        (respuesta:any) => {
          if(respuesta.state == false){
            Swal.fire({
            title: '¡Error!',
            text: respuesta.mensaje,
            icon: 'error',
            })
          }
          else{
            this.Random()           
            Swal.fire({
              title: '¡Que bien!',
              text: respuesta.mensaje,
              icon: 'success',
              })
          }
        }
      )
    }

    seleccionarImagen2(event:any){
      this.selectedPortada = event.target.files[0];
      this.cargarImagen2()
    }
    
    cargarImagen2(){
      var post = {
        host:this.peticion.urlHost,
        path:"/portada/" + this.datos._id
      }
      this.peticion.uploadFile(this.selectedPortada, post.host + post.path).subscribe(
        (respuesta:any) => {
          if(respuesta.state == false){
            Swal.fire({
            title: '¡Error!',
            text: respuesta.mensaje,
            icon: 'error',
            })
          }
          else{
            this.Random()           
            Swal.fire({
              title: '¡Que bien!',
              text: respuesta.mensaje,
              icon: 'success',
              })
          }
        }
      )
    }


}
