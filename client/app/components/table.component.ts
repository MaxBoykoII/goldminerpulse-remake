import { Component, Input } from '@angular/core';

@Component({
  selector: 'stat-table',
  templateUrl: './templates/table.component.html',
  styleUrls: ['./css/table.component.css']
})

export class TableComponent {
    @Input() title: string;
    @Input() description: string;
    @Input() headers: string[];
    @Input() rows: any[];
}