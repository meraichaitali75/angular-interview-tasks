import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' // 1. The Typo
})

/*
Task 1: Singleton Token Architecture via providedIn: 'root'
The Goal: Build a centralized configuration caching service using the 
modern @Injectable({ providedIn: 'root' }) paradigm.
Interview Focus: Explain how tree-shaking works during compile time and 
why token instances persist globally across separate routing tracks.
*/
export class ConfigService {
    private cacheData: Record<string, any> = {};
    constructor(){}
    // Public hook to set cache tokens securely
    setCache(key: string, value: any): void{
        this.cacheData[key] = value;
    }

    // Public hook to fetch cached data strings
    getCahe(key: string){
        return this.cacheData[key];
    }

}