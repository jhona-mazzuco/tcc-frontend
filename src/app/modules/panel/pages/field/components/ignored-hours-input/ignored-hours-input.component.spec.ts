import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnoredHoursInputComponent } from './ignored-hours-input.component';

describe('IgnoredHoursInputComponent', () => {
  let component: IgnoredHoursInputComponent;
  let fixture: ComponentFixture<IgnoredHoursInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IgnoredHoursInputComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IgnoredHoursInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
