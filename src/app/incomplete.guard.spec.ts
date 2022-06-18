import { TestBed } from '@angular/core/testing';

import { IncompleteGuard } from './incomplete.guard';

describe('IncompleteGuard', () => {
  let guard: IncompleteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IncompleteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
