import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PeticionService } from '../../servicios/peticion.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos-plantas',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, RouterLink],
  templateUrl: './productos-plantas.component.html',
  styleUrl: './productos-plantas.component.css'
})
export class ProductosPlantasComponent implements OnInit {


  ngOnInit(): void {
    this.listarProductos()
  }

  constructor(public peticion: PeticionService){}

  datos:any[] =[]

  listarProductos(){
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


}
