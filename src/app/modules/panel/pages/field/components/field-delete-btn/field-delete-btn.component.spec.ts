import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDeleteBtnComponent } from './field-delete-btn.component';

describe('FieldDeleteBtnComponent', () => {
  let component: FieldDeleteBtnComponent;
  let fixture: ComponentFixture<FieldDeleteBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldDeleteBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDeleteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
