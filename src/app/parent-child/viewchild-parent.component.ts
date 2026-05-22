import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ViewChildChildComponent } from './viewchild-child.component';

/*
Task 5: Parent Accessing Child Methods via @ViewChild
The Goal: Sometimes a parent needs to directly trigger an action 
inside a child without passing data down or waiting for an event.
*/

@Component({
  selector: 'app-ngonchanges-parent-component',
  imports: [CommonModule, ViewChildChildComponent],
  template: `
     <h1>PARENT COMPONENT (@ViewChild)</h1>
     <button (click)="triggerChildReset()">Reset Child from Parent</button>
     <app-viewchild-child-component [user]="currentUser"></app-viewchild-child-component>
  `,
})
export class ViewChildParentComponent {
  currentUser = { name: 'Chaitali Merai', role: 'Angular Developer', count: 10 };

  @ViewChild(ViewChildChildComponent) childComp!: ViewChildChildComponent;

  triggerChildReset():void{
    this.childComp.resetForm();
    console.log('⚡ Parent successfully invoked Child method via @ViewChild!');
  }
}