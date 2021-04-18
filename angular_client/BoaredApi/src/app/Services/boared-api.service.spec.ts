import { TestBed } from '@angular/core/testing';

import { BoaredApiService } from './boared-api.service';

describe('BoaredApiService', () => {
  let service: BoaredApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoaredApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
