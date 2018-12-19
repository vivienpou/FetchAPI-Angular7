import { TestBed } from '@angular/core/testing';

import { FetchdataserviceService } from './fetchdataservice.service';

describe('FetchdataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchdataserviceService = TestBed.get(FetchdataserviceService);
    expect(service).toBeTruthy();
  });
});
