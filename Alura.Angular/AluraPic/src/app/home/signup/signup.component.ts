import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    private signupForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTaken: UserNotTakenValidatorService,
        private signUpservice: SignUpService,
        private router: Router
    ) { }

    ngOnInit() {
        const fn = this.userNotTaken.checkUserNameTaken();

        this.signupForm = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            fullName: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40),
            ]],
            userName: ['', [
                Validators.required,
                lowerCaseValidator,
                Validators.minLength(2),
                Validators.maxLength(30),
            ],
            this.userNotTaken.checkUserNameTaken()
            ],
            password: ['', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(14),
            ]]
        });
    }

    signup() {
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signUpservice
            .signup(newUser)
            .subscribe(() => {
                this.router.navigate(['']);
            },
            err => {
                console.error(err);
            });
    }
}
