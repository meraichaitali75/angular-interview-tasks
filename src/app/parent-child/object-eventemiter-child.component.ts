import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { count } from 'rxjs';


@Component({
    selector: 'app-object-eventemiter-child-component',
    imports: [CommonModule],
    template: `
     <h3>CHILD COMPONENT</h3>
     <button (click)="sendDataToParent()">Send Object Data To Parent</button>
  `,
})
export class PassObjectEventEmitterChildComponent {

    @Output() userObjectEventEmitter = new EventEmitter<{ id: number; title: string }>();

    sendDataToParent() {
        this.userObjectEventEmitter.emit({ id: 101, title: 'Angular Object EventEmitter' });
    }
}