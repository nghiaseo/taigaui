import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, delay, Observable, of, Subject, Subscription } from 'rxjs';
const data = [{ id: 0, text: 'Luke Skywalker' },
{ id: 1, text: 'Leia Organa Solo' },
{ id: 2, text: 'Darth Vader' },
{ id: 3, text: 'Han Solo' },
{ id: 4, text: 'Obi-Wan Kenobi' },
{ id: 5, text: 'Yoda' },
];
@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ComboboxComponent),
    multi: true
  }],
})
export class ComboboxComponent implements ControlValueAccessor {
  value = new FormControl();
  @Input() placeholder = ''
  @Input() items = [] //danh sach doi tuong
  @Input() cleaner = false
  @Input() display = ''//ten thuoc tinh hien thi tren select
  onChange: (data: any) => void
  onTouched: () => void;
  isDisabled: boolean;
  subs: Subscription
  serviceSubs: Subscription
  items$ = new BehaviorSubject<Array<any>>([])
  search = ''
  timeout
  readonly stringify = (item: { id: string; text: string }): string => {
    return this.display ? `${item[this.display]}` : item.text
  }

  ngAfterViewInit() {
    this.subs = this.value.valueChanges.subscribe(valueSelected => {
      this.onTouched()
      this.onChange(valueSelected)
    })
  }
  onSearch(e: string) {
    if (!e) this.items$.next([])
    if (this.timeout) clearTimeout(this.timeout)
    if (e) {
      this.items$.next(null)
      this.timeout = setTimeout(() => {
        if (this.serviceSubs) this.serviceSubs.unsubscribe()
        this.serviceSubs = this.searchService().subscribe(res => this.items$.next(res))
      }, 500)
    }
  }
  searchService = () => of(data).pipe(delay(1000))
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
