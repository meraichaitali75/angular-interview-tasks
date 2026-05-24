import { CommonModule } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
    selector: 'app-check-counter',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container mt-4" style="max-width: 400px;">
        <h5>Quantity: {{ quantity()}}</h5>
        <h5>totalPrice: {{ totalPrice() | currency: 'CAD': 'symbol' }}</h5>
        <button (click)="increase()" class="btn btn-outline-dark btn-sm w-100">
        increase
        </button>
        <button (click)="decrese()" class="btn btn-outline-dark btn-sm w-100">
        decrese
        </button>
    </div>
    `
})
export class CheckCounterComponent {
    public quantity = signal<number>(1);
    public pricePerUnit = 25;
    public totalPrice = computed(() => this.quantity() * this.pricePerUnit);
    increase(): void {
        this.quantity.update(q => q + 1);
    }
    decrese(): void {
        this.quantity.update(q => q > 1 ? q - 1 : 1);
    }
}