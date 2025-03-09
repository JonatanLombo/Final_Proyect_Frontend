import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { PeticionService } from '../../servicios/peticion.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { DatosConocenosService } from '../../servicios/datos-conocenos.service';
import { CommonModule } from '@angular/common';
declare var $: any

@Component({
  selector: 'app-conocenos',
  standalone: true,
  imports: [MenuComponent, FormsModule, CommonModule],
  templateUrl: './conocenos.component.html',
  styleUrl: './conocenos.component.css'
})
export class ConocenosComponent implements OnInit{

  constructor(private peticion:PeticionService, private conocenos:DatosConocenosService){}

  ngOnInit(): void {
    this.listar()
  }

  datos:any[] =[]
  text_1:String = ""
  text_2:String = ""
  _idSeleccionado:String=""

  listar(){
    let post = {
      host:this.peticion.urlHost,
      path:"/conocenos/listar",
      payload:{
      }
    }
    this.peticion.post(post.host + post.path, post.payload).then((respuesta:any) =>{
      this.datos = respuesta
  })
  }

  listar_id(_id:String){
    this._idSeleccionado = _id
    let post = {
      host:this.peticion.urlHost,
      path:"/conocenos/listar_id",
      payload:{
        _id:_id
      }
    }
    this.peticion.post(post.host + post.path, post.payload).then((respuesta:any) =>{
      this.text_1 = respuesta[0].text_1
      this.text_2 = respuesta[0].text_2
  })
  }
  
  guardar(){
      let post = {
        host:this.peticion.urlHost,
        path:"/conocenos/guardar",
        payload:{
          text_1: this.text_1,
          text_2: this.text_2,
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
          Swal.fire({
            title: '¡Que bien!',
            text: respuesta.mensaje,
            icon: 'success',
            })
        }
      })
  }

  actualizar(){
        let post = {
          host:this.peticion.urlHost,
          path:"/conocenos/actualizar",
          payload:{
            _id:this._idSeleccionado,
            text_1: this.text_1,
            text_2: this.text_2
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
            Swal.fire({
              title: '¡Que bien!',
              text: respuesta.mensaje,
              icon: 'success',
              })
          }
        })
  }


}
