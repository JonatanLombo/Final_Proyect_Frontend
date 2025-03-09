import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosMacetasComponent } from './productos-macetas.component';

describe('ProductosMacetasComponent', () => {
  let component: ProductosMacetasComponent;
  let fixture: ComponentFixture<ProductosMacetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosMacetasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosMacetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
