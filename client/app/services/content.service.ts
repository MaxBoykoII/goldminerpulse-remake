import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Rx';

import { Home } from '../interfaces/home.interface';
import { ChartSection } from '../interfaces/chart-section.interface';
import { StatSection } from '../interfaces/stat-section.interface';
import { Chart } from '../interfaces/chart.interface';
import { Featured } from '../interfaces/featured.interface';

@Injectable()

export class ContentService {
    private apiURL = 'https://www.goldminerpulse.com/ngd';
    private cache: Chart[];
    constructor(private http: Http) {}
    retrieveCache(): Observable < Chart[] > {
        if (this.cache) {
            return Observable.of(this.cache);
        }
        else {
            return this.http.get(`${this.apiURL}/config-svg-list.php`)
                .map(res => {
                    this.cache = res.json();
                    return this.cache;
                })
                .catch(this.handleError);
        }
    }
    fetchHome(): Observable < Home > {
        return this.http.get(`${this.apiURL}/config-home.php`)
            .map(this.extractData)
            .catch(this.handleError);
    }
    fetchStats(): Observable < StatSection[] > {
        return this.http.get(`${this.apiURL}/config-stats.php`)
            .map(this.extractData)
            .catch(this.handleError);
    }
    fetchCharts(): Observable < ChartSection[] > {
        return this.http.get(`${this.apiURL}/config-charts.php`)
            .map(this.extractData)
            .catch(this.handleError);
    }
    fetchFeatured(): Observable < Featured > {
        return this.http.get(`${this.apiURL}/config-featured.php`)
            .map(this.extractData)
            .catch(this.handleError);
    }
    fetchBlogs(): Observable < ChartSection[] > {
        return this.http.get(`${this.apiURL}/config-blogs.php`)
            .map(this.extractData)
            .catch(this.handleError);
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