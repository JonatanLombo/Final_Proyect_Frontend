import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import Swal from 'sweetalert2';
import { PeticionService } from '../../servicios/peticion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    constructor(private peticion:PeticionService){}

    email:string = ""
    password:string = ""
  
    iniciarSesion(){
      let post = {
        host:this.peticion.urlHost,
        path:"/usuarios/login",
        payload:{
          email:this.email,
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
