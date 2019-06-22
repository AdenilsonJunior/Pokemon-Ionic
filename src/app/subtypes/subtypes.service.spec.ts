import { TestBed } from '@angular/core/testing';

import { SubtypesService } from './subtypes.service';

describe('SubtypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubtypesService = TestBed.get(SubtypesService);
    expect(service).toBeTruthy();
  });
});
