import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCalculatorComponent } from './my-calculator.component';

describe('MyCalculatorComponent', () => {
  let component: MyCalculatorComponent;
  let fixture: ComponentFixture<MyCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
