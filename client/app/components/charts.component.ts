import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContentService } from '../services/content.service';
import { ChartSection } from '../interfaces/chart-section.interface';

@Component({
    selector: 'charts',
    templateUrl: './templates/charts.component.html',
    styleUrls: ['./css/charts.component.css']
})
export class ChartsComponent implements OnInit {
    sections: ChartSection[] = [];
    constructor(private _contentService: ContentService, private router: Router) {}
    toId(id:string): void {
        /*
         * Method for in-page navigation
         */
        this.router.navigate(['/charts'], {
            fragment: id
        });
        setTimeout(() => {
          const anchor = window.location.hash.substring(8);
          document.querySelector(anchor).scrollIntoView();
        });
    }
    ngOnInit(): void {
        this._contentService.fetchCharts().subscribe(sections => {
            this.sections = sections;
        });
    }
}