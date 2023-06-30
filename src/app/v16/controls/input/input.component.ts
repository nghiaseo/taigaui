import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeHolder = ''
  @Input() cleaner = false
  @Input() label = ''
  @Input() required = false
  @Input() type = 'text'
  value = new FormControl();
  subs: Subscription
  onChange: (data: any) => void
  onTouched: () => void;
  ngAfterViewInit() {

    this.subs = this.value.valueChanges.subscribe(value => {
      if (this.onTouched) this.onTouched()
      if (this.onChange) this.onChange(value)
    })
  }
  ngOnDestroy = () => this.subs.unsubscribe()

  writeValue(obj: any): void {
    this.value.setValue(obj)
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState(isDisabled: boolean) {
    if (isDisabled) this.value.disable()
    else this.value.enable()
  }
}
