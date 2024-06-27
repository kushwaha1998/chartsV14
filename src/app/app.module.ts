import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MychartComponent } from './component/mychart/mychart.component';
import { ChartDialogComponent } from './component/chart-dialog/chart-dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule  } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MychartComponent,
    ChartDialogComponent
  ],
  entryComponents :[
    MychartComponent
  ],
  imports: [
    MatDialogModule ,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
   
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
