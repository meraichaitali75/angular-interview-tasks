import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FetchApiComponent } from './fetchapi.component';
import { ParentComponent } from './parent-child/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ParentComponent],
  template: `
    <!-- <fetchapi-component></fetchapi-component> -->
    <parent-child-component></parent-child-component>
  `,
})
export class AppComponent { }
