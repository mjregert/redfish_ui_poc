import { TestBed, inject } from '@angular/core/testing';

import { RedfishDataService } from './redfish-data.service';

describe('RedfishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedfishDataService]
    });
  });

  it('should be created', inject([RedfishDataService], (service: RedfishDataService) => {
    expect(service).toBeTruthy();
  }));
});
