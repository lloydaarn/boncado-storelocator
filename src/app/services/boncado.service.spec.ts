import { TestBed } from '@angular/core/testing';

import { BoncadoService } from './boncado.service';

describe('BoncadoService', () => {
  let service: BoncadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoncadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
