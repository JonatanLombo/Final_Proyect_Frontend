import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { PeticionService } from '../../servicios/peticion.service';
import { DatosConocenosService } from '../../servicios/datos-conocenos.service';



@Component({
  selector: 'app-contactenos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './contactenos.component.html',
  styleUrl: './contactenos.component.css'
})
export class ContactenosComponent implements OnInit{

  constructor(private peticion:PeticionService, public conocenos:DatosConocenosService){}
  
  ngOnInit(): void {
  this.datos=this.conocenos
  }
  datos:any={
   text_1:"",
   text_2:"" 
  }

}
