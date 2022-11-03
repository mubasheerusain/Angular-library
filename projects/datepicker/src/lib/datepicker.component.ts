import { AfterViewChecked, Component, ViewEncapsulation, ViewChild, TemplateRef, Output, EventEmitter, Inject } from '@angular/core';
import { DateAdapter, MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core';
import { DefaultMatCalendarRangeStrategy, MatCalendar, MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { DatepickerPanel } from './datepicker.directive';
import { DatepickerHeaderComponent } from './datepickerHeader.component';

@Component({
  selector: 'lib-datepicker',
  template: `
    <ng-template>
      <div class="calendar-wrapper">
        <mat-calendar
          [selected]="selectedDate"
          (selectedChange)="onSelectedChange($event)"
          [headerComponent]="customHeader"
          >
        </mat-calendar>
      </div>
    </ng-template>
  `,
  styleUrls: ['./datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy,
    },
  ],
})
export class DatepickerComponent implements AfterViewChecked, DatepickerPanel {
  @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();
  @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;
  selectedDate!: Date;
  calendarVisible = true;
  customHeader = DatepickerHeaderComponent;
  monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor(private dateAdapter: DateAdapter<Date>, @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats) {
    this.dateAdapter.setLocale(navigator.language); 
    //this.dateAdapter.setLocale('ar-sa');
    //this.dateAdapter.setLocale('zh-cn');
    //this.dateAdapter.setLocale('he');
  }

  onPreviousDay() {
    this._addDays(-1);
  }

  onNextDay() {
    this._addDays(1);
  }

  onSelectedChange(selectedDate: Date) {
    this.selectedDate = selectedDate;
    this.closed.emit();
  }

  get SelectedDate() {
    if (this.selectedDate) {
      return this.selectedDate.toLocaleDateString();
    }
    else {
      return ''
    }
  }

  set SelectedDate(value: any) {
    if (value) {
      try {
        this.selectedDate = new Date(value);
      } catch(e) {}
    }
  }

  private _addDays(days: number) {
    this.selectedDate = new Date(
      this.selectedDate.getFullYear(),
      this.selectedDate.getMonth(),
      this.selectedDate.getDate() + days
    );

    this.calendar._goToDateInView(this.selectedDate, 'month');
  }

  ngAfterViewChecked(): void {
    const circle1 = document.createElement('div');
    circle1.className = 'circle';
    const circle2 = document.createElement('div');
    circle2.className = 'circle';
    const today = document.querySelector(`[aria-label="${this.dateAdapter.format(new Date(), this._dateFormats.display.dateA11yLabel)}"]`);
    const oct4 = document.querySelector(`[aria-label="${this.dateAdapter.format(new Date("November 4, 2022"), this._dateFormats.display.dateA11yLabel)}"]`);
    if (!today?.querySelector('.circle')) {
      today?.appendChild(circle1);
    }
    if (!oct4?.querySelector('.circle')) {
      oct4?.appendChild(circle2);
    }
  }

}
