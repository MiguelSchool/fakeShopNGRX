import { TestBed } from '@angular/core/testing';

import { SingleProductEffectService } from './single-product-effect.service';

describe('SingleProductEffectService', () => {
  let service: SingleProductEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleProductEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
