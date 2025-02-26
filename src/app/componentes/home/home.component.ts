import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PeticionService } from '../../servicios/peticion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    this.listarProductos()
  }

  constructor(private peticion: PeticionService){}

  datos:any[] =[]

  listarProductos(){
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


}
