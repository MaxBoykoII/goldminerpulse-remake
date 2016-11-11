import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'host',
  templateUrl: './templates/host.component.html',
  styleUrls: ['./css/host.component.css']
})

export class HostComponent {
  page: string; // the current page the user is on
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe(val => {
      console.log('A router event has ocurred: ', val);
    });
  };
}