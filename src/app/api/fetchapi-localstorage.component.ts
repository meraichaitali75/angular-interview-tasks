import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, Observable, of, tap } from 'rxjs';
export interface User {
  id: number;
  name: string;
  email: string;
}
@Component({
  selector: 'fetchapi-localstorage-component',
  imports: [CommonModule],
  template: `
      <h1>RXjs Observable Users</h1>
      @if(usersObservableLocalData$ | async; as usersList){
        @if(usersList.length > 0){
        <table>
          <tbody>
          @for(user of usersList; track user.id){
          <tr>
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
          </tr>
          }
          </tbody>
        </table>
        }
      }
    <h1>Writable Signal + Interop Bridge from Localstorage Data</h1>
      @if(usersSignalLocalData().length > 0){
      <table>
        <tbody>
        @for(user of usersSignalLocalData(); track user.id){
        <tr>
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
        </tr>
        }
        </tbody>
      </table>
      }
  
  `,
})
export class FetchApiDataFromLocalStorageComponent implements OnInit {

  private readonly apiUrl = "https://jsonplaceholder.typicode.com/users";
  private http = inject(HttpClient);

  // =========================================================================
  // SIGNALS ARCHITECTURE HOOKS
  // =========================================================================
  public usersSignalLocalData = signal<User[]>([]);
  constructor() {
    // Signals side-effect handler tracking memory mutations automatically
    effect(() => {
      const usersSignalDataToSave = this.usersSignalLocalData();
      if (usersSignalDataToSave.length > 0) {
        localStorage.setItem('users_data_signals', JSON.stringify(usersSignalDataToSave));
      }
    });
  }
  
  // =========================================================================
  // TRADITIONAL RXJS ARCHITECTURE HOOKS
  // =========================================================================
  public usersObservableLocalData$: Observable<User[]> = of([]);
  ngOnInit(): void {
    // --- 1. Execution Setup for Traditional RxJS ---
    const traditionalCache = localStorage.getItem('users_data_rxjs');
    if (traditionalCache) {
      this.usersObservableLocalData$ = of(JSON.parse(traditionalCache));
    } else {
      this.usersObservableLocalData$ = this.fetchUsersTraditional();
    }

    // --- 2. Execution Setup for Modern Signals ---
    const signalsCache = localStorage.getItem('users_data_signals');
    if (signalsCache) {
      this.usersSignalLocalData.set(JSON.parse(signalsCache));
    } else {
      this.fetchUsersSignal();
    }
  }


  // Pure traditional functional configuration pipeline stream
  private fetchUsersTraditional(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      // The tap operator is the RxJS equivalent to an effect().
      // It executes a side-effect command without mutating the stream data channel payload.
      tap(data => {
        if (data.length > 0) {
          localStorage.setItem('users_data_rxjs', JSON.stringify(data));
        }
      }),
      catchError((error) => {
        console.error('Traditional flow pipeline catchError caught:', error);
        return of([]);
      })
    );
  }
  private fetchUsersSignal(): void {
    this.http.get<User[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Signals flow pipeline fallback catchError caught:', error);
        return of([]);
      })
    ).subscribe(data => {
      this.usersSignalLocalData.set(data);
    })
  }
}