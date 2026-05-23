import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileStoreService } from './profile-store.service'; // Adjust path

@Component({
    selector: 'app-profile-input',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="card p-3 m-2 shadow-sm border-primary">
      <label class="form-label fw-bold text-primary">Update Profile Name Live:</label>
      <!-- #nameBox creates a local template variable so we can read its value -->
      <input 
        #nameBox
        type="text" 
        class="form-control" 
        placeholder="Type a new name..." 
        (input)="store.updateProfileName(nameBox.value)"
      />
    </div>
  `
})
export class ProfileInputComponent {
    // Inject the centralized service as 'public' so the template can see it
    constructor(public store: ProfileStoreService) { }
}