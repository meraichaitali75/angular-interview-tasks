import { CommonModule } from "@angular/common";
import { Component, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CounterTrackerService {
    public counterValue = 0;
    increment() {
        this.counterValue++;
    }
}
@Component({
    selector: 'app-tracker-child-card',
    standalone: true,
    imports: [CommonModule],
    providers: [CounterTrackerService],
    template: `
        <div class="card p-3 m-2 shadow-sm">
            {{ tracker.counterValue }}
        </div>
        <button class="btn btn-success" (click)="tracker.increment()">increment</button>
    `
})
export class CounterTrackerChildComponent {
    constructor(public tracker: CounterTrackerService) { }
}