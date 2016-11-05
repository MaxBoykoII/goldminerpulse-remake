import { Component, OnInit } from '@angular/core';

import { ChartSection } from '../interfaces/chart-section.interface';
import { ContentService } from '../services/content.service';

@Component({
    selector: 'latest',
    templateUrl: './templates/latest.component.html',
    styleUrls: ['./css/latest.component.css']
})

export class LatestComponent implements OnInit {
    sections: ChartSection[] = [];
    constructor(private _contentService: ContentService) {}
    ngOnInit(): void {
        this._contentService.fetchLatest().subscribe(sections => this.sections = sections);
    }
}