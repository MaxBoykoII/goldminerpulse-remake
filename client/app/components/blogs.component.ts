import { Component, OnInit } from '@angular/core';

import { ChartSection } from '../interfaces/chart-section.interface';
import { ContentService } from '../services/content.service';

@Component({
    selector: 'blogs',
    templateUrl: './templates/blogs.component.html',
    styleUrls: ['./css/blogs.component.css']
})

export class BlogsComponent implements OnInit {
    sections: ChartSection[] = [];
    constructor(private _contentService: ContentService) {}
    ngOnInit(): void {
        this._contentService.fetchBlogs().subscribe(sections => this.sections = sections);
    }
}