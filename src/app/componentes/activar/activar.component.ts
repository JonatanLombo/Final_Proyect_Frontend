import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';
import { PeticionService } from '../../servicios/peticion.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activar',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './activar.component.html',
  styleUrl: './activar.component.css'
})
export class ActivarComponent implements OnInit {

    constructor(private peticion:PeticionService, private actroute: ActivatedRoute){}

    email:string = ""
    codigo:string = ""

    ngOnInit(): void {
    this.email = this.actroute.snapshot.params["email"]
    this.codigo = this.actroute.snapshot.params["codigo"] 
    }

    
      activar(){
        let post = {
          host:this.peticion.urlHost,
          path:"/usuarios/activar",
          payload:{
            email:this.email,
            codigo: this.codigo
          }
        }
        this.peticion.post(post.host + post.path, post.payload).then((respuesta:any) =>{
          console.log(respuesta)
          if(respuesta.state == true){
            Swal.fire({
              title: 'Que bien!',
              text: respuesta.mensaje,
              icon: 'success',
            })
          }
          else
          {
            Swal.fire({
              title: 'Error!',
              text: respuesta.mensaje,
              icon: 'error',
            })
          }
        })
    
      }

}
