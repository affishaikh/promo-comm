import { TestBed } from '@angular/core/testing';

import { PromoCommLibService } from './promo-comm-lib.service';

describe('PromoCommLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromoCommLibService = TestBed.get(PromoCommLibService);
    expect(service).toBeTruthy();
  });
});
