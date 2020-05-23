import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './views/grid/grid.component';
import { ListComponent } from './views/list/list.component';
import { MapComponent } from './views/map/map.component';
import { HeaderComponent } from './components/header/header.component';
import { DirectorySortComponent } from './components/directory-sort/directory-sort.component';
import { GridItemComponent } from './components/grid-item/grid-item.component';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ListComponent,
    MapComponent,
    HeaderComponent,
    DirectorySortComponent,
    GridItemComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
