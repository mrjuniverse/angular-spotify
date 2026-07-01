import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { injectSessionInterceptor } from './inject-session-interceptor';

describe('injectSessionInterceptor', () => {
  //const interceptor: HttpInterceptorFn = (req, next) =>
  //  TestBed.runInInjectionContext(() => injectSessionInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        injectSessionInterceptor
      ]
    });
  });

  it('should be created', () => {
    const interceptor : injectSessionInterceptor = TestBed.inject(injectSessionInterceptor)
    expect(interceptor).toBeTruthy();
  });
});
