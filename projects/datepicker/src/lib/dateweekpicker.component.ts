import { AfterViewChecked, Component, ViewEncapsulation, ViewChild, TemplateRef, Output, EventEmitter, Inject, Injectable, Optional } from '@angular/core';
import { DateRange, DefaultMatCalendarRangeStrategy, MatCalendar, MatDateRangeSelectionStrategy, MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { DatepickerHeaderComponent } from './datepickerHeader.component';
import { DateAdapter, MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core';

@Injectable()
export class WeekRangeSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
  constructor(private _dateAdapter: DateAdapter<D>) { }

  selectionFinished(date: D | null): DateRange<D> {
    return this._createWeekRange(date);
  }

  createPreview(activeDate: D | null): DateRange<D> {
    return this._createWeekRange(activeDate);
  }

  private _createWeekRange(date: any | null): DateRange<D> {
    if (date) {
      switch (date?.getDay()) {
        case 0: {
          let start = this._dateAdapter.addCalendarDays(date, 0);
          let end = this._dateAdapter.addCalendarDays(date, 6);
          return new DateRange(start, end);
        }
        case 1: {
          let start = this._dateAdapter.addCalendarDays(date, -1);
          let end = this._dateAdapter.addCalendarDays(date, 5);
          return new DateRange(start, end);
        }
        case 2: {
          let start = this._dateAdapter.addCalendarDays(date, -2);
          let end = this._dateAdapter.addCalendarDays(date, 4);
          return new DateRange(start, end);
        }
        case 3: {
          let start = this._dateAdapter.addCalendarDays(date, -3);
          let end = this._dateAdapter.addCalendarDays(date, 3);
          return new DateRange(start, end);
        }
        case 4: {
          let start = this._dateAdapter.addCalendarDays(date, -4);
          let end = this._dateAdapter.addCalendarDays(date, 2);
          return new DateRange(start, end);
        }
        case 5: {
          let start = this._dateAdapter.addCalendarDays(date, -5);
          let end = this._dateAdapter.addCalendarDays(date, 1);
          return new DateRange(start, end);
        }
        case 6: {
          let start = this._dateAdapter.addCalendarDays(date, -6);
          let end = this._dateAdapter.addCalendarDays(date, 0);
          return new DateRange(start, end);
        }
      }
    }

    return new DateRange<D>(null, null);
  }
}

@Component({
  selector: 'lib-weekpicker',
  template: `
      <div class="calendar-wrapper">
        <mat-calendar
          (selectedChange)="_onSelectedChange($event)"
          [selected]="selectedWeek"
          [headerComponent]="customHeader"
          [dateClass]="isSelected"
          >
        </mat-calendar>
      </div>
  `,
  styleUrls: ['./datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WeekpickerComponent implements AfterViewChecked {
  @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();
  selectedWeek!: DateRange<Date>;
  @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;
  selectedDate!: Date;
  calendarVisible = true;
  customHeader = DatepickerHeaderComponent;
  monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor(private dateAdapter: DateAdapter<Date>, @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats, @Optional()
  @Inject(MAT_DATE_RANGE_SELECTION_STRATEGY)
  private _rangeSelectionStrategy: WeekRangeSelectionStrategy<any>) {
    this.dateAdapter.setLocale(navigator.language);
    //this._rangeSelectionStrategy.createPreview(new Date());
    //this._onSelectedChange(new Date());
  }

  isSelected = (date: Date) => {
    if (this.selectedWeek?.start && this.selectedWeek?.end) {
      if (date.toISOString() === this.selectedWeek.start.toISOString()) {
        return 'mat-calendar-body-range-start mat-calendar-body-in-range selected week'
      }
      else if (date.toISOString() === this.selectedWeek.end.toISOString()) {
        return 'mat-calendar-body-range-end mat-calendar-body-in-range selected week'
      }
      else if (date >= this.selectedWeek.start && date <= this.selectedWeek.end) {
        return 'mat-calendar-body-in-range selected week'
      }
    }
    return ''
  }

  _onSelectedChange(date: Date | null): void {
    if (date) {
      this._rangeSelectionStrategy.selectionFinished(date);
      switch (date.getDay()) {
        case 0: {
          let start = this.dateAdapter.addCalendarDays(date, 0);
          let end = this.dateAdapter.addCalendarDays(date, 6);
          this.selectedWeek = new DateRange(start, end);
          this.calendar.updateTodaysDate();
          this.calendar.focusActiveCell();
          return
        }
        case 1: {
          let start = this.dateAdapter.addCalendarDays(date, -1);
          let end = this.dateAdapter.addCalendarDays(date, 5);
          this.selectedWeek = new DateRange(start, end);
          this.calendar.updateTodaysDate();
          this.calendar.focusActiveCell();
          return
        }
        case 2: {
          let start = this.dateAdapter.addCalendarDays(date, -2);
          let end = this.dateAdapter.addCalendarDays(date, 4);
          this.selectedWeek = new DateRange(start, end);
          this.calendar.updateTodaysDate();
          this.calendar.focusActiveCell();
          return
        }
        case 3: {
          let start = this.dateAdapter.addCalendarDays(date, -3);
          let end = this.dateAdapter.addCalendarDays(date, 3);
          this.selectedWeek = new DateRange(start, end);
          this.calendar.updateTodaysDate();
          this.calendar.focusActiveCell();
          return
        }
        case 4: {
          let start = this.dateAdapter.addCalendarDays(date, -4);
          let end = this.dateAdapter.addCalendarDays(date, 2);
          this.selectedWeek = new DateRange(start, end);
          this.calendar.updateTodaysDate();
          this.calendar.focusActiveCell();
          return
        }
        case 5: {
          let start = this.dateAdapter.addCalendarDays(date, -5);
          let end = this.dateAdapter.addCalendarDays(date, 1);
          this.selectedWeek = new DateRange(start, end);
          this.calendar.updateTodaysDate();
          this.calendar.focusActiveCell();
          return
        }
        case 6: {
          let start = this.dateAdapter.addCalendarDays(date, -6);
          let end = this.dateAdapter.addCalendarDays(date, 0);
          this.selectedWeek = new DateRange(start, end);
          this.calendar.updateTodaysDate();
          this.calendar.focusActiveCell();
          return
        }
      }
    }
  }

  get SelectedRange() {
    if (this.selectedWeek) {
      return this.selectedWeek.start?.toLocaleDateString() + ' - ' + (this.selectedWeek.end ? this.selectedWeek.end?.toLocaleDateString() : '');
    }
    return '';
  }

  set SelectedRange(value: any) {
    if (value) {
      try {
        this.selectedWeek = new DateRange(new Date(value.split('-')[0]), new Date(value.split('-')[1]));
      } catch (e) { }
    }
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
