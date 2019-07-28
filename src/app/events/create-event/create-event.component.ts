import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent {
    public isDirty: boolean;

    constructor(private readonly router: Router) {
        this.isDirty = true;
    }
    
    cancel() {
        this.router.navigate(['/events']);
    }
}