import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SerieComponent } from './Serie/Serie.component';
import { SerieModule } from './Serie/Serie.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SerieModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
