import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../../servicios/peticion.service';
declare var $: any
import Swal from 'sweetalert2';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plantas',
  standalone: true,
  imports: [MenuComponent,CommonModule, FormsModule],
  templateUrl: './plantas.component.html',
  styleUrl: './plantas.component.css'
})
export class PlantasComponent implements OnInit{

    constructor(public peticion:PeticionService){}
  
    ngOnInit(): void {
      this.listar()
    }
  
    datos:any[] = []
    nombre:String = ""
    codigo:String = ""
    imagen:String = ""
    precio:String = ""
    perfil:String = "Cliente"
    descripcion:String = ""
    idSeleccionado:String =""
  
    listar(){
      let post = {
        host:this.peticion.urlHost,
        path:"/plantas/listar",
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
        path:"/plantas/listar_id",
        payload:{
          _id:_id
        }
      }
      this.peticion.post(post.host + post.path, post.payload).then((respuesta:any) =>{
        this.codigo = respuesta[0].codigo
        this.nombre = respuesta[0].nombre
        this.imagen = respuesta[0].imagen
        this.precio = respuesta[0].precio
        this.descripcion = respuesta[0].descripcion
        $('#modalDatos').modal('show')
    })
    }
  
    actualizar(){
      let post = {
        host:this.peticion.urlHost,
        path:"/plantas/actualizar",
        payload:{
          _id:this.idSeleccionado,
          nombre:this.nombre,
          imagen:this.imagen,
          precio:this.precio,
          descripcion:this.descripcion
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
        path:"/plantas/guardar",
        payload:{
          codigo:this.codigo,
          nombre:this.nombre,
          imagen:this.imagen,
          precio:this.precio,
          descripcion:this.descripcion
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
          $('modalDatos').modal('hide')
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
        path:"/plantas/eliminar",
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
      this.imagen = ""
      this.precio = ""
      this.descripcion = ""
      this.idSeleccionado = ""
    }
  
    selectedplantas!:File
  
    seleccionarImagen(event:any){
      this.selectedplantas = event.target.files[0];
    }
  
    numRandom:number = 0
    Random(){
      this.numRandom = Math.floor(Math.random() * (9999 - 1000) + 1000);
    }
    
    cargarImagen(){
      var post = {
        host:this.peticion.urlHost,
        path:"/plantas/" + this.idSeleccionado
      }
      this.peticion.uploadFile(this.selectedplantas, post.host + post.path).subscribe(
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
            this.listar()
            $('#modalDatos').modal('hide')
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
  
