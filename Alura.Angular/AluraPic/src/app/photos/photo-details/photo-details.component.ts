import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { PhotoComment } from '../photo/photo-comment';
import { AlertService } from '../../shared/componentes/alert/alert.service';
import { UserService } from '../../core/user/user.service';

@Component({
    templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

    photo$: Observable<Photo>;

    constructor(
        private route: ActivatedRoute,
        private photoService: PhotoService,
        private router: Router,
        private alertService: AlertService,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(id);
        this.photo$.subscribe(() => {}, err => {
            console.log(err);
            this.router.navigate(['not-found']);
        });
    }

    remove() {
        const id = this.route.snapshot.params.photoId;
        this.photoService
            .removePhoto(id)
            .subscribe(() => {
                this.alertService.success('Photo removed', true);
                this.router.navigate(['/user', this.userService.getUserName()]);
            },
            () => {
                this.alertService.warning('Could not delete the photo');
            });
    }
}
