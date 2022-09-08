import { TestBed } from '@angular/core/testing';

import { ProgramRoutesService } from './program-routes.service';

describe('ProgramRoutesService', () => {
  let service: ProgramRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
