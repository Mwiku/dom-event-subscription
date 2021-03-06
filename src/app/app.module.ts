import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
