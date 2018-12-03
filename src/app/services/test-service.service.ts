import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  counter = 0;

  counterUpdated = new EventEmitter<number>();

  constructor() { }

  writeMsgInConsole(message: string) {
    console.log(message);
  }

  increaseCounter() {
    this.counter++;
    console.log('Counter increased to: ' + this.counter);
  }

  decreaseCounter() {
    this.counter--;
    console.log('Counter decreased to: ' + this.counter);
  }

  getCounter() {
    return this.counter;
  }
}
