import { computed, Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProfileSignalStoreService {

    private _profileName = signal<string>('Guest User');
    public profileName = this._profileName.asReadonly();

    uppercaseProfileName = computed(() =>
        this.profileName().toUpperCase())


    updateName(newName: string): void{
        this._profileName.set(newName); // Use .set() to completely replace the value
    }
}