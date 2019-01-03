import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../photo/photo.service';

@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

    photos: Object[] = [
    ];
    userName: string;

    /**
     *
     */
    constructor(
        private photoService: PhotoService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.userName = this.activatedRoute.snapshot.params.userName;
        this.photoService
            .listFromUser(this.userName)
            .subscribe(
                photos => this.photos = photos
            );
    }

}
