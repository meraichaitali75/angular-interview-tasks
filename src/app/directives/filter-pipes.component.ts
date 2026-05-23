import { CommonModule, NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { FilterPipe } from "../custom-pipe/FilterPipe";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-filter-pipes-component',
    standalone: true,
    imports: [CommonModule, FormsModule, FilterPipe],
    template: `
    <h1>Custom Filter Pipe </h1>

    <input type="text"
            class="form-control"
            placeholder="Type to filter skills live... "
            [(ngModel)]="searchText"
    />

    <small>Current Search Token:{{searchText || 'None'}} </small>
    <table>
        <tbody>
        <tr>
            <th>Transaction ID</th>
            <th>Skill</th>
        </tr>
         @for(skill of (skillSets | filterCustomPipe: searchText); track skill.id)
        {
            <tr>
                <td>{{skill.id }}</td>
                <td>{{skill.name}}</td>
            </tr>
        }@empty {
            <p>No matching skills found for "{{ searchText }}"</p>
        }
        </tbody>
    </table>
`
})

export class FilterPipesComponent {
    searchText: string = '';
    skillSets = [
        { id: 1, name: 'Angular Signals Reactivity' },
        { id: 2, name: 'RxJS Declarative Observables' },
        { id: 3, name: 'TypeScript Enterprise Architecture' },
        { id: 4, name: 'Next.js Server Side Rendering' },
        { id: 5, name: 'Tailwind CSS Utility Design' }
    ]
}