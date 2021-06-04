import { TestBed } from '@angular/core/testing';

import { GetshipmentService } from './getshipment.service';

describe('GetshipmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetshipmentService = TestBed.get(GetshipmentService);
    expect(service).toBeTruthy();
  });
});
