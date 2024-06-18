import { TestBed } from '@angular/core/testing';

import { ConvertidorService } from './convertidor.service';

describe('ConvertidorService', () => {
  let service: ConvertidorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertidorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
