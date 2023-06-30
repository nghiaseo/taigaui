import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DayRange } from './v16/interfaces/DayRange';
import { DateTime } from './v16/interfaces/DateTime';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taigaui';
  testValue = new FormControl()
  searchValue = new FormControl()
  dayRange: DayRange = { from: new Date(), to: new Date() }
  value = new Date()

  items = [{ id: 0, text: 'Luke Skywalker' },
  { id: 1, text: 'Leia Organa Solo' },
  { id: 2, text: 'Darth Vader' },
  { id: 3, text: 'Han Solo' },
  { id: 4, text: 'Obi-Wan Kenobi' },
  { id: 5, text: 'Yoda' },
  ];
  ngOnInit() {
    // console.log(this.value.touched)
  }
  submit() {
    console.log(this.value)


  }
}
