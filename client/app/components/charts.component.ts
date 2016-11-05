import { Component, OnInit } from '@angular/core';

import { ContentService } from '../services/content.service';
import { ChartSection } from '../interfaces/chart-section.interface';

@Component({
    selector: 'charts',
    templateUrl: './templates/charts.component.html',
    styleUrls: ['./css/charts.component.css']
})
export class ChartsComponent implements OnInit {
    sections: ChartSection[] = [];
    constructor(private _contentService: ContentService) {}
    ngOnInit(): void {
        this._contentService.fetchCharts().subscribe(sections => {
            this.sections = sections;
        });
    }
}