import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roomsvisibility } from './roomsvisibility';

describe('Roomsvisibility', () => {
  let component: Roomsvisibility;
  let fixture: ComponentFixture<Roomsvisibility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roomsvisibility]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roomsvisibility);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
