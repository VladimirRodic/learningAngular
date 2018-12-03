import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `
    <ul *ngFor="let username of usernames">
        <li>
            {{ username }}
            <button type="button" (click)="deleteUsername(username)">DELETE</button>
        </li>
    </ul>
  `,
  styles: []
})
export class ChildComponentComponent implements OnInit {

  @Output() usernameDeleted = new EventEmitter();

  @Input() usernames: [];

  constructor() { }

  ngOnInit() {
  }

  deleteUsername(username) {
    console.log(username);
    this.usernameDeleted.emit(username);
  }
}
