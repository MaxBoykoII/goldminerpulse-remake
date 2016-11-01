import { Component } from '@angular/core';

import { topBanner, sideBanner } from '../mocks/banners';

@Component({
  selector: 'host',
  templateUrl: './templates/host.component.html',
  styleUrls: ['./css/host.component.css']
})

export class HostComponent {
  topBanner: string = topBanner;
  sideBanner: string = sideBanner;
}