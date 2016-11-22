import { Table } from './table.interface';

export interface StatsSection {
    title: string;
    id: string;
    description: string;
    chart_ids: string[];
    tables: Table[];
}