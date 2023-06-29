import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TuiRootModule, TuiDataListModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiSelectModule, TuiInputModule, TuiInputDateRangeModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { V16 } from './v16';

@NgModule({
  declarations: [
    AppComponent, ...V16
  ],
  imports: [
    BrowserModule,
    TuiRootModule, TuiDataListModule, TuiDataListWrapperModule, TuiSelectModule,
    FormsModule, ReactiveFormsModule, TuiTextfieldControllerModule, TuiInputModule,
    TuiInputDateRangeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
