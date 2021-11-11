import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyCalculatorService {

  constructor() { }

  public add(...numbers: number[]): number {
    return numbers.reduce((previous, current) => previous + current);
  }
}
