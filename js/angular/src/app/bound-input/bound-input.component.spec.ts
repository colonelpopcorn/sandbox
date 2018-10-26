import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundInputComponent } from './bound-input.component';

describe('BoundInputComponent', () => {
  let component: BoundInputComponent;
  let fixture: ComponentFixture<BoundInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoundInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
