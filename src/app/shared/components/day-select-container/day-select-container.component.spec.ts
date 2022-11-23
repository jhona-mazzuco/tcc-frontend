import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySelectContainerComponent } from './day-select-container.component';

describe('DaySelectContainerComponent', () => {
  let component: DaySelectContainerComponent;
  let fixture: ComponentFixture<DaySelectContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaySelectContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaySelectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
