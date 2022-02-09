import { TestBed } from '@angular/core/testing';

import { GetCategoryEffectsService } from './get-category-effects.service';

describe('CategoryEffectsService', () => {
  let service: GetCategoryEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCategoryEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
