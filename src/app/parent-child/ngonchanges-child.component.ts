import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { count } from 'rxjs';

/*
2). Create a parent component and a child component named UserCard. 
Pass a user object { name: 'John', role: 'Developer' } from the parent to the child 
using an @Input() property, and display it inside the child's template.
*/

@Component({
    selector: 'app-ngonchanges-child-component',
    imports: [CommonModule],
    template: `
     <h3>CHILD COMPONENT (NgOnChanges())</h3>
     <p>{{count}}</p>
  `,
})
export class NgOnChangesChildComponent implements OnChanges {

    @Input() count!: number;
    
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['count']) {
           const countChange = changes['count'];
           console.log('🔄 count changed from:', countChange.previousValue, 'to:', countChange.currentValue);
        }
    }
   
}