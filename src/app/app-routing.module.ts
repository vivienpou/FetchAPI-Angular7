import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentralresultsComponent } from './centralresults/centralresults.component';

const routes: Routes = [
  { path: '',
    component: CentralresultsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
