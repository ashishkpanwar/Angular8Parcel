import { TestBed } from '@angular/core/testing';

import { GetdepartmentsService } from './getdepartments.service';

describe('GetdepartmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetdepartmentsService = TestBed.get(GetdepartmentsService);
    expect(service).toBeTruthy();
  });
});
