import { TestBed } from '@angular/core/testing';

import { FarmerServiceService } from './farmer-service.service';

describe('FarmerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerServiceService = TestBed.get(FarmerServiceService);
    expect(service).toBeTruthy();
  });
});
