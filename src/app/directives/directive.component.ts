import { CommonModule, NgClass } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-directive-component',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h1>Modern if/else Structure Directives</h1>
        @if(isLoading){
            <h3>Loading dashboard metrics...</h3>
        }@else {
            <h3>Welcome to your dashboard</h3>
        }
        <button (click)="toggleLoading()">toggleLoading</button>
     
    <h1>Modern For Loop Structure Directives</h1>
     <table>
     @for(skill of skillsList; track skill.id){
        <tr>
            <td>{{skill.id}}</td>
            <td>{{skill.name}}</td>
     </tr>
     }
    </table>

    <h1>empty array Directives</h1>
    <table>
    <tbody>
        <!-- @for(emptyskil of emptySkillsList; track emptyskil.id) {
        <tr>
            <td>{{ emptyskil.id }}</td>
            <td>{{ emptyskil.name }}</td>
        </tr>
        } @empty {
        <tr>
            <td colspan="2">No technical skills have been added to this profile yet.</td>
        </tr>
        } -->
    </tbody>
    </table>

    <h1>Switch Directives</h1>
    @switch(userRole){
        @case('admin'){
            <h2>Admin Portal: System Controls Active</h2>
        }
        @case('editor')
        {
            <h2>Editor Workspace: Content Entry Tools Loaded</h2>
        }
        @default {
            <h2>Viewer Mode: Read-Only Access</h2>  
        }
    }
    <button (click)="changeRole('admin')">Switch to Admin</button>
    <button (click)="changeRole('editor')">Switch to Editor</button>
    <button (click)="changeRole('viwer')">Switch to Viewer</button>
    
    <h1>ngClass Structure Directives</h1>
    <div class="alert p-3 m-3" [ngClass]="{'alert-danger fw-bold': isCritical, 'alert-success': !isCritical}">
        @if(isCritical){
            CRITICAL WARNING: System Resources Overloaded!
        }@else{
            System Status: All Core Operations Nominal.
        }
    </div>
    <button (click)="toggleAlertState()" class="btn btn-primary">Switch to Viewer</button>

    <h1>ngStyle Structure Directives</h1>
    <div class="progress m-3" style="height: 30px;" [ngStyle]="{ 'width': currentProgress + '%' }">
        <div class="progress-bar bg-success progress-bar-striped progress-bar-animated">{{ currentProgress }}%</div>
    </div>
    <button (click)="increaseProgress()" class="btn btn-primary">increaseProgress</button>

     `,
})

export class DirectiveComponent {
    //if-else DIRECTIVES
    isLoading = true;
    toggleLoading() {
        this.isLoading = false;
    }

    //FOR DIRECTIVES
    skillsList = [{ id: 1, name: 'Angular Signals' }, { id: 2, name: 'Rxjs Operators' }]

    //@empty DIRECTIVES
    emptySkillsList = [];


    //@switch DIRECTIVES
    userRole = "userRole";
    changeRole(newRole: string) {
        this.userRole = newRole;
    }

    //ngClass DIRECTIVES
    isCritical = false;
    toggleAlertState() {
        this.isCritical = !this.isCritical;
    }


    //ngStyle DIRECTIVES
    currentProgress = 25;
    increaseProgress() {
        this.currentProgress += 25;
        if (this.currentProgress === 100)
            this.currentProgress = 0;

    }
}