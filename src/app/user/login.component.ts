import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    userName;
    password;

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router) {
    }

    login(value) {
        console.log(value);
        this.authService.login(value);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}