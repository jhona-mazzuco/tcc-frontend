import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoteToUserComponent } from './demote-to-user.component';

describe('DemoteToUserComponent', () => {
  let component: DemoteToUserComponent;
  let fixture: ComponentFixture<DemoteToUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoteToUserComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoteToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
