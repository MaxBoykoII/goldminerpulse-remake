import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Home } from '../interfaces/home.interface';
import { ContentService } from '../services/content.service';

@Component({
    selector: 'home',
    styleUrls: ['./css/home.component.css'],
    templateUrl: './templates/home.component.html'
})

export class HomeComponent implements OnInit {
    page: Home;
    constructor(private router: Router, private _contentService: ContentService) {}
    navigate(route: string): void {
        this.router.navigate([route]);
    }
    ngOnInit(): void {
        this._contentService.fetchHome().subscribe(data => this.page = data);
    }
}