import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgContentChildComponent } from './ng-content-child';

/*
Single-Slot Content Projection (<ng-content>)
The Concept: Designing dynamic component wrappers (like custom modal boxes or cards) by 
projecting entire blocks of HTML markup directly from a parent layout into a 
placeholder slot inside the child view.
*/

@Component({
    selector: 'app-ngcontent-parent-component',
    imports: [CommonModule, NgContentChildComponent],
    template: `
     <h1>PARENT COMPONENT (ng-content)</h1>
        <app-ngcontent-child-component>
            <h5>Chaitali Merai</h5>
            <p>This paragraph is injected from the outside!</p>
            <button type="button">Action Inside Card</button>
        </app-ngcontent-child-component>
  `,
})
export class NgContentParentComponent {

}