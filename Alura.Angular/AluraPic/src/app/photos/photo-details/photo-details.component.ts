import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { PhotoComment } from '../photo/photo-comment';

@Component({
    templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

    photo$: Observable<Photo>;

    constructor(
        private route: ActivatedRoute,
        private photoService: PhotoService,
        private router: Router
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(id);
    }

    remove() {
        const id = this.route.snapshot.params.photoId;
        this.photoService.removePhoto(id)
            .subscribe(() => this.router.navigate(['']));
    }
}
