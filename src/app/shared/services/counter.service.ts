import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  count: number = 0;

  constructor() { }

  inc(): number {
    return ++this.count;
  }
}
