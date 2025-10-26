import { TestBed } from '@angular/core/testing';

import { TwoDService } from './two-d-service';

describe('TwoDService', () => {
  let service: TwoDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwoDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
