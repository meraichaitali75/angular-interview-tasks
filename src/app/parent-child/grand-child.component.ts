import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-grand-child-component',
    imports: [CommonModule],
    template: `
     <h1>GRAND RELAY COMPONENT</h1>
     <button (click)="onClickTrigger()">Grand Child </button>
  `,
})
export class GrandChildComponent {

    @Output() grandchildAction = new EventEmitter<string>();

    onClickTrigger(){
        this.grandchildAction.emit('Signal Secure');
        console.log("Signal from the deep Grandchild!");
    }
}   