import { CommonModule } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
    selector: 'app-status-sandbox',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container mt-4" style="max-width: 400px;">
        <h3>Synchronous State Primitives & Data Mutability</h3>
        <div class="card p-4 shadow-sm border-start border-4" [ngClass]="userStatus() === 'Online' ? 'border-success' : 'border-danger'">
            <h3 class="h5 mb-3 text-secondary">System Pulse Monitor</h3>
        </div>
        <div class="d-flex align-items-center mb-4">
            <span class="me-2 fw-semibold">Current State:</span>
            <span [ngClass]="userStatus() === 'Online' ? 'bg-success': 'bg-warning text-dark'">{{ userStatus() }} </span>
        </div>
        <button (click)="toggleStatus()" class="btn btn-outline-dark btn-sm w-100">
        Toggle Pulse State
        </button>
    </div>
    `
})
export class StatusSandboxComponent {
    public userStatus = signal<string>('Online');
    public toggleStatus(): void {
        this.userStatus.update(currentValue => {
            return currentValue === 'Online' ? 'Away' : 'Online';
        });
    }
}