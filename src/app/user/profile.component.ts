import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class UserProfileComponent implements OnInit {
    profileForm: FormGroup;

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router) {
    }

    ngOnInit(): void {
        if (!this.authService.currentUser) {
            this.profileForm = new FormGroup({
                firstName: new FormControl(),
                lastName: new FormControl()
            });
        } else {
            const { firstName, lastName } = this.authService.currentUser;
            this.profileForm = new FormGroup({
                firstName: new FormControl(firstName),
                lastName: new FormControl(lastName)
            });
        }
    }

    save(values) {
        this.authService.updateUser(values);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }

    validate(control) {
        return this.profileForm.controls['control'].valid || this.profileForm.controls['control'].untouched;
    }
}