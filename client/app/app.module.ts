import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HostComponent } from './components/host.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [HostComponent],
    bootstrap: [HostComponent]
})

export class AppModule {}