import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { count } from 'rxjs';


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