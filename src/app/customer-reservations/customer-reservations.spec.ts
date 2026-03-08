import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReservations } from './customer-reservations';

describe('CustomerReservations', () => {
  let component: CustomerReservations;
  let fixture: ComponentFixture<CustomerReservations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerReservations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerReservations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
