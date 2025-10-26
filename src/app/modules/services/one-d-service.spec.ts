import { TestBed } from '@angular/core/testing';

import { OneDService } from './one-d-service';

describe('OneDService', () => {
  let service: OneDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
