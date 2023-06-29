import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TuiDayRange, TuiDay } from '@taiga-ui/cdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taigaui';
  testValue = new FormControl()
  searchValue = new FormControl()
  value = new FormControl(new TuiDayRange(new TuiDay(2023, 5, 10), new TuiDay(2023, 5, 30)))
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
    // this.value.disable()
    console.log(this.value.value)

  }
}
