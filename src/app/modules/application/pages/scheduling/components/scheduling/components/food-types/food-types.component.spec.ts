import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTypesComponent } from './food-types.component';

describe('MeatTypesComponent', () => {
  let component: FoodTypesComponent;
  let fixture: ComponentFixture<FoodTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
