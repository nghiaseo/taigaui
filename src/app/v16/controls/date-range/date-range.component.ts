import { Component, EventEmitter, Input, Output, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TuiDay, TuiDayRange } from '@taiga-ui/cdk';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateRangeComponent),
    multi: true
  }],
})
export class DateRangeComponent implements ControlValueAccessor {
  @ViewChild('rangePicker') rangePicker;
  @Input() value
  @Input() placeholder = ''
  @Output() dateSelected = new EventEmitter()
  readonly control = new FormControl();
  readonly min
  readonly max
  onChange: (data: any) => void
  onTouched: () => void;
  isDisabled: boolean;
  subc: Subscription
  nativeInput: HTMLInputElement
  range = [{ range: new TuiDayRange(new TuiDay(1970, 0, 1), new TuiDay(2122, 0, 1)), name: 'tmp range' }]
  ngOnInit() {
    this.subc = this.control.valueChanges.subscribe((rangeSelected) => {
      console.log(rangeSelected)
      if (this.onTouched) this.onTouched()
      if (this.onChange) this.onChange(rangeSelected)
    });
  }
  keyUpEnterHandle = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      this.nativeInput.blur()
    }
  }
  ngAfterViewInit() {
    this.nativeInput = this.rangePicker.nativeFocusableElement
    this.nativeInput.addEventListener('keyup', this.keyUpEnterHandle, false)
  }
  ngOnChanges() {
    if (!this.value) return
    const from = this.convertToTuiDay(new Date(this.value.from))
    const to = this.convertToTuiDay(new Date(this.value.to))
    const range = new TuiDayRange(from, to)
    this.control.setValue(range)
  }

  ngOnDestroy() {
    this.subc.unsubscribe()
  }
  writeValue(obj: any): void {
    this.control.setValue(obj)
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState(isDisabled: boolean) {
    if (isDisabled) this.control.disable()
    else this.control.enable()
  }
  convertToTuiDay(time: Date) {
    const d = time.getDate()
    const m = time.getMonth()
    const y = time.getFullYear()
    return new TuiDay(y, m, d)
  }
}
