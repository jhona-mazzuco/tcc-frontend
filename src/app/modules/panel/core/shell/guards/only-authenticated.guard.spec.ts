import { TestBed } from '@angular/core/testing';

import { OnlyAuthenticatedGuard } from './only-authenticated.guard';

describe('OnlyAuthenticatedGuard', () => {
  let guard: OnlyAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
