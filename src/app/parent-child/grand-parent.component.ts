import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GrandRelayComponent } from './grand-relay.component';

/*
Task 8: Grandchild to Grandparent Interaction (Event Bubbling Alternative)
The Goal: Understand how a component deeply nested inside another component communicates upwards.
*/

@Component({
    selector: 'app-grand-parent-component',
    imports: [CommonModule, GrandRelayComponent],
    template: `
     <h1>GRAND PARENT COMPONENT</h1>
     <app-grand-relay-component (childAction)="onReceiveDeepSignal($event)"></app-grand-relay-component>
  `,
})

export class GrandParentComponent {
    onReceiveDeepSignal(finalPayload: string) {
        console.log("finalPayload: ", finalPayload);
    }
}