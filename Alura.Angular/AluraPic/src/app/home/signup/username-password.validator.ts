import { ValidatorFn, FormGroup } from '@angular/forms';

export const userNamePassword: ValidatorFn = (formGroup: FormGroup) => {
    const userName = formGroup.get('userName').value;
    const password = formGroup.get('password').value;

    if (!(userName.trim() + password.trim())) { return null; }

    if (userName !== password) {
        return null;
    } else {
        return { userNamePassword: true };
    }
};
