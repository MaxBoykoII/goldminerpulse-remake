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
    chart: Chart = {
        title: '',
        id: '',
        description: '',
        tooltip: '',
        src: ''
    };
    constructor(private _route: ActivatedRoute, private _contentService: ContentService) {}
    ngOnInit(): void {
        const id = this._route.snapshot.params['id'];
        this._contentService.retrieveCache().subscribe(cache => {
            this.chart = cache.find(chart => chart.id === id) || null;
        });
    }
}