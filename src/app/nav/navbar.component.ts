import { Component } from '@angular/core';
import { AuthService } from '../user/shared/auth.service';

@Component({
    selector: '<nav-bar></nav-bar>',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    constructor(public authService: AuthService) {
    }
}