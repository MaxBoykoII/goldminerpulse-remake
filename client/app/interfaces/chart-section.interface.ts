import { Chart } from './chart.interface';

export interface ChartSection {
    interface: string;
    id: string;
    description: string;
    chart_ids: string[];
}