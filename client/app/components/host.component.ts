import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

import { Footer } from '../interfaces/footer.interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'host',
  templateUrl: './templates/host.component.html',
  styleUrls: ['./css/host.component.css']
})

export class HostComponent {
  url: string = ''; // the url of the page the user is on
  footer: Footer;
  current: number = 0; // number corresponding to the banner currently being displayed; changes on route change.
  numBanners: number = 5;
  constructor(private router: Router, private _contentService: ContentService) {}
  ngOnInit(): void {
    this._contentService.fetchHost().subscribe(footer => this.footer = footer);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.urlAfterRedirects) {
        this.url = event.urlAfterRedirects;
        this.current = Math.floor(Math.random() * this.numBanners); // change the banner
      }
    });
  };
}