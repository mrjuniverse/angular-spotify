import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sessionGuard } from './session-guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('sessionGuard', () => {
  //const executeGuard: CanActivateFn = (...guardParameters) =>
  //  TestBed.runInInjectionContext(() => sessionGuard(...guardParameters));
  let guard: sessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    imports : [RouterTestingModule]
    guard = TestBed.inject(sessionGuard)
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
