import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PhotoService } from '../../photo/photo.service';
import { PhotoComment } from '../../photo/photo-comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html',
    styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {
    @Input() photoId: number;
    commentForm: FormGroup;
    comments$: Observable<PhotoComment[]>;

    constructor(
        private photoService: PhotoService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId);
        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.maxLength(300)]
        });
    }

    save() {
        const comment = this.commentForm.get('comment').value as string;
        this.comments$ = this.photoService
            .addComment(this.photoId, comment)
            .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
            .pipe(tap(() => {
                this.commentForm.reset();
            }));
    }
}
