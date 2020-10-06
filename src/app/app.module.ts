import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { DataComponentComponent } from './data-component/data-component.component';
import 'ag-grid-enterprise';


@NgModule({
  declarations: [
    AppComponent,
    DataComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([DataComponentComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }