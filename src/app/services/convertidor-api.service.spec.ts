import { TestBed } from '@angular/core/testing';

import { ConvertidorApiService } from './convertidor-api.service';

describe('ConvertidorApiService', () => {
  let service: ConvertidorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertidorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
