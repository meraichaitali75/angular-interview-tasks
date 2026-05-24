import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit, signal } from '@angular/core';

@Component({
    selector: 'app-theme-component',
    imports: [CommonModule],
    template: `
      <h1>Theme</h1>
      <div class="containet mt-4" [ngClass]="activeTheme() === 'dark'? 'bg-dark text-white': 'bg-light text-dark'" style="padding: 2rem; border-radius: 8px;">
        <h4>Active Layout Vector: {{ activeTheme() | uppercase }}</h4>
        <button (click)="updateTheme('light')">Light Mode</button>
        <button (click)="updateTheme('dark')">Dark Mode</button>
      </div>
 
  `,
})
export class ThemeSandboxComponent {

    public activeTheme = signal<string>(localStorage.getItem('user-theme') || 'light');

    constructor() {
        effect(() => {
            const currentTheme = this.activeTheme();
            // console.log("currentTheme: ", currentTheme);
            localStorage.setItem('user-theme', this.activeTheme());
        });
    }

    public updateTheme(newTheme: string): void {
        this.activeTheme.set(newTheme);
    }
}