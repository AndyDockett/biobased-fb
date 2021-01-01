import { TestBed } from '@angular/core/testing';

import { BuildingproductsService } from './buildingproducts.service';

describe('BuildingproductsService', () => {
  let service: BuildingproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
