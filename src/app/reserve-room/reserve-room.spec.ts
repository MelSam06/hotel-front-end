import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveRoom } from './reserve-room';

describe('ReserveRoom', () => {
  let component: ReserveRoom;
  let fixture: ComponentFixture<ReserveRoom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveRoom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveRoom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
