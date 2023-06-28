import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements ControlValueAccessor {
  @Input() placeHolder = ''
  @Input() items = []
  @Input() cleaner = false
  onChange: (data: any) => void
  onTouched: () => void;
  isDisabled: boolean;
  cleanerElement: Element
  subs: Subscription
  value = new FormControl();
  ngAfterViewInit() {

    this.subs = this.value.valueChanges.subscribe(valueSelected => {
      this.onTouched()
      this.onChange(valueSelected)
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
  getValueToDisplay(item) {
    return item.text || item.name
  }
}
