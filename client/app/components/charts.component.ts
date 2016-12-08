import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContentService } from '../services/content.service';
import { Chart } from '../interfaces/chart.interface';
import { ChartSection } from '../interfaces/chart-section.interface';

@Component({
    selector: 'charts',
    templateUrl: './templates/charts.component.html',
    styleUrls: ['./css/charts.component.css']
})
export class ChartsComponent implements OnInit {
    sections: ChartSection[] = [];
    charts: Chart[] = [];
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
    getById(id: string): Chart {
        return this.charts.find(chart => chart.id === id);
    }
    ngOnInit(): void {
        this._contentService.fetchCharts().subscribe(sections => {
            this.sections = sections;
            const ids = sections.map(section => section.chart_ids).reduce((ids1, ids2) => ids1.concat(ids2));
            this._contentService.retrieveCache().subscribe(cache => {
            this.charts = ids.map(id => cache.find(chart => chart.id === id)).filter(chart => chart !== undefined);
            console.log('retrieved charts:', this.charts);
      });
        });
    }
}