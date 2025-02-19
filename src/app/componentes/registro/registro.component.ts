import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';
import { PeticionService } from '../../servicios/peticion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private peticion:PeticionService){}

  nombre:string = ""
  apellido:string = ""
  email:string = ""
  password:string = ""

  registrar(){
    let post = {
      host:this.peticion.urlHost,
      path:"/usuarios/registrar",
      payload:{
        email:this.email,
        nombre: this.nombre,
        apellido: this.apellido,
        password: this.password
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
