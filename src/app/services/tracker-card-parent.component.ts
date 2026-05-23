import { CommonModule } from "@angular/common";
import { Component, Injectable } from "@angular/core";
import { CounterTrackerChildComponent } from "./tracker-card-child.component";

/*
Task 2: Component-Scoped Element Isolation
The Goal: Provide a state tracker service directly 
inside a single component's providers: [] metadata array instead of the application root.

Interview Focus: Demonstrate how the element injector tree isolates state 
instances between separate instances of the exact same component rendering on screen side-by-side.
*/

@Component({
    selector: 'app-parent-tracker-card',
    standalone: true,
    imports: [CommonModule, CounterTrackerChildComponent],
    template: `

    <h1>Component-Scoped Element Isolation</h1>
    <div class="d-flex justify-content-around">
        <app-tracker-child-card></app-tracker-child-card>
        <app-tracker-child-card></app-tracker-child-card>
    </div>
    `
})
export class CounterTrackerParentComponent {
}