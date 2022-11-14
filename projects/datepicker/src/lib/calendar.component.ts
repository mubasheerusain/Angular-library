import { Component, ViewEncapsulation, ViewChild, Inject, forwardRef, Input } from '@angular/core';
import { DateAdapter, MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core';
import { DefaultMatCalendarRangeStrategy, MatCalendar, MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { DatepickerHeaderComponent } from './datepickerHeader.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

//[dateClass]="hideWeekends()" [dateFilter]="disableWeekends" (selectedChange)="onSelectedChange($event)"

@Component({
    selector: 'lib-calendar',
    template: `
        <mat-calendar
          [selected]="selectedDate"
          [headerComponent]="customHeader"
          (selectedChange)="select($event)" 
          [dateClass]="isSelected"
          >
        </mat-calendar>
  `,
    styleUrls: ['./datepicker.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
            useClass: DefaultMatCalendarRangeStrategy,
        },
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CalendarComponent),
            multi: true
        }
    ],
})
export class CalendarComponent {
    @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;
    @Input() name!: string;
    selectedDate!: Date;
    customHeader = DatepickerHeaderComponent;
    monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    daysSelected: any[] = [];
    event: any;
    val: any;

    constructor(private dateAdapter: DateAdapter<Date>, @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats) {
        this.dateAdapter.setLocale(navigator.language);
        this.dateAdapter.getFirstDayOfWeek = () => { return 1; }
        this.dateAdapter.getDayOfWeekNames = () => {
            return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sat'];
        }
        //this.dateAdapter.setLocale('ar-sa');
        //this.dateAdapter.setLocale('zh-cn');
        //this.dateAdapter.setLocale('he');
    }

    // hideWeekends() {
    //     return (date: Date): MatCalendarCellCssClasses => {
    //         return (date.getDay() === 6 || date.getDay() === 0) ? 'weekend' : '';
    //     };
    // } 

    select(selectedDate: Date | null) {
        const index = this.daysSelected.findIndex(x => x == selectedDate);
        if (index < 0) this.daysSelected.push(selectedDate);
        else this.daysSelected.splice(index, 1);
        this.calendar.updateTodaysDate();
        this.value = this.daysSelected;
    }

    isSelected = (date: Date) => {
        const formattedDate = date.getFullYear() +
            "-" +
            ("00" + (date.getMonth() + 1)).slice(-2) +
            "-" +
            ("00" + date.getDate()).slice(-2);
        return this.daysSelected.find(x => x.getFullYear() + "-" + ("00" + (x.getMonth() + 1)).slice(-2) + "-" + ("00" + x.getDate()).slice(-2) == formattedDate) ? 'selected' : '';
    };

    disableWeekends = (d: Date): boolean => {
        const day = d.getDay();
        return day !== 0 && day !== 6;
    }

    onPreviousDay() {
        this._addDays(-1);
    }

    onNextDay() {
        this._addDays(1);
    }

    onSelectedChange(selectedDate: Date | null) {
        if (selectedDate) {
            this.selectedDate = selectedDate;
        }
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
            } catch (e) { }
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

    onChange: any = () => { }

    onTouch: any = () => { }

    set value(val: any) {
        if (val) {
            this.val = val;
            this.onChange(val);
            this.onTouch(val);
        }
    }

    writeValue(value: any) {
        this.value = value;
    }

    registerOnChange(fn: any) {
        this.onChange = fn
    }

    registerOnTouched(fn: any) {
        this.onTouch = fn
    }

}
