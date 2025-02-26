import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { PeticionService } from '../../servicios/peticion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
declare var $: any

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [MenuComponent, CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  ngOnInit(): void {
    this.cargarTodos()
  }
  constructor(private peticion:PeticionService){}

  datos:any[] = []
  nombre:String = ""
  apellido:String = ""
  email:String = ""
  estado:String = "Activo"
  emailSelecciodo:String= ""

  cargarTodos(){
    let post = {
      host:this.peticion.urlHost,
      path:"/usuarios/listar",
      payload:{
      }
    }
    
    this.peticion.get(post.host + post.path).then((respuesta:any) =>{
      this.datos = respuesta
    })
  }

  editarEmail(email:String){
    this.emailSelecciodo = email

    let post = {
      host:this.peticion.urlHost,
      path:"/usuarios/listar_id",
      payload:{
        email:email
      }
    }
    
    this.peticion.post(post.host + post.path, post.payload).then((respuesta:any) =>{
      this.nombre = respuesta[0].nombre
      this.apellido = respuesta[0].apellido
      this.email = respuesta[0].email
      this.estado = respuesta[0].estado

      $('exampleModal').modal('show')
    })
  }

  actualizar(){
    let post = {
      host:this.peticion.urlHost,
      path:"/usuarios/actualizar",
      payload:{
        email:this.emailSelecciodo,
        nombre:this.nombre,
        apellido:this.apellido,
        estado:this.estado
      }
    }
    
    this.peticion.put(post.host + post.path, post.payload).then((respuesta:any) =>{
      if(respuesta.state == true){
        Swal.fire({
          title: '¡Que bien!',
          text: respuesta.mensaje,
          icon: 'success',
        })
        $('exampleModal').modal('hide')
        this.cargarTodos()
      }
      else{
        Swal.fire({
          title: '¡Error!',
          text: respuesta.mensaje,
          icon: 'error',
        })
      }  
    })
  }

  eliminar(){
    let post = {
      host:this.peticion.urlHost,
      path:"/usuarios/eliminar",
      payload:{
        email:this.emailSelecciodo,
      }
    }
    
    this.peticion.post(post.host + post.path, post.payload).then((respuesta:any) =>{
      $('exampleModal').modal('hide')
      Swal.fire({
        title: 'Que bien!',
        text: respuesta.mensaje,
        icon: 'success',
      })
      this.cargarTodos()
    })
  }

}
