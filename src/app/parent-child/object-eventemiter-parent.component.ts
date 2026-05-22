import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PassObjectEventEmitterChildComponent } from './object-eventemiter-child.component';

/*
Task 7: Emitting Objects as Event Payloads
The Goal: Move beyond simple strings and emit a 
fully structured data object from a child back to a parent.
*/

@Component({
  selector: 'app-object-eventemitter-parent-component',
  imports: [CommonModule, PassObjectEventEmitterChildComponent],
  template: `
     <h1>PARENT COMPONENT (Emitting Objects as Event Payloads)</h1>
     <p>{{currentUser.id}}</p>
     <p>{{currentUser.title}}</p>
     <app-object-eventemiter-child-component (userObjectEventEmitter)="handleChildData($event)"></app-object-eventemiter-child-component >
  `,
})
export class PassObjectEventEmitterParentComponent {

  currentUser = { id: 200, title: 'Chaitali' };

  handleChildData(payload: { id: number, title: string }): void {
    console.log('ID received:', payload.id);
    console.log('Title received:', payload.title);

    this.currentUser.id = payload.id;
    this.currentUser.title = payload.title;
  }

}