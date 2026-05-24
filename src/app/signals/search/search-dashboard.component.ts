import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, computed, inject, signal } from "@angular/core";
import { toSignal, toObservable } from "@angular/core/rxjs-interop";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { catchError, debounceTime, delay, distinctUntilChanged, map, Observable, of, switchMap } from "rxjs";

export interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

@Component({
    selector: 'app-search-signal',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
        <h4 class="text-info h5 mb-3">1. Writable Signal + Interop Bridge</h4>
        <label class="form-label text-muted small">Triggers fine-grained DOM node updates</label>
        <input #box type="text" class="form-control" placeholder="search" (input)="searchInput.set(box.value)" />
        <table>
            <tbody>
                @for(item of signalSearchResults(); track item){
                    <tr>
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.username}}</td>
                        <td>{{item.email}}</td>
                    </tr>
                }@empty {
                    <p>No matching signal profiles found</p> 
                }
            </tbody>
        </table>

        <h4 class="text-info h5 mb-3">2. Pure RxJS Stream (Traditional)</h4>
        <label class="form-label text-muted small">Triggers top-down component dirty-checking sweeps</label>  
        <input type="text" 
            class="form-control" 
            placeholder="Search via Traditional RxJS" 
            [formControl]="rxjsSearchControl"
        />
        <table>
            <tbody>
                @for(user of (rxjsSearchResults$ | async); track user.id){
                    <tr>
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.username}}</td>
                        <td>{{user.email}}</td>
                    </tr>
                }@empty {
                    <p>No matching Rxjs profiles found</p> 
                }
            </tbody>
        </table>
        
    `
})
export class SearchComponent {

    private http = inject(HttpClient);
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // =========================================================================
    // SETUP 1: SIGNALS CORE LOGIC
    // =========================================================================
    // Writable signal tracking raw keystrokes synchronously
    public searchInput = signal<string>('');
    // Interop bridge: Signal -> Observable -> HTTP Fetch -> Output Read-only Signal
    public signalSearchResults = toSignal(
        toObservable(this.searchInput).pipe(
            debounceTime(300),              // Wait 300ms for user to stop typing
            distinctUntilChanged(),         // Skip if the text is identical to the last check
            switchMap(query => this.fetchUsersFromApi(query))
        ), { initialValue: [] } // Mandatory: Provides an immediate default state array
    );

    // =========================================================================
    // SETUP 2: TRADITIONAL RXJS CORE LOGIC
    // =========================================================================
    // Event stream controller tracking continuous template interactions
    public rxjsSearchControl = new FormControl('');
    public rxjsSearchResults$: Observable<User[]> = this.rxjsSearchControl.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(query => this.fetchUsersFromApi(query || ''))
    );

    fetchUsersFromApi(query: string): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl).pipe(
            // catchError(error => {
            //     return of([]);
            // })
            //The API returns all users; we apply a client-side filter array manipulation macro
            map(users => users.filter(user =>
                user.name.toLowerCase().includes(query.toLowerCase())
            ))
        );
    }
}