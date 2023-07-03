import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tuiCreateTimePeriods } from '@taiga-ui/kit';
import { TUI_DATE_SEPARATOR, TuiDay, TuiTime } from '@taiga-ui/cdk';
import { DateTime } from '../../interfaces/DateTime';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateTimeComponent),
    multi: true
  }, { provide: TUI_DATE_SEPARATOR, useValue: '/' },]
})
export class DateTimeComponent implements ControlValueAccessor {
  @Input() timeMode = "HH:MM"
  @Input() cleaner = false
  @Input() label = ''
  @Input() required = false
  timeValue = new FormControl();
  dateValue = new FormControl();
  times = tuiCreateTimePeriods();
  subs: Subscription
  t: TuiTime
  d: TuiDay
  onChange: (data: any) => void
  onTouched: () => void;
  ngAfterViewInit() {
    this.timeValue.valueChanges.subscribe((e: TuiTime) => {
      this.t = e;
      if (this.onTouched) this.onTouched()
      if (this.onChange) this.emitDateTime()


    })
    this.dateValue.valueChanges.subscribe((e: TuiDay) => {
      this.d = e
      if (this.onTouched) this.onTouched()
      if (this.onChange) this.emitDateTime()
    })
  }
  emitDateTime() {
    const datetime: DateTime = {
      time: this.t ? {
        hour: this.t.hours,
        minute: this.t.minutes,
        second: this.t.seconds
      } : null,
      date: this.d ? {
        year: this.d.year,
        month: this.d.month,
        day: this.d.day
      } : null
    }
    this.onChange(datetime)
  }
  ngOnDestroy = () => this.subs.unsubscribe()

  writeValue(obj: DateTime | Date): void {
    if (obj instanceof Date) {
      const time = new TuiTime(obj.getHours(), obj.getMinutes(), obj.getSeconds())
      const date = new TuiDay(obj.getFullYear(), obj.getMonth(), obj.getDate())
      this.timeValue.setValue(time)
      this.dateValue.setValue(date)
    }
    else {
      if (obj?.time) {
        const time = new TuiTime(obj.time.hour || 0, obj.time.minute || 0, obj.time.second || 0)
        this.timeValue.setValue(time)
      }
      if (obj?.date) {
        const date = new TuiDay(obj.date.year || 0, obj.date.month || 0, obj.date.day || 0)
        this.dateValue.setValue(date)
      }
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState(isDisabled: boolean) {
    if (isDisabled) {
      this.timeValue.disable()
      this.dateValue.disable()
    }
    else {
      this.timeValue.enable()
      this.dateValue.enable()
    }
  }
}
