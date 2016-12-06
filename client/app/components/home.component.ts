import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Home } from '../interfaces/home.interface';
import { homeData } from '../mocks/home'; // use mock data for now

@Component({
    selector: 'home',
    styleUrls: ['./css/home.component.css'],
    templateUrl: './templates/home.component.html'
})

export class HomeComponent {
    page: Home = homeData;
    constructor(private router: Router) {}
    navigate(route: string) {
        this.router.navigate([route]);
    }
}