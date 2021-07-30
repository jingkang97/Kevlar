import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DocComponent } from './doc/doc.component';
import { DownloadComponent } from './download/download.component';
import { ExamplesComponent } from './examples/examples.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'documents', component: DocComponent },
  { path: 'download', component:  DownloadComponent},
  { path: 'examples', component:  ExamplesComponent},
  { path: 'tutorials', component:  TutorialsComponent},



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OverviewComponent, DocComponent]