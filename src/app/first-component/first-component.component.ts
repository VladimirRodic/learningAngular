import { Component, OnInit } from '@angular/core';

import { TestServiceService} from '../services/test-service.service';

@Component({
  selector: 'app-first-component',
  template: `
      <div>First component</div>
    <button (click)="increaseCounter()">Increase</button>
    <button (click)="decreaseCounter()">Decrease</button>
  `,
  styles: []
})
export class FirstComponentComponent implements OnInit {

  counter: number;

  constructor(public testService: TestServiceService) { }

  ngOnInit() {
    this.counter = this.testService.getCounter();
  }

  increaseCounter() {
    this.testService.increaseCounter();
    this.testService.counterUpdated.emit(this.testService.getCounter());
  }

  decreaseCounter() {
    this.testService.decreaseCounter();
    this.testService.counterUpdated.emit(this.testService.getCounter());
  }
}
