import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetValueComponent } from './widget-value.component';

describe('WidgetContainerComponent', () => {
  let component: WidgetValueComponent;
  let fixture: ComponentFixture<WidgetValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
