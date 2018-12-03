import { Component, OnInit } from '@angular/core';

import { TestServiceService} from '../services/test-service.service';

@Component({
  selector: 'app-second-component',
  template: `
      <div>Second component</div>
    <p>
      Counter: {{ this.testService.getCounter() }}<br/>
      Counter 2: {{ this.counter }}
    </p>
  `,
  styles: []
})
export class SecondComponentComponent implements OnInit {

  counter: number;

  constructor(public testService: TestServiceService) {
    this.testService.counterUpdated.subscribe(
        (counter: number) => this.counter = counter
    );
  }

  ngOnInit() {
    this.counter = this.testService.getCounter();
  }

}
