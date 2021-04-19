import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BoaredApiService } from './boared-api.service';

describe('BoaredApiService', () => {
  let service: BoaredApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BoaredApiService],
    });
    service = TestBed.inject(BoaredApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getDataByType() should return data with appropriate type', () => {
    let mockType="education";
    service.getDataByType(mockType).subscribe((res) => {
      expect(res).toEqual(
        jasmine.objectContaining({type:mockType})
      ); 
    });
  });
});
