import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { FormsModule } from '@angular/forms';
import { WeightColourDirective } from './weight-colour.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    WeightColourDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
