import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { count } from 'rxjs';


@Component({
    selector: 'app-child-timer',
    imports: [CommonModule],
    template: `
     <h3>CHILD COMPONENT</h3>
     <p>{{status}}</p>
  `,
})
export class TemplateReferenceChildComponent {
    status: string = "Running";
    stopTimer(): void{
        this.status = "Stopped";
    }

}