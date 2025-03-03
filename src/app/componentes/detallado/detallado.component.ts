import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PeticionService } from '../../servicios/peticion.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detallado',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './detallado.component.html',
  styleUrl: './detallado.component.css'
})
export class DetalladoComponent implements OnInit {

  constructor(private peticion:PeticionService, private actrote: ActivatedRoute){}

  ngOnInit(): void {
    this.cargarDetalle(this.actrote.snapshot.params["_id"])
  }


  datos: any = {}

  cargarDetalle(_id:String){
  let post = {
    host:this.peticion.urlHost,
    path:"/productos/listar_id",
    payload:{
      _id:_id
    }
  }
  this.peticion.post(post.host + post.path, post.payload).then((respuesta:any) =>{
    this.datos = respuesta[0]
})
}



  
}
