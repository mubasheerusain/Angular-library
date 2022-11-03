import { Component, ChangeDetectorRef, Inject } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'lib-datepicker-header',
  template: `
      <div class="datepicker-header">
        <button class="datepicker-header-button" (click)="previousClicked('month')">
            <svg width="6.4" height="12.8" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.981181 6.20399L6.11326 0.791051C6.35477 0.536325 6.77741 0.536325 7.01892 0.791051C7.26043 1.04578 7.26043 1.49155 7.01892 1.74627L2.18873 6.8408L7.01892 12.2537C7.26043 12.5085 7.26043 12.9542 7.01892 13.209C6.77741 13.4637 6.35477 13.4637 6.11326 13.209L0.981181 7.47762C0.800049 7.28657 0.800049 7.09553 0.800049 6.90448C0.800049 6.58608 0.860426 6.33135 0.981181 6.20399Z" fill="#003D7A"/>
            </svg>
        </button>
        <span class="datepicker-header-label"><button class="datepicker-period" (click)="yearView()">{{periodLabel}}</button></span>
        <button class="datepicker-header-button" (click)="nextClicked('month')">
            <svg width="6.4" height="12.8" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.01892 6.20399L1.88684 0.791051C1.64533 0.536325 1.22269 0.536325 0.981181 0.791051C0.739671 1.04578 0.739671 1.49155 0.981181 1.74627L5.81137 6.8408L0.981181 12.2537C0.739671 12.5085 0.739671 12.9542 0.981181 13.209C1.22269 13.4637 1.64533 13.4637 1.88684 13.209L7.01892 7.47762C7.20005 7.28657 7.20005 7.09553 7.20005 6.90448C7.20005 6.58608 7.13967 6.33135 7.01892 6.20399Z" fill="#003D7A"/>
            </svg>
        </button>
      </div>
    `,
  styles: [`
    .datepicker-header {
      display: flex;
      align-items: center;
      padding: 27px 16px;
    }
    .datepicker-header-label {
      flex: 1;
      text-align: center;
    }
    .datepicker-period {
        border: none;
        background: transparent;
        cursor: pointer;
        font-weight: 600;
        font-size: 15px;
        line-height: 130%;
        color: #333333;
      }
    .datepicker-header-button {
        background: none;
        border: none;
        cursor: pointer;
    }
    `]
})
export class DatepickerHeaderComponent {
  private _destroyed = new Subject<void>();

  constructor(
    private _calendar: MatCalendar<any>, private _dateAdapter: DateAdapter<any>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats, cdr: ChangeDetectorRef) {
    _calendar.stateChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  get periodLabel() {
    return this._dateAdapter
      .format(this._calendar.activeDate, this._dateFormats.display.monthYearA11yLabel);
  }

  yearView() {
    this._calendar.currentView = 'multi-year';
  }

  previousClicked(mode: 'month' | 'year') {
    this._calendar.activeDate = mode === 'month' ?
      this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1) :
      this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
  }

  nextClicked(mode: 'month' | 'year') {
    this._calendar.activeDate = mode === 'month' ?
      this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1) :
      this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
    this._calendar.monthSelected.emit();
  }
}
