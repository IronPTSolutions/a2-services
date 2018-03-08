import { CounterService } from './../../shared/services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [
    CounterService
  ]
})
export class CounterComponent implements OnInit {
  count: number = 0;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
  }

  increment() {
    this.count = this.counterService.inc();
  }

}
