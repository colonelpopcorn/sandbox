import { TestBed } from '@angular/core/testing';

import { MyCalculatorService } from './my-calculator.service';

describe('MyCalculatorService', () => {
  let service: MyCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('add', () => {
    it('should add numbers together', () => {
      expect(service.add(2, 2)).toBe(4);
    })
  })
});
