import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import Swal from 'sweetalert2';
import { PeticionService } from '../../servicios/peticion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
declare var $: any

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [MenuComponent, CommonModule,FormsModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

    constructor(private peticion:PeticionService){}
  
    ngOnInit(): void {
      this.listar()
    }
  
    datos:any[] = []
    nombre:String = ""
    codigo:String = ""
    idSeleccionado:String =""
  
    listar(){
      let post = {
        host:this.peticion.urlHost,
        path:"/servicios/listar",
        payload:{
        }
      }
      this.peticion.post(post.host + post.path, post.payload).then((respuesta:any) =>{
        this.datos = respuesta
    })
    }
  
    listar_id(_id:String){
      this.idSeleccionado = _id
      let post = {
        host:this.peticion.urlHost,
        path:"/servicios/listar_id",
        payload:{
          _id:_id
        }
      }
      this.peticion.post(post.host + post.path, post.payload).then((respuesta:any) =>{
        this.codigo = respuesta[0].codigo
        this.nombre = respuesta[0].nombre
        $('#modalDatos').modal('show')
    })
    }
  
    actualizar(){
      let post = {
        host:this.peticion.urlHost,
        path:"/servicios/actualizar",
        payload:{
          _id:this.idSeleccionado,
          nombre:this.nombre
        }
      }
      this.peticion.post(post.host + post.path, post.payload).then((respuesta:any) =>{
        if(respuesta.state == false){
          Swal.fire({
          title: '¡Error!',
          text: respuesta.mensaje,
          icon: 'error',
          })
        }
        else{
          this.listar()
          $('#modalDatos').modal('hide')
          Swal.fire({
            title: '¡Que bien!',
            text: respuesta.mensaje,
            icon: 'success',
            })
        }
      })
    }
  
    guardar(){
      let post = {
        host:this.peticion.urlHost,
        path:"/servicios/guardar",
        payload:{
          codigo:this.codigo,
          nombre:this.nombre
        }
      }
      this.peticion.post(post.host + post.path, post.payload).then((respuesta:any) =>{
        if(respuesta.state == false){
          Swal.fire({
          title: '¡Error!',
          text: respuesta.mensaje,
          icon: 'error',
          })
        }
        else{
          this.listar()
          $('#modalDatos').modal('hide')
          Swal.fire({
            title: '¡Que bien!',
            text: respuesta.mensaje,
            icon: 'success',
            })
        }
      })
    }
  
    eliminar(){
      let post = {
        host:this.peticion.urlHost,
        path:"/servicios/eliminar",
        payload:{
          _id:this.idSeleccionado,
        }
      }
      this.peticion.post(post.host + post.path, post.payload).then((respuesta:any) =>{
        if(respuesta.state == false){
          Swal.fire({
          title: '¡Error!',
          text: respuesta.mensaje,
          icon: 'error',
          })
        }
        else{
          this.listar()
          $('#modalDatos').modal('hide')
          Swal.fire({
            title: '¡Que bien!',
            text: respuesta.mensaje,
            icon: 'success',
            })
        }
      })
    }
  
    nuevo(){
      $('#modalDatos').modal('show')
      this.codigo = ""
      this.nombre = ""
      this.idSeleccionado = ""
    }


}
