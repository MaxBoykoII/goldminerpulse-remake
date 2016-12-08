import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StatSection } from '../interfaces/stat-section.interface';
import { Chart } from '../interfaces/chart.interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'stats',
  templateUrl: './templates/stats.component.html',
  styleUrls: ['./css/stats.component.css']
})

export class StatsComponent implements OnInit {
  sections: StatSection[] = [];
  charts: Chart[] = [];
  constructor(private _contentService: ContentService,  private router: Router) {}
  getById(id: string): Chart {
    return this.charts.find(chart => chart.id === id);
  }
  toId(id:string): void {
        /*
         * Method for in-page navigation
         */
        this.router.navigate(['/stats'], {
            fragment: id
        });
        setTimeout(() => {
          const anchor = window.location.hash.substring(7);
          document.querySelector(anchor).scrollIntoView();
        });
    }
  ngOnInit(): void {
    this._contentService.fetchStats().subscribe(sections => {
      this.sections = sections;
      const ids = sections.map(section => section.chart_ids).reduce((ids1, ids2) => ids1.concat(ids2));
      this._contentService.retrieveCache().subscribe(cache => {
        this.charts = ids.map(id => cache.find(chart => chart.id === id));
      });
    });
  }
}