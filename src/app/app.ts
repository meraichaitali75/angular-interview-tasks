import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FetchApiComponent } from './fetchapi.component';
import { ParentComponent } from './parent-child/parent.component';
import { NgOnChangesParentComponent } from './parent-child/ngonchanges-parent.component';
import { ViewChildParentComponent } from './parent-child/viewchild-parent.component';
import { TemplateReferenceParentComponent } from './parent-child/template-refernce-parent.component';
import { PassObjectEventEmitterParentComponent } from './parent-child/object-eventemiter-parent.component';
import { GrandParentComponent } from './parent-child/grand-parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GrandParentComponent],
  template: `
    <!-- <fetchapi-component></fetchapi-component> -->
    <!-- <parent-child-component></parent-child-component> -->
    <!-- <app-ngonchanges-parent-component></app-ngonchanges-parent-component> -->
    <!-- <app-ngonchanges-parent-component></app-ngonchanges-parent-component> -->
    <!-- <app-template-reference-parent-component></app-template-reference-parent-component> -->
    <!-- <app-object-eventemitter-parent-component></app-object-eventemitter-parent-component> -->
    <app-grand-parent-component></app-grand-parent-component>
  `,
})
export class AppComponent { }
