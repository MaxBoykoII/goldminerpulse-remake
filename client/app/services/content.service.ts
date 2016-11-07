import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Rx';

import { ChartSection } from '../interfaces/chart-section.interface';
import { Chart } from '../interfaces/chart.interface';

@Injectable()

export class ContentService {
    constructor(private http: Http) {}
    private apiURL = 'https://goldminerpulse.com/ng';
    fetchStats(): Observable < ChartSection[] > {
        return this.http.get(`${this.apiURL}/confg-stats.php`)
            .map(this.extractData)
            .catch(this.handleError)
    }
    fetchCharts(): Observable < ChartSection[] > {
        return this.http.get(`${this.apiURL}/config-charts.php`)
            .map(this.extractData)
            .catch(this.handleError)
    }
    fetchLatest(): Observable < ChartSection[] > {
        return this.http.get(`${this.apiURL}/config-latest.php`)
            .map(this.extractData)
            .catch(this.handleError)
    }
    fetchBlogs(): Observable < ChartSection[] > {
        return this.http.get(`${this.apiURL}/config-blogs.php`)
            .map(this.extractData)
            .catch(this.handleError)
    }
    private extractData(res: Response) {
        return res.json();
    }
    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        console.log('error: ', error);
        return Observable.throw(errMsg);
    }
}