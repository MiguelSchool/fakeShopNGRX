import { TestBed } from '@angular/core/testing';

import { GetProductEffectService } from './get-product-effect.service';

describe('GetProductEffectService', () => {
  let service: GetProductEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
