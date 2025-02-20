import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

}
