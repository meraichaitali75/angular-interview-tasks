import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInputComponent } from './profile-input.component';
import { ProfileDisplayComponent } from '../profile-display.component';


/*
Module 2: State Distribution & Cross-Component Communication
🟦 Task 3: Reactive State Shuttling via BehaviorSubject
The Goal: Construct a centralized data store service that exposes private BehaviorSubject streams alongside 
public read-only .asObservable() pipelines to share real-time state changes between decoupled sibling components.

*/
@Component({
  selector: 'app-profile-parent',
  standalone: true,
  imports: [CommonModule, ProfileInputComponent, ProfileDisplayComponent],
  template: `
      <div class="container mt-5" style="max-width: 500px;">
        <h2 class="mb-4">Reactive State Shuttling Sandbox</h2>
        <!-- Sibling Component 1: The Producer -->
        <app-profile-input></app-profile-input>
        
        <!-- Sibling Component 2: The Consumer -->
        <app-profile-display></app-profile-display>
    </div>
  `
})
export class ProfileParentComponent {
}