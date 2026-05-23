import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { GrandChildComponent } from './grand-child.component';

@Component({
    selector: 'app-grand-relay-component',
    imports: [CommonModule, GrandChildComponent],
    template: `
     <h1>GRAND Relay COMPONENT</h1>
     <app-grand-child-component (grandchildAction)="onForwardSignal($event)"></app-grand-child-component>
  `,
})
export class GrandRelayComponent {

    @Output() childAction = new EventEmitter<string>();

    onForwardSignal(message: string) {
        this.childAction.emit(message);
    }
}