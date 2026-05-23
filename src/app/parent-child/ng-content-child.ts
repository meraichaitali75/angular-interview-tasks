import { Component, inject, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-ngcontent-child-component',
    template: `
    <div>
        <h3>CHILD COMPONENT (ng-content)</h3>
        <ng-content></ng-content>
    </div>
  `,
})
export class NgContentChildComponent {

}