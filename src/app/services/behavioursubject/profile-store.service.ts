import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProfileStoreService{

    private _profileName$ = new BehaviorSubject<string>('Guest User');
    public profileName$: Observable<string> = this._profileName$.asObservable();

    updateProfileName(newName: string): void{
        this._profileName$.next(newName);
    }
}