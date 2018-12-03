import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  template: `
    <h4>Parent Component</h4>
    <div class="row">
        <div class="col-sm-6">
            <input
                type="text"
                value = ""
                #usernameInput
            />
            <button (click)="addUsername()">
                Add
            </button>
        </div>
    </div>
    <h4>Child Component</h4>
    <app-child-component
            [usernames] = "usernames"
            (usernameDeleted)="onUsernameDeleted($event)"
    ></app-child-component>
  `,
  styles: []
})
export class ParentComponentComponent implements OnInit {

  usernames = ['Petar', 'Jebivetar', 'Mirko'];

  @ViewChild('usernameInput') usernameInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addUsername() {
    this.usernames.push(this.usernameInput.nativeElement.value);
    this.usernameInput.nativeElement.value = '';
  }

  onUsernameDeleted(username) {
    //  delete username from the array
    const index = this.usernames.indexOf(username);
    if (index !== -1) {
      this.usernames.splice(index, 1);
    }
  }
}
