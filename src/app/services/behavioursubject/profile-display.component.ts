import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileStoreService } from './profile-store.service';

@Component({
    selector: 'app-profile-display',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="card p-3 m-2 shadow-sm bg-light">
      <h5 class="text-muted mb-1">Global System Header</h5>
      <!-- The async pipe unwraps our BehaviorSubject stream automatically -->
      <h2 class="text-success fw-bold m-0">
        Active User: {{ store.profileName$ | async }}
      </h2>
    </div>
  `
})
export class ProfileDisplayComponent {
    constructor(public store: ProfileStoreService) { }
}