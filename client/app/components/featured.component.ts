import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/mergeMap';

import { Featured } from '../interfaces/featured.interface';
import { Chart } from '../interfaces/chart.interface';
import { ContentService } from '../services/content.service';

@Component({
    selector: 'featured',
    templateUrl: './templates/featured.component.html',
    styleUrls: ['./css/featured.component.css']
})

export class FeaturedComponent implements OnInit {
    featured: Featured;
    charts: Chart[] = [];
    constructor(private _contentService: ContentService) {}
    getChart(id: string):Chart {
            return this.charts.find(chart => chart.id === id);
    }
    ngOnInit(): void {
        this._contentService.fetchFeatured().flatMap(featured => {
            this.featured = featured;
            return this._contentService. retrieveCache();
        }).subscribe(cache => {
            const ids = this.featured.features.map(feature => feature.id);
            this.charts = ids.map(id => {
                return cache.find(chart => chart.id === id);
            });
        });
    }
}