import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { PeticionService } from '../../servicios/peticion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { DatosUsuarioService } from '../../servicios/datos-usuario.service';
declare var $: any

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [MenuComponent,CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit{

  constructor(public peticion:PeticionService, public usuarios:DatosUsuarioService){}

  ngOnInit(): void {
    this.usuario = this.usuarios
    this.listar()
  }

  usuario:any ={perfil:""}

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
      path:"/productos/listar",
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
      path:"/productos/listar_id",
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
      path:"/productos/actualizar",
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
      path:"/productos/guardar",
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
      path:"/productos/eliminar",
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

  selectedFile!:File

  seleccionarImagen(event:any){
    this.selectedFile = event.target.files[0];
  }

  numRandom:number = 0
  Random(){
    this.numRandom = Math.floor(Math.random() * (9999 - 1000) + 1000);
  }
  
  cargarImagen(){
    var post = {
      host:this.peticion.urlHost,
      path:"/upload/" + this.idSeleccionado
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
