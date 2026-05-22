import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { count } from 'rxjs';

/*
2). Create a parent component and a child component named UserCard. 
Pass a user object { name: 'John', role: 'Developer' } from the parent to the child 
using an @Input() property, and display it inside the child's template.
*/

@Component({
    selector: 'app-child-component',
    imports: [CommonModule],
    template: `
     <h3>CHILD COMPONENT</h3>
     <p>{{user.name}}</p>
     <p>Private Setter Value: {{name}}</p>
     <p>{{user.role}}</p>
     <button (click)="onPromote()">Promote</button>
  `,
})

export class ChildComponent {
    //private value setter(set)
    private _name: string = '';
    @Input() set name(value: string) {
        this._name = value.toUpperCase();
    }
    get name() {
        return this._name;
    }
    @Input() user!: { name: string, role: string };
    @Output() roleUpdated = new EventEmitter<string>();
  
    onPromote(): void {
        this.roleUpdated.emit('Lead');
        console.log("child callback hits");
    }
}