import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FetchApiComponent } from './fetchapi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FetchApiComponent],
  template: `
    <fetchapi-component></fetchapi-component>
  `,
})
export class AppComponent {}
