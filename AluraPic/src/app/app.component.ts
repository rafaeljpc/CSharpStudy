import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Alura Pic';
    photos = [
        {
            url: 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg',
            description: 'Sonic'
        },
        {
            url: 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg',
            description: 'Sonic'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/SOME_LIKE_IT_HOT_TITLE.jpg',
            description: 'hot'
        },
    ];
}
