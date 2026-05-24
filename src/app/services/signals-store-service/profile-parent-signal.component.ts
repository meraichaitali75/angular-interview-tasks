import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalInputComponent } from './signal-input.component';
import { SignalDisplayComponent } from './signal-display.component';


/*
Task 4: Modern Localized Reactive Stores via Angular Signals
The Goal: Refactor a standard data service store to manage state using fine-grained
reactivity via public writable signal() definitions and read-only computed() properties.

Interview Focus: Contrast the performance advantages of zone-less Signals updating specific 
DOM nodes versus standard Change Detection scanning the entire component subtree.

*/
@Component({
  selector: 'app-profile-parent-signal',
  standalone: true,
  imports: [CommonModule, SignalInputComponent, SignalDisplayComponent],
  template: `
      <div class="container mt-5" style="max-width: 500px;">
        <h2 class="mb-4">Fine-Grained Signals Sandbox</h2>
        <!-- Sibling Component 1: The Producer -->
        <app-signal-input></app-signal-input>
        
        <!-- Sibling Component 2: The Consumer -->
        <app-signal-display></app-signal-display>
    </div>
  `
})
export class ProfileParentSignalComponent {
}