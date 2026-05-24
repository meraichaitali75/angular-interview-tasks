import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSignalStoreService } from './profile-signal-store.service'; // Adjust path

@Component({
  selector: 'app-signal-display',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card p-3 m-2 shadow-sm bg-dark text-white">
      <h5 class="text-info mb-2">Zone-less Signal Monitor</h5>
      
      <!-- 1. Reading the read-only signal via function invocation () -->
      <p class="m-0 fs-4">
        Standard Value: <span class="text-warning">{{ store.profileName() }}</span>
      </p>
      
      <!-- 2. Reading the derived computed signal via function invocation () -->
      <p class="m-0 fs-5 text-muted">
        Computed Transformation: <span class="text-uppercase text-light">{{ store.uppercaseProfileName() }}</span>
      </p>
    </div>
  `
})
export class SignalDisplayComponent {
  constructor(public store: ProfileSignalStoreService) {}
}