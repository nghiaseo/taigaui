import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { V16 } from './v16';
import { TAIGAUI_MODULES } from './v16/taiga-modules';

@NgModule({
  declarations: [
    AppComponent, ...V16
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule, HttpClientModule,
    ...TAIGAUI_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
