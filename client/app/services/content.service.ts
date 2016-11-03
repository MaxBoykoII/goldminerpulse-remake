import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Rx';

import { ChartSection } from '../interfaces/chart-section.interface';

@Injectable()

export class ContentService {
    constructor(private http: Http) {}
    private apiURL = 'https://goldminerpulse.com/ng';

    fetchCharts(): Observable < ChartSection[] > {
        console.log('calling out to:', `${this.apiURL}/config-charts.php`);
        return this.http.get(`${this.apiURL}/config-charts.php`)
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