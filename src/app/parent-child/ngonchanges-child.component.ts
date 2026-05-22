import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { count } from 'rxjs';

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