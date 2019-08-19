import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    userName;
    password;
    mouseOverLogin;

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router) {
            this.mouseOverLogin = false;
    }

    login(value) {
        this.authService.login(value);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}