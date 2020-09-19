import { TestBed } from '@angular/core/testing';

import { UserGuardsService } from './user-guards.service';

describe('UserGuardsService', () => {
  let service: UserGuardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGuardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
