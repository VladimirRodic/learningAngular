import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  template: `
<div class="row">
    <div class="col-sm-6">
        <input
            type="text"
            value = "{{ username }}"
            (input)="updateUsername($event)"
        >
        <button
                type="button"
                [disabled]="usernameEmpty"
                (click)="resetUsername()"
        >Reset</button>
    </div>
</div>
<div class="row">
    <div class="col-sm-3">
        <ng-container *ngIf="!usernameEmpty; else emptyUsername">
            {{ username }}
        </ng-container>
        <ng-template #emptyUsername>
            Empty
        </ng-template>
    </div>
</div>
  `,
  styles: []
})
export class InputFieldComponent implements OnInit {

  username = '';
  usernameEmpty = true;

  constructor() { }

  ngOnInit() {
  }

  updateUsername(e) {
    this.username = e.srcElement.value;
    this.username === '' ? this.usernameEmpty = true : this.usernameEmpty = false;
  }

  resetUsername() {
    this.username = '';
    this.usernameEmpty = true;
  }
}
