import { Chart } from './chart.interface';

export interface ChartSection {
    interface: string;
    description: string;
    charts: Chart[];
}