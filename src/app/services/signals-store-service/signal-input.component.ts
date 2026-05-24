import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSignalStoreService } from './profile-signal-store.service'; // Adjust path

@Component({
  selector: 'app-signal-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card p-3 m-2 shadow-sm border-info">
      <label class="form-label fw-bold text-info">Update Signal Name Live:</label>
      <!-- #signalBox creates a clean template reference variable -->
      <input 
        #signalBox
        type="text" 
        class="form-control" 
        placeholder="Type a new name..." 
        (input)="store.updateName(signalBox.value)"
      />
    </div>
  `
})
export class SignalInputComponent {
  // Inject your centralized signal store service directly
  constructor(public store: ProfileSignalStoreService) {}
}