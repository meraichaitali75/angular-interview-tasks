import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FetchApiComponent } from './api/fetchapi.component';
import { ParentComponent } from './parent-child/parent.component';
import { NgOnChangesParentComponent } from './parent-child/ngonchanges-parent.component';
import { ViewChildParentComponent } from './parent-child/viewchild-parent.component';
import { TemplateReferenceParentComponent } from './parent-child/template-refernce-parent.component';
import { PassObjectEventEmitterParentComponent } from './parent-child/object-eventemiter-parent.component';
import { GrandParentComponent } from './parent-child/grand-parent.component';
import { NgContentParentComponent } from './parent-child/ng-content-parent';
import { DirectiveComponent } from './directives/directive.component';
import { PipesComponent } from './directives/truncate-pipes.component';
import { FilterPipesComponent } from './directives/filter-pipes.component';
import { HighlightComponent } from './directives/highlight.directive';
import { SafeNavigationDashboardComponent } from './directives/safe-navigation.component';
import { CounterTrackerParentComponent } from './services/tracker-card-parent.component';
import { ProfileParentComponent } from './services/behavioursubject/profile-parent.component';
import { ProfileParentSignalComponent } from './services/signals-store-service/profile-parent-signal.component';
import { StatusSandboxComponent } from './signals/status-sandbox/status-sandbox.component';
import { CheckCounterComponent } from './signals/checkout-counter/checkout-counter.component';
import { SearchComponent } from './signals/search/search-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  template: `

    <!-- PARENT-CHILD COMPONENT -->
    <!-- <parent-child-component></parent-child-component> -->
    <!-- <app-ngonchanges-parent-component></app-ngonchanges-parent-component> -->
    <!-- <app-ngonchanges-parent-component></app-ngonchanges-parent-component> -->
    <!-- <app-template-reference-parent-component></app-template-reference-parent-component> -->
    <!-- <app-object-eventemitter-parent-component></app-object-eventemitter-parent-component> -->

    <!-- DIRECTIVES -->
    <!-- <app-ngcontent-parent-component></app-ngcontent-parent-component> -->
    <!-- <app-directive-component></app-directive-component> -->
    <!-- <app-pipes-component></app-pipes-component> -->
    <!-- <app-filter-pipes-component></app-filter-pipes-component> -->
    <!-- <app-highlight-directive-component></app-highlight-directive-component> -->
    <!-- <app-safe-navigation-dashboard></app-safe-navigation-dashboard> -->

    <!-- SERVICES -->
    <!-- <fetchapi-component></fetchapi-component> -->
    <!-- <app-parent-tracker-card></app-parent-tracker-card> -->
    <!-- <app-profile-parent></app-profile-parent> -->
    <!-- <app-profile-parent-signal></app-profile-parent-signal> -->
    <!-- <app-status-sandbox></app-status-sandbox> -->
    <app-search-signal></app-search-signal>
  `,
})
export class AppComponent { }
