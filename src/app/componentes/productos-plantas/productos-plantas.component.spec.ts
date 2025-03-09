import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPlantasComponent } from './productos-plantas.component';

describe('ProductosPlantasComponent', () => {
  let component: ProductosPlantasComponent;
  let fixture: ComponentFixture<ProductosPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosPlantasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
