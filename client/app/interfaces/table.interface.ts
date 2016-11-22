export interface Table {
    title: string;
    id: string;
    description: string;
    headers: string[];
    rows: any[]; // an array of string arrays
}