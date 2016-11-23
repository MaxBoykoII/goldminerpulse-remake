import { Table } from './table.interface';

export interface StatSection {
    title: string;
    id: string;
    description: string;
    chart_ids: string[];
    tables: Table[];
}