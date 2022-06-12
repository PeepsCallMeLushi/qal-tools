import { TestBed } from '@angular/core/testing';

import { CardFilteringService } from './card-filtering.service';

describe('CardFilteringService', () => {
  let service: CardFilteringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardFilteringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
