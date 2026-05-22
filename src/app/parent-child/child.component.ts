import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

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
     <p>{{user.role}}</p>
     <button (click)="onPromote()">Promote</button>
  `,
})
export class ChildComponent {

    @Input() user!: { name: string, role: string };

    @Output() roleUpdated = new EventEmitter<string>();

    onPromote(): void {
        this.roleUpdated.emit('Lead');
        console.log("child callback hits");
    }
}