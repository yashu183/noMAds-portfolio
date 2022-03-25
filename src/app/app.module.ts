import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { DescComponent } from './components/desc/desc.component';
import { MeetMeComponent } from './components/meet-me/meet-me.component';
import { LocationComponent } from './components/location/location.component';
import { NgxArcTextModule } from 'ngx-arc-text';
import { LogoComponent } from './components/logo/logo.component';
import { MeetMeLineComponent } from './components/meet-me-line/meet-me-line.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    DescComponent,
    MeetMeComponent,
    LocationComponent,
    LogoComponent,
    MeetMeLineComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxArcTextModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
