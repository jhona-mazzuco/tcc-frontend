import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySelectBarComponent } from './day-select-bar.component';

describe('DaySelectBarComponent', () => {
  let component: DaySelectBarComponent;
  let fixture: ComponentFixture<DaySelectBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaySelectBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaySelectBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
