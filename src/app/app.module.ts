import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverviewComponent } from './overview/overview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DocComponent } from './doc/doc.component';
import { DownloadComponent } from './download/download.component';
import { ExamplesComponent } from './examples/examples.component';
import { TutorialsComponent } from './tutorials/tutorials.component';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    NavbarComponent,
    DocComponent,
    DownloadComponent,
    ExamplesComponent,
    TutorialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
