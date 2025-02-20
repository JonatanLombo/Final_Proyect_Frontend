import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { PeticionService } from '../../servicios/peticion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  ngOnInit(): void {
    this.cargarTodos()
  }
  constructor(private peticion:PeticionService){}

  datos:any[] = []

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

}
