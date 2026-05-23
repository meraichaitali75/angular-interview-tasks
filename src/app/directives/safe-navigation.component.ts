import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-safe-navigation-dashboard',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h3>Safe Navigation Operator (?.) & Nullish Coalescing (??) Safeguards</h3>


    <h5>{{ userProfile?.personalInfo?.firstName}} {{ userProfile?.personalInfo?.lastName }}</h5>
    <!-- Test 1: Reading deep property that exists perfectly -->
    <h5>{{ userProfile?.personalInfo?.preferences?.language | uppercase}} </h5>
    <!-- Test 2: Reading from a nested object tree that is completely MISSING -->
    <h5>{{ userProfile?.contactDetails?.phone?? 'No contacts found'}} </h5>
    <!-- Test 3: Reading a property key that is explicitly initialized as NULL -->
    <h5>{{ userProfile?.accountSetting?.preferredTheme?? 'System Default Dark Mode'}} </h5>

`
})

export class SafeNavigationDashboardComponent {
    userProfile: any = {
        personalInfo: {
            firstName: 'Chaitali',
            lastName: 'Merai',
            preferences: {
                language: 'English'
            }
        },
        // Note: 'contactDetails' object block is entirely omitted here on purpose!
        accountSetting: {
            preferredTheme: null // Explicitly empty state
        }
    }
}