import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, Observable, of } from 'rxjs';
export interface User {
  id: number;
  name: string;
  email: string;
}
@Component({
  selector: 'fetchapi-component',
  imports: [CommonModule],
  template: `
      <h1>RXjs Observable Users</h1>
      @if(users$ | async; as usersList){
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
    <h1>Writable Signal + Interop Bridge</h1>
      @if(usersSignalList().length > 0){
      <table>
        <tbody>
        @for(user of usersSignalList(); track user.id){
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
export class FetchApiComponent implements OnInit {

  private readonly apiUrl = "https://jsonplaceholder.typicode.com/users";
  private http = inject(HttpClient);

  //RXjs observable
  users$: Observable<User[]> = of([]);
  ngOnInit(): void {
    this.users$ = this.fetchUsersFromApi();
  }

  //Signal Strem data
  public usersSignalList = toSignal(
    this.fetchUsersFromApi(),
    { initialValue: [] } // Safe fallback synchronous layout collection array
  );

  private fetchUsersFromApi(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError((error) => {
        return of([]);
      })
    )
  }
}