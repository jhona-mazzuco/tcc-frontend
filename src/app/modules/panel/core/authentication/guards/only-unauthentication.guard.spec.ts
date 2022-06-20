import { TestBed } from '@angular/core/testing';

import { OnlyUnauthenticatedGuard } from './only-unauthenticated.guard';

describe('OnlyUnauthenticationGuard', () => {
  let guard: OnlyUnauthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyUnauthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
