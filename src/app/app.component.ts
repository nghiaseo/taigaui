import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DayRange } from './v16/interfaces/DayRange';
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
  value = new FormControl(this.dayRange)
  items = ['Luke Skywalker Luke Skywalker Luke Skywalker',
    { id: 1, abc: 'Leia Organa Solo' },
    { id: 2, text: 'Darth Vader' },
    { id: 3, text: 'Han Solo' },
    { id: 4, text: 'Obi-Wan Kenobi' },
    { id: 5, text: 'Yoda' },
  ];
  ngOnInit() {
    console.log(this.value.touched)
  }
  submit() {
    console.log(this.value.value)


  }
}
