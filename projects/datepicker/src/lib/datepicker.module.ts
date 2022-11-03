import { NgModule } from '@angular/core';
import { DatepickerComponent } from './datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DatepickerHeaderComponent } from './datepickerHeader.component';
import { DaterangepickerComponent } from './daterangepicker.component';
import { DatePickerDirective } from './datepicker.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { WeekpickerComponent } from './dateweekpicker.component';

@NgModule({
  declarations: [
    DatepickerComponent,
    DatepickerHeaderComponent,
    DaterangepickerComponent,
    DatePickerDirective,
    CalendarComponent,
    WeekpickerComponent
  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    DatepickerComponent,
    DatepickerHeaderComponent,
    DaterangepickerComponent,
    DatePickerDirective,
    CalendarComponent,
    WeekpickerComponent
  ],
  providers: [
    DatePipe
  ]
})
export class DatepickerModule { }
