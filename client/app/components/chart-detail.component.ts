import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Chart } from '../interfaces/chart.interface';
import { ContentService } from '../services/content.service';

@Component({
    selector: 'chart',
    templateUrl: './templates/chart-detail.component.html',
    styleUrls: ['./css/chart-detail.component.css']
})

export class ChartDetailComponent implements OnInit {
    chart: Chart = null;
    prevChart: Chart = null;
    nextChart: Chart = null;
    totalCharts: number;
    position: number;
    constructor(private _route: ActivatedRoute, private _contentService: ContentService) {}
    ngOnInit(): void {
        const id = this._route.snapshot.params['id'];
        this._contentService.retrieveCache().subscribe(cache => {
            this.chart = cache.find(chart => chart.id === id) || null;
            if (this.chart && cache.length > 2) {
                const index = cache.indexOf(this.chart);
                this.prevChart = cache[(index === 0) ? cache.length - 1 : index - 1];
                this.nextChart = cache[(index === cache.length - 1) ? 0 : index + 1];
                this.position = index + 1;
                this.totalCharts = cache.length;
            }
        });
    }
}