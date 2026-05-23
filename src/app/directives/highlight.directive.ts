import { CommonModule} from "@angular/common";
import { Component } from "@angular/core";
import { HighlightDirective } from "../custom-pipe/HighlightDirective";

@Component({
    selector: 'app-highlight-directive-component',
    standalone: true,
    imports: [CommonModule, HighlightDirective],
    template: `
    <h1>Custom Highlight Directive </h1>

   <div appHighlight class="p-4 border rounded">
       Hover your mouse over this container to activate the custom directive!
   </div>
`
})

export class HighlightComponent {
    
}