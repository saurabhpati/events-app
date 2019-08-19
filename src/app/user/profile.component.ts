import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
    templateUrl: './profile.component.html'
})
export class UserProfileComponent implements OnInit {
    profileForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router) {
    }

    ngOnInit(): void {
        let fName = this.authService.currentUser ? this.authService.currentUser.firstName : "";
        let lName = this.authService.currentUser ? this.authService.currentUser.lastName : "";

        this.firstName = new FormControl(fName, Validators.required);
        this.lastName = new FormControl(lName, Validators.required);

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
        });
    }

    save(values) {
        if (!this.profileForm.valid) {
            return;
        }

        this.authService.updateUser(values);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }

    isFirstNameValid(): boolean {
        return this.firstName.valid || this.firstName.untouched;
    }

    isLastNameValid(): boolean {
        return this.lastName.valid || this.lastName.untouched;
    }

    // isValid(control): boolean {
    //     console.log('valid and touched...', this.profileForm.controls);

    //     return this.profileForm.controls[control].valid 
    //         && this.profileForm.controls[control].touched;
    // }
}