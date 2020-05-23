import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './views/grid/grid.component';
import { ListComponent } from './views/list/list.component';
import { MapComponent } from './views/map/map.component';


const routes: Routes = [
  {path: '', redirectTo: '/grid', pathMatch: 'full'},
  {path: 'grid', component: GridComponent},
  {path: 'list', component: ListComponent},
  {path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
