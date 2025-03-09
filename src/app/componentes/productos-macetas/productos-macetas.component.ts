import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-productos-macetas',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './productos-macetas.component.html',
  styleUrl: './productos-macetas.component.css'
})
export class ProductosMacetasComponent {

}
