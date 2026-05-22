import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TemplateReferenceChildComponent } from './template-reference-child.component';

/*
Task 6: Direct Template Reference Variable Access
The Goal: Control a child component completely inside 
the HTML template without writing a single line of TypeScript in the parent component class.
*/

@Component({
  selector: 'app-template-reference-parent-component',
  imports: [CommonModule, TemplateReferenceChildComponent],
  template: `
     <h1>PARENT COMPONENT</h1>
     <app-child-timer #myTimer></app-child-timer>
     <button (click)="myTimer.stopTimer()">Stop Timer</button>
  `,
})
export class TemplateReferenceParentComponent {}