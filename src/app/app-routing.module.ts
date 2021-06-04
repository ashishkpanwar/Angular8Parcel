import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParcelhandelComponent } from './parcelhandel/parcelhandel.component'
import { ProcessComponent } from './process/process.component'


const routes: Routes = [
  {
    path: 'Parcels',
    component: ParcelhandelComponent,
    data: { title: 'Parcels' }
  },
  {
    path: 'process/:id',
    component: ProcessComponent,
    data: { title: 'process' }
  },
  {
    path: '',
    redirectTo: '/Parcels',
    pathMatch: 'full'
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
