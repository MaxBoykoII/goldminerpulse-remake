import { Component, OnInit } from '@angular/core';

import { ChartSection } from '../interfaces/chart-section.interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'stats',
  templateUrl: './templates/stats.component.html',
  styleUrls: ['./css/stats.component.css']
})

export class StatsComponent implements OnInit {
  sections: ChartSection[] = [];
  constructor(private _contentService: ContentService) {}
  ngOnInit(): void {
    this._contentService.fetchStats().subscribe(sections => this.sections = sections);
  }
}