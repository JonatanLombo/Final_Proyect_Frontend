import { TestBed } from '@angular/core/testing';

import { DatosConocenosService } from './datos-conocenos.service';

describe('DatosConocenosService', () => {
  let service: DatosConocenosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosConocenosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
