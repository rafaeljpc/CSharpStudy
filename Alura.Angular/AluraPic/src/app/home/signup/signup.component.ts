import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { PlatformDetectorService } from '../../core/platform/platform-detector.service';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    providers: [ UserNotTakenValidatorService ]
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTaken: UserNotTakenValidatorService,
        private signUpservice: SignUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
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

        if (this.platformDetectorService.isPlatformBrowser()) {
            this.emailInput.nativeElement.focus();
        }
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
