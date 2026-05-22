import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FetchApiComponent } from './fetchapi.component';
import { ParentComponent } from './parent-child/parent.component';
import { NgOnChangesParentComponent } from './parent-child/ngonchanges-parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgOnChangesParentComponent],
  template: `
    <!-- <fetchapi-component></fetchapi-component> -->
    <!-- <parent-child-component></parent-child-component> -->
    <app-ngonchanges-parent-component></app-ngonchanges-parent-component>
  `,
})
export class AppComponent { }
