import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let user: {
    username: "mor_2314",
    password: "83r5^_"
  }
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a token', () => {
    const token = service.login({ username: "mor_2314", password: "83r5^_"})
    expect(token)
      .toBe({token: 'eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'})
  })
});
