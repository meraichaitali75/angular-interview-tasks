import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { NgOnChangesChildComponent } from './ngonchanges-child.component';

/*
3). Detect exactly when and how an inbound item updates using a lifecycle hook.
*/

@Component({
  selector: 'app-ngonchanges-parent-component',
  imports: [CommonModule, NgOnChangesChildComponent],
  template: `
     <h1>PARENT COMPONENT</h1>
     <button (click)="incrementCount()">Increment Count</button>
     <app-ngonchanges-child-component [count]="currentUser.count"></app-ngonchanges-child-component>
  `,
})
export class NgOnChangesParentComponent {
  currentUser = { name: 'Chaitali Merai', role: 'Angular Developer', count: 10 };

  incrementCount(): void{
    this.currentUser.count++;
  }
}