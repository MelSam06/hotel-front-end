import { TestBed } from '@angular/core/testing';

import { ReservationOrdersService } from './reservation-orders-service';

describe('ReservationOrdersService', () => {
  let service: ReservationOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
