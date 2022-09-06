import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldFileTableComponent } from './field-file-table.component';

describe('FieldFileTableComponent', () => {
  let component: FieldFileTableComponent;
  let fixture: ComponentFixture<FieldFileTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldFileTableComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldFileTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
