import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ChildComponent } from './child.component';

/*
2). Create a parent component and a child component named UserCard. 
Pass a user object { name: 'John', role: 'Developer' } from the parent to the child 
using an @Input() property, and display it inside the child's template.
*/

@Component({
  selector: 'parent-child-component',
  imports: [CommonModule, ChildComponent],
  template: `
     <h1>PARENT COMPONENT</h1>
     <app-child-component [user]="currentUser" [name]="currentUser.name" (roleUpdated)="handleRoleUpdate($event)"></app-child-component>
  `,
})
export class ParentComponent {
  currentUser = { name: 'Chaitali Merai', role: 'Angular Developer' };

  handleRoleUpdate(newRole: string): void {
    this.currentUser.role = newRole;
    console.log("newRole: ", newRole);
  }
}