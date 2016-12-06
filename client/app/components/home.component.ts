import { Component } from '@angular/core';

import { Home } from '../interfaces/home.interface';
import { homeData } from '../mocks/home'; // use mock data for now

@Component({
    selector: 'home',
    styleUrls: ['./css/home.component.css'],
    templateUrl: './templates/home.component.html'
})

export class HomeComponent {
    page: Home = homeData;
}