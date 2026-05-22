import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { count } from 'rxjs';

/*
2). Task 5: Parent Accessing Child Methods via @ViewChild
The Goal: Sometimes a parent needs to directly trigger an action inside a 
child without passing data down or waiting for an event.
*/

@Component({
    selector: 'app-viewchild-child-component',
    imports: [CommonModule],
    template: `
     <h3>CHILD COMPONENT</h3>
     <p>{{user?.name}}</p>
  `,
})
export class ViewChildChildComponent {

    @Input() user!: { name: string, role: string };

    resetForm() {
        this.user.name = "Pooja Surti";
    }
}