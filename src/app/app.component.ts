import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taigaui';
  testValue = new FormControl()
  searchValue = new FormControl()
  value
  items = ['Luke Skywalker Luke Skywalker Luke Skywalker',
    { id: 1, abc: 'Leia Organa Solo' },
    { id: 2, text: 'Darth Vader' },
    { id: 3, text: 'Han Solo' },
    { id: 4, text: 'Obi-Wan Kenobi' },
    { id: 5, text: 'Yoda' },
  ];
  ngOnInit() {
    this.searchValue.valueChanges.subscribe(e => console.log(e))
  }
  submit() {
    this.value = { id: 2, text: 'Darth Vader' },
      console.log(this.value)
  }
}
