import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent {
  value = new FormControl();
  @Input() placeholder = ''
  @Input() items = [] //danh sach doi tuong
  @Input() cleaner = false
  @Input() display = ''//ten thuoc tinh hien thi tren select

  readonly stringify = (item: { name: string; surname: string }): string => {

    return `${item.name} ${item.surname}`;
  }
}
