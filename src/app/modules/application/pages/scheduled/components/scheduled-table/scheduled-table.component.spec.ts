import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledTableComponent } from './scheduled-table.component';

describe('ScheduledTableComponent', () => {
  let component: ScheduledTableComponent;
  let fixture: ComponentFixture<ScheduledTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduledTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScheduledTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
